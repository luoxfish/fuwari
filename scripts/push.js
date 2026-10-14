import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(projectRoot);

const args = process.argv.slice(2);
const skipConfirmation = args.includes("--yes") || args.includes("-y");
const messageIndex = args.findIndex((arg) => arg === "--message" || arg === "-m");
const commitMessage = messageIndex >= 0 ? args[messageIndex + 1] : args.find((arg) => !arg.startsWith("-"));

if (messageIndex >= 0 && (!commitMessage || commitMessage.startsWith("-"))) {
	console.error("用法：pnpm push [提交信息] [--yes]");
	process.exit(1);
}

function runGit(commandArgs, options = {}) {
	const result = execFileSync("git", commandArgs, {
		cwd: projectRoot,
		encoding: "utf8",
		stdio: options.capture === false ? "inherit" : ["ignore", "pipe", "pipe"],
	});
	return options.capture === false ? "" : result.trim();
}

function fail(message) {
	console.error(`推送失败：${message}`);
	process.exit(1);
}

if (!existsSync(path.join(projectRoot, ".git"))) {
	fail("当前目录不是 Git 仓库。");
}

const branch = runGit(["branch", "--show-current"]);
if (!branch) {
	fail("当前处于 detached HEAD，无法确定要推送的分支。");
}

const status = runGit(["status", "--short"]);
if (!status) {
	console.log(`工作区没有新的修改，尝试推送 ${branch}...`);
	runGit(["push", "origin", branch], { capture: false });
	process.exit(0);
}

try {
	runGit(["diff", "--check"]);
} catch {
	fail("检测到空白字符错误，请先修复 git diff --check 报告的问题。");
}

const message = commitMessage || "chore: update site";
console.log("将要提交的修改：");
console.log(status);
console.log(`\n提交信息：${message}`);
console.log(`目标分支：origin/${branch}`);

if (!skipConfirmation) {
	const readline = createInterface({ input, output });
	const answer = await readline.question("确认暂存、提交并推送？输入 yes 继续：");
	readline.close();
	if (answer.trim().toLowerCase() !== "yes") {
		console.log("已取消，工作区未被修改。");
		process.exit(0);
	}
}

try {
	runGit(["add", "-A"], { capture: false });
	runGit(["commit", "-m", message], { capture: false });
	runGit(["push", "origin", branch], { capture: false });
	console.log(`已提交并推送 ${branch}。`);
} catch (error) {
	const exitCode = error?.status ?? "未知";
	fail(`Git 命令执行失败（退出码：${exitCode}）。请根据上方 Git 输出处理后重试。`);
}

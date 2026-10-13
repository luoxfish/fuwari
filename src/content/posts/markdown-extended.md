---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: 了解 Fuwari 提供的 GitHub 卡片、提示块和剧透文本等扩展语法。
image: ''
tags: [示例, Markdown, Fuwari]
category: 示例
draft: false
---

## GitHub 仓库卡片

可以在页面加载后展示 GitHub 仓库的信息卡片：

::github{repo="Fabrizz/MMM-OnSpotify"}

使用下列语法即可插入卡片：

```markdown
::github{repo="owner/repository"}
```

## 提示块

支持 `note`、`tip`、`important`、`warning` 和 `caution` 五类提示块。

:::note
即使读者快速浏览文章，也应当注意这条信息。
:::

:::tip
这是一条帮助读者更高效完成任务的小提示。
:::

:::important
这是成功完成操作所必需的关键信息。
:::

:::warning
这条信息提醒读者立即留意可能的风险。
:::

:::caution
请在继续之前评估潜在的负面后果。
:::

### 自定义标题

可以在类型后面的方括号中指定标题：

:::note[自定义标题]
这是一条带有自定义标题的提示。
:::

```markdown
:::note[自定义标题]
这是一条带有自定义标题的提示。
:::
```

GitHub 风格的提示块同样可用：

> [!TIP]
> [GitHub 提示语法](https://github.com/orgs/community/discussions/16925)同样受到支持。

## 剧透文本

剧透文本默认隐藏，并且可以包含 **Markdown** 语法。

答案是：:spoiler[保持好奇，持续记录。]

---
title: Expressive Code 代码展示
published: 2024-04-10
description: 在 Markdown 中展示带有高亮、标题、标记和折叠区域的代码块。
tags: [Markdown, 代码, 示例]
category: 示例
draft: false
---

本文展示 [Expressive Code](https://expressive-code.com/) 提供的代码块能力。它可以为文章中的代码自动加入语法高亮、编辑器边框和行号。

## 语法高亮

```js
console.log('这行代码会获得语法高亮123')
```

也可以渲染 ANSI 颜色：

```ansi
ANSI 颜色：
- 普通：红 绿 黄 蓝 紫 青
- 粗体：红 绿 黄 蓝 紫 青
```

## 编辑器与终端边框

通过 `title` 属性为代码块设置文件名：

```js title="greeting.js"
console.log('欢迎来到 Fuwari')
```

终端命令会使用终端边框：

```bash
echo "这是一条终端命令"
```

也可以手动覆盖边框类型：

```sh frame="none"
echo "这个代码块没有边框"
```

## 行与文本标记

用行号标出关键位置：

```js {1, 4-5}
function buildSite() {
  const content = '你好'
  const language = 'zh_CN'
  return { content, language }
}
```

插入和删除标记有助于展示改动：

```js title="config.ts" del={2} ins={3}
const siteTitle = '示例站点'
const siteLanguage = '英文'
const siteTitle = '中文博客'
const siteLanguage = 'zh_CN'
```

## 自动换行与折叠

长行可通过 `wrap` 开启换行：

```js wrap
const description = '这是一段较长的说明文字，在较窄的阅读区域中会自动换行，避免横向滚动。'
```

折叠区域适合隐藏不需要立即阅读的初始化代码：

```js collapse={1-4, 12-14}
const config = loadConfig()
const posts = await loadPosts()
const index = createSearchIndex(posts)
prepareTheme(config)

render(posts)

function render(items) {
  console.log(`已渲染 ${items.length} 篇文章`)
}

index.save()
cleanup()
closeConnection()
```

## 行号

为代码块加入行号，并可指定起始行：

```js showLineNumbers startLineNumber=5
console.log('第五行')
console.log('第六行')
```

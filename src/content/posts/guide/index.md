---
title: Fuwari 使用指南
published: 2024-04-01
description: 从配置到写作，快速开始使用这个博客模板。
image: "./cover.jpeg"
tags: [Fuwari, 博客, 配置]
category: 指南
draft: false
---

> 封面图片来源：[Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

Fuwari 基于 [Astro](https://astro.build/) 构建，适合用来发布轻量、快速的静态博客。本文介绍最常用的内容配置方式；更多框架能力可查阅 [Astro 文档](https://docs.astro.build/)。

## 文章 Frontmatter

每篇文章顶部都有一段 YAML 元数据，用于配置标题、发布日期、简介和分类等信息。

```yaml
---
title: 我的第一篇博客
published: 2024-01-01
description: 这是我的第一篇博客文章。
image: ./cover.jpg
tags: [随笔, 入门]
category: 技术
draft: false
---
```

| 字段 | 说明 |
| --- | --- |
| `title` | 文章标题。 |
| `published` | 文章发布日期。 |
| `description` | 简短摘要，会显示在首页文章列表中。 |
| `image` | 封面图片路径；可使用远程链接、`public` 目录绝对路径或相对文章文件的路径。 |
| `tags` | 用于检索和归档的标签列表。 |
| `category` | 文章所属分类。 |
| `draft` | 设为 `true` 时文章不会公开显示。 |

## 放置文章文件

将文章放在 `src/content/posts/` 下。你也可以为文章新建独立目录，将封面等资源与正文放在一起，便于维护。

```text
src/content/posts/
├── 第一篇文章.md
└── 第二篇文章/
    ├── cover.png
    └── index.md
```

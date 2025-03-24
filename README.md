# hugo 主题 Aronica

**DO NOT USE THIS THEME. It's under development.**

**不要使用此主题, 正在开发中.**

## 样例网站

[https://www.arong-xu.com](https://www.arong-xu.com/)

## Features

- 支持黑暗模式
- 响应式设计(支持电脑, 平板, 手机)
- 支持代码主题

## Installation

```bash
git submodule add https://github.com/arong/hugo-theme-aronica.git
```

## ShortCodes

1. 多标签代码
2. 引入公共文件, 比如专栏目录, 在专栏中的每一个文件中都引入相同的目录
3. `PostRef`自动引用帖子的 title 和链接

## TODO

- [ ] 增加 Include Code 的功能
- [ ] 代码高亮, 增加代码选取以及在 Compiler Explorer 中运行代码
  - https://www.foonathan.net/2021/05/hugo-godbolt/
- [ ] 集成 Google Search
  ```html
  <script
    async
    src="https://cse.google.com/cse.js?cx=2557c2a3f2f1c4c98"
  ></script>
  <div class="gcse-search"></div>
  ```
- [x] 需要保证不同页面切换前后的观感, 目前就是要求标题的位置需要固定一致, 不要上下起伏.
- [x] 增加边栏导航
- [x] 增加分页
  - [x] 首页
  - [x] Category
  - [x] Tags
- [x] 适配手机端
- [x] 增加暗黑模式, 目前仅仅支持黑白切换
  - [ ] 增加一个 follow system 的选项
- [x] 为代码块增加复制按钮
- [ ] 为导航栏增加悬停效果, 激活效果
- [ ] 设计首页
- [ ] 设计 404 页面

## BUG

1. ~~not pass w3c validation~~

## 响应式布局

采用 grid 布局
整体分为如下几个部分

```
1 2 3
4 5 6
7 8 9
```

PC 端:

```
[ 1 2 3 ] 为header
[ [4] [5] [6] ], 4 为navbar, 5 为main, 6 为aside;
[ 7 8 9 ] 为footer
```

navbar 在 PC 端上面可隐藏, 在移动端则显示在 main 的顶部, 就是一条 bar(需要 js 控制显示当前的 section)

移动端

```
[ 1 2 3 ] 为header
[ 4 5 6 ] 为main
[ 7 8 9 ] 为footer
```

### header 元素

1. 公共部分:
  1. Search bar
  2. 黑白切换按钮
  3. 菜单栏
1. 对于专栏, 存在一个专栏的目录, 在移动端上面显示出一个按钮, 点击就会弹出drawer

## 测试页面

1. http://192.168.146.129:1313/
1. http://192.168.146.129:1313/modern-cpp/
3. http://192.168.1.11:1313/tags/

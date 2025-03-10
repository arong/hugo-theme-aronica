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
3. `PostRef`自动引用帖子的title和链接

## TODO

- [ ] 增加Include Code的功能
- [ ] 代码高亮, 增加代码选取以及在Compiler Explorer中运行代码
    - https://www.foonathan.net/2021/05/hugo-godbolt/
- [ ] 集成Google Search
    ```html
    <script async src="https://cse.google.com/cse.js?cx=2557c2a3f2f1c4c98">
    </script>
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
    - [ ] 增加一个follow system的选项
- [x] 为代码块增加复制按钮
- [ ] 为导航栏增加悬停效果, 激活效果
- [ ] 设计首页
- [ ] 设计404页面

## BUG

1. not pass w3c validation

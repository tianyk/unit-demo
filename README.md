# 单元测试题模板代码

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 规范

1. **不允许**变更目录规范
2. **不允许**修改配置文件
3. 文件要放置到争取的目录

	```
	.
	├── README.md
	├── dist/
	├── package-lock.json
	├── package.json
	├── public/                   -- `run serve`使用<https://cli.vuejs.org/zh/guide/html-and-static-assets.html#public-%E6%96%87%E4%BB%B6%E5%A4%B9> **不允许**私自修改
	│   ├── currentScript.js
	│   ├── demo.html
	│   └── index.html
	├── src                       -- 源码目录
	│   ├── App.vue               -- 组件源文件 **不允许**更改名字
	│   ├── mixin.js              -- 组件公共方法、配置 **不允许**私自修改
	│   ├── utils/                -- 工具包 **不允许**私自修改
	│   ├── assets/               -- 项目依赖的静态文件（小于**4Kb**的静态文件不应该使用CDN）
	│   ├── components/           -- 组件目录（公共组件放置到发布到`npm`中）
	│   └── main.js 
	├── babel.config.js           -- babel配置文件 **不允许**私自修改
	└── vue.config.js             -- 配置文件 **不允许**私自修改
	```
4. 不允许使用`console.log`debug

	需要debug的代码引入`./utils/debug`模块，命名空间为`ut:`。
	
	``` js 
	const debug = require('./utils/debug')('ut:mixin');
	
	debug('[message] msg: %s, type: %s', msg, type);
	```
	
	浏览器开启debug在控制台执行后面的代码`localStorage.debug = 'ut:*'`。
	

## 问题

1. build entry 入口问题

    <https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/commands/build/index.js#L47>

    build 模式下entry需要手动指定到`./src/main.js`

2. demo.html 问题

    <https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/commands/build/resolveLibConfig.js#L21>

    <https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/commands/build/resolveLibConfig.js#L69>
    
    build 后自动生成的`demo.html`最好可定制，或者直接可以用。不在依赖`publich/demo.html`做测试预览。
    
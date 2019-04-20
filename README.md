# unit-demo

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

### 问题
1. build entry 入口问题

    build 模式下entry需要手动指定到`./src/main.js`

2. demo.html 问题

    build 后自动生成的`demo.html`最好可定制，或者直接可以用。不在依赖`publich/demo.html`做测试预览。
# Q2 盛典

[原型](http://o.wemomo.com:8081/ftp/Live/19q2%E7%9B%9B%E5%85%B8/q2%E7%9B%9B%E5%85%B8%E5%8E%9F%E5%9E%8B/#g=1&p=%E7%94%B7%E5%A5%B3%E6%99%8B%E7%BA%A7%E6%A6%9C%E5%8D%95)

[设计稿](https://app.zeplin.io/project/57e3410cf2bc1fa01c52f4c5/screen/5cf4d57f04fcd97a2f0858ac)

[接口 wiki](https://moji.wemomo.com/doc#/detail/76058)

## 页面拆分

![页面拆分](https://s.momocdn.com/w/u/others/2019/06/05/1559735349040-WechatIMG51052.png)

| 功能                  | 负责人 | 开发时间（天） | 页面地址 or 组件名                                                                                                                        |
| --------------------- | ------ | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 主页面-地区争霸榜     | 陈建伟 | 5              | [pages/index](https://live-web.immomo.com/fep/momo/fe-live-activity-projects/live-ceremony19-q2/index.html?_bid=1000446)                  |  |
| 主页面-主播战况榜     | 陈建伟 | 1              |                                                                                                                                           |  |
| 主页面-男女赛         | 姚国力 | 3              |                                                                                                                                           |  |
| 主页面-地区用户贡献榜 | 姚国力 | 1              |                                                                                                                                           |  |
| 活动条                | 姚国力 | 3              | [pages/liveBar](https://live-web.immomo.com/fep/momo/fe-live-activity-projects/live-ceremony19-q2/liveBar.html?_bid=1000446)              |  |
| 主页面-华北战区榜     | 林倩   | 1              | [pages/region](https://live-web.immomo.com/fep/momo/fe-live-activity-projects/live-ceremony19-q2/region.html?_bid=1000446&roomid=)        |  |
| 悬赏任务弹窗页面      | 林倩   | 1              | [pages/rewardTask](https://live-web.immomo.com/fep/momo/fe-live-activity-projects/live-ceremony19-q2/rewardTask.html?_bid=1000446&roomid) |  |
| 用户玩法页面          | 林倩   | 2              | [pages/guardBox](https://live-web.immomo.com/fep/momo/fe-live-activity-projects/live-ceremony19-q2/guardBox.html?_bid=1000446)            |  |

## 排期

![WechatIMG51057](/assets/WechatIMG51057.png)

https://www.teambition.com/project/5cd271939bff07001943d430/tasks/scrum/5cee37b66d21010018c41142

# 视频组前端的项目

> 请在项目上线后更新 README 文件，详细描述这个项目。

欢迎使用视频组前端的脚手架开发你的项目, 这是一个基于 Vue 框架的脚手架，推荐你使用 vue ui 的方式去进行开发，因为它会给你提供更好的展示效果。

##### 需要修改 webpack 配置的 请到 vue.config.js 修改

### host 配置

```
127.0.0.1 local.m.immomo.com
```

### 命令

```
npm run serve
npm run serve // 构建联调包
npm run build // 构建生产包

# 推荐使用 vue 的 GUI 模式查看
vue ui
```

### 工程规范

- Page 级文件小写命名, 如 `home.vue`
- component 文件使用大驼峰，如`SwitchTab.vue`
- 对于开发中需要用到的组件和方法请使用 [Live-develop-kit](https://ldk.wemomo.com) 中提供的功能。
- 为了确保项目稳定安全的开发上线，请确保你的代码符合我们期望的[各种规范](https://moji.wemomo.com/doc#/detail/53260)。
- 同时为了保证项目上线后的正确性请在开发阶段确保你没有踩这些[坑](https://moji.wemomo.com/doc#/detail/21869)

### 工程结构

```
momo-live
├── dist         // 编译后目录
├── node_modules // 项目依赖
├── public // 静态模板文件
├── scripts // CI脚本、npm run 脚本等
├── src
│    ├── assets     // 静态文件
│    ├── components // 公用组件
│    ├── pages      // 页面
│    ├── store     // vuex
│    │  ├──  index.js
│    ├── service     // api请求
│    │  ├──  index.js   // apis 定义
│    ├── utils     // 函数方法
│    │  ├──  index.js   // 工具类
├── .gitignore
├── package-lock.json
├── package.json
├── Jenkinsfile
├── vue.config.js // webpack相关构建配置
└── README.md
```

### 新建 CI 项目流程攻略

https://moji.wemomo.com/doc#/detail/67272

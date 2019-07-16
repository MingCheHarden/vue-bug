# vue-bug

## steps to reproduce

1. find an iphone which ios software version > 12.2 .  My situation is ios 12.3.1 iphoneX

2. clone https://github.com/yaoguoli/vue-bug & npm i & npm run serve

3. use charles to proxy your iphone and  open url http://local.m.immomo.com:8081/ in wechat or safari

4. you will get an alert with "TypeError: undefined is not an object(evaluating 'vm.$scopedSlots')"

![WechatIMG481](/assets/WechatIMG481_2hutucbpm.jpeg)
# qywechat

> 向企业微信群组发送消息

## Features

- 🚀 支持文本、markdown、图片、图文、文件、语音、模板卡片七种消息类型。
- 🤖️ 完善的类型提示
  
## Install

```bash
npm install --save qywechat
```

## Usage

```js
import { sendText } from 'qywechat';

await sendText({
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<yourkey>',
  content: '广州今日天气：29度，大部分多云，降雨概率：60%',
  mentioned_list: ['wangqing', '@all'],
  mentioned_mobile_list: ['13800001111', '@all'],
});
```

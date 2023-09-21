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

## API

### sendText

发送文本类型消息，详细可查看[企业微信文档](https://developer.work.weixin.qq.com/document/path/91770#%E6%96%87%E6%9C%AC%E7%B1%BB%E5%9E%8B)。

```js
sendText(option: TextOption)
```

#### TextOption

| 参数                  | 是否必填 | 说明                                                                                                                       |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| url                   | 是       | 机器人的 webhook 地址                                                                                                      |
| content               | 是       | 文本内容，最长不超过2048个字节，必须是utf8编码                                                                             |
| mentioned_list        | 否       | userid 的列表，提醒群中的指定成员(@某个成员)，@all表示提醒所有人，如果开发者获取不到 userid，可以使用mentioned_mobile_list |
| mentioned_mobile_list | 否       | 手机号列表，提醒手机号对应的群成员(@某个成员)，@all 表示提醒所有人                                                         |

### sendMarkdown

发送 markdown 消息，详细可查看[企业微信文档](https://developer.work.weixin.qq.com/document/path/91770#markdown%E7%B1%BB%E5%9E%8B)。

```js
sendText(option: MarkdownOption)
```

#### MarkdownOption

| 参数    | 是否必填 | 说明                                                 |
| ------- | -------- | ---------------------------------------------------- |
| url     | 是       | 机器人的 webhook 地址                                |
| content | 是       | markdown内容，最长不超过4096个字节，必须是 utf8 编码 |

## LICENSE

[MIT](https://github.com/yyz945947732/cnname/blob/master/LICENSE)
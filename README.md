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
});
```

## API

### sendText

发送文本类型消息，详细可查看[企业微信文档](https://developer.work.weixin.qq.com/document/path/91770#%E6%96%87%E6%9C%AC%E7%B1%BB%E5%9E%8B)。

```js
sendText({
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<yourkey>',
  content: '广州今日天气：29度，大部分多云，降雨概率：60%',
  mentioned_list: ['wangqing', '@all'],
  mentioned_mobile_list: ['13800001111', '@all'],
});
```

| 参数                  | 是否必填 | 说明                                                                                                                         |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| url                   | 是       | 机器人的 webhook 地址                                                                                                        |
| content               | 是       | 文本内容，最长不超过 2048 个字节，必须是 utf8 编码                                                                           |
| mentioned_list        | 否       | userid 的列表，提醒群中的指定成员(@某个成员)，@all 表示提醒所有人，如果开发者获取不到 userid，可以使用 mentioned_mobile_list |
| mentioned_mobile_list | 否       | 手机号列表，提醒手机号对应的群成员(@某个成员)，@all 表示提醒所有人                                                           |

### sendMarkdown

发送 markdown 消息，详细可查看[企业微信文档](https://developer.work.weixin.qq.com/document/path/91770#markdown%E7%B1%BB%E5%9E%8B)。

```js
sendMarkdown({
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<yourkey>',
  content:
    '实时新增用户反馈<font color="warning">132例</font>，请相关同事注意。',
});
```

| 参数    | 是否必填 | 说明                                                    |
| ------- | -------- | ------------------------------------------------------- |
| url     | 是       | 机器人的 webhook 地址                                   |
| content | 是       | markdown 内容，最长不超过 4096 个字节，必须是 utf8 编码 |

### sendImage

发送图片类型消息，详细可查看[企业微信文档](https://developer.work.weixin.qq.com/document/path/91770#%E5%9B%BE%E7%89%87%E7%B1%BB%E5%9E%8B)。

```js
sendImage({
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<yourkey>',
  base64: 'DATA',
  md5: 'MD5',
});
```

| 参数   | 是否必填 | 说明                               |
| ------ | -------- | ---------------------------------- |
| url    | 是       | 机器人的 webhook 地址              |
| base64 | 是       | 图片内容的 base64 编码             |
| md5    | 是       | 图片内容（base64 编码前）的 md5 值 |

### sendNews

发送图文类型消息，详细可查看[企业微信文档](https://developer.work.weixin.qq.com/document/path/91770#%E5%9B%BE%E6%96%87%E7%B1%BB%E5%9E%8B)。

```js
sendNews({
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<yourkey>',
  articles: [
    {
      title: '中秋节礼品领取',
      description: '今年中秋节公司有豪礼相送',
      url: 'www.qq.com',
      picurl: 'http://xxx.png',
    },
  ],
});
```

| 参数                 | 是否必填 | 说明                                                                              |
| -------------------- | -------- | --------------------------------------------------------------------------------- |
| url                  | 是       | 机器人的 webhook 地址                                                             |
| articles             | 是       | 图文消息，一个图文消息支持 1 到 8 条图文                                          |
| articles.title       | 是       | 标题，不超过 128 个字节，超过会自动截断                                           |
| articles.description | 否       | 描述，不超过 512 个字节，超过会自动截断                                           |
| articles.url         | 是       | 点击后跳转的链接                                                                  |
| articles.picurl      | 否       | 图文消息的图片链接，支持 JPG、PNG 格式，较好的效果为大图 1068✖️455，小图 150✖️150 |

### sendFile

发送文件类型消息，详细可查看[企业微信文档](https://developer.work.weixin.qq.com/document/path/91770#%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B)。

```js
sendFile({
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<yourkey>',
  media_id: '3a8asd892asd8asd',
});
```

| 参数     | 是否必填 | 说明                                |
| -------- | -------- | ----------------------------------- |
| url      | 是       | 机器人的 webhook 地址               |
| media_id | 是       | 文件 id，通过下文的文件上传接口获取 |

### sendVoice

发送语音类型消息，详细可查看[企业微信文档](https://developer.work.weixin.qq.com/document/path/91770#%E8%AF%AD%E9%9F%B3%E7%B1%BB%E5%9E%8B)。

```js
sendVoice({
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<yourkey>',
  media_id: 'MEDIA_ID',
});
```

| 参数     | 是否必填 | 说明                                    |
| -------- | -------- | --------------------------------------- |
| url      | 是       | 机器人的 webhook 地址                   |
| media_id | 是       | 语音文件 id，通过下文的文件上传接口获取 |

## LICENSE

[MIT](https://github.com/yyz945947732/cnname/blob/master/LICENSE)

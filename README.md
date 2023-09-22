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

### sendTextNoticeCard

发送文本通知模版卡片消息，详细可查看[企业微信文档](https://developer.work.weixin.qq.com/document/path/91770#%E6%96%87%E6%9C%AC%E9%80%9A%E7%9F%A5%E6%A8%A1%E7%89%88%E5%8D%A1%E7%89%87)。

```js
sendTextNoticeCard({
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<yourkey>',
  source: {
    icon_url:
      'https://wework.qpic.cn/wwpic/252813_jOfDHtcISzuodLa_1629280209/0',
    desc: '企业微信',
    desc_color: 0,
  },
  main_title: {
    title: '欢迎使用企业微信',
    desc: '您的好友正在邀请您加入企业微信',
  },
  emphasis_content: {
    title: '100',
    desc: '数据含义',
  },
  quote_area: {
    type: 1,
    url: 'https://work.weixin.qq.com/?from=openApi',
    appid: 'APPID',
    pagepath: 'PAGEPATH',
    title: '引用文本标题',
    quote_text: 'Jack：企业微信真的很好用~\nBalian：超级好的一款软件！',
  },
  sub_title_text: '下载企业微信还能抢红包！',
  horizontal_content_list: [
    {
      keyname: '邀请人',
      value: '张三',
    },
    {
      keyname: '企微官网',
      value: '点击访问',
      type: 1,
      url: 'https://work.weixin.qq.com/?from=openApi',
    },
    {
      keyname: '企微下载',
      value: '企业微信.apk',
      type: 2,
      media_id: 'MEDIAID',
    },
  ],
  jump_list: [
    {
      type: 1,
      url: 'https://work.weixin.qq.com/?from=openApi',
      title: '企业微信官网',
    },
    {
      type: 2,
      appid: 'APPID',
      pagepath: 'PAGEPATH',
      title: '跳转小程序',
    },
  ],
  card_action: {
    type: 1,
    url: 'https://work.weixin.qq.com/?from=openApi',
    appid: 'APPID',
    pagepath: 'PAGEPATH',
  },
});
```

| 参数                             | 类型     | 是否必填 | 说明                                                                                                                        |
| -------------------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| url                              | String   | 是       | 机器人的 webhook 地址                                                                                                       |
| source                           | Object   | 否       | 卡片来源样式信息，不需要来源样式可不填写                                                                                    |
| source.icon_url                  | String   | 否       | 来源图片的 url                                                                                                              |
| source.desc                      | String   | 否       | 来源图片的描述，建议不超过 13 个字                                                                                          |
| source.desc_color                | Number   | 否       | 来源文字的颜色，目前支持：0 (默认) 灰色，1 黑色，2 红色，3 绿色                                                             |
| main_title                       | Object   | 是       | 模版卡片的主要内容，包括一级标题和标题辅助信息                                                                              |
| main_title.title                 | String   | 否       | 一级标题，建议不超过 26 个字。模版卡片主要内容的一级标题 main_title.title 和二级普通文本 s ub_title_text 必须有一项填写     |
| main_title.desc                  | String   | 否       | 标题辅助信息，建议不超过 30 个字                                                                                            |
| emphasis_content                 | Object   | 否       | 关键数据样式                                                                                                                |
| emphasis_content.title           | String   | 否       | 关键数据样式的数据内容，建议不超过 10 个字                                                                                  |
| emphasis_content.desc            | String   | 否       | 关键数据样式的数据描述内容，建议不超过 15 个字                                                                              |
| quote_area                       | Object   | 否       | 引用文献样式，建议不与关键数据共用                                                                                          |
| quote_area.type                  | Number   | 否       | 引用文献样式区域点击事件，0 或不填代表没有点击事件，1 代表跳转 url，2 代表跳转小程序                                        |
| quote_area.url                   | String   | 否       | 点击跳转的 url，quote_area.type 是 1 时必填                                                                                 |
| quote_area.appid                 | String   | 否       | 点击跳转的小程序的 appid，quote_area.type 是 2 时必填                                                                       |
| quote_area.pagepath              | String   | 否       | 点击跳转的小程序的 pagepath，quote_area.type 是 2 时选填                                                                    |
| quote_area.title                 | String   | 否       | 引用文献样式的标题                                                                                                          |
| quote_area.quote_text            | String   | 否       | 引用文献样式的引用文案                                                                                                      |
| sub_title_text                   | String   | 否       | 二级普通文本，建议不超过 112 个字。模版卡片主要内容的一级标题 main_title.title 和二级普通文本 sub_title_text 必须有一项填写 |
| horizontal_content_list          | Object[] | 否       | 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过 6                                   |
| horizontal_content_list.type     | Number   | 否       | 模版卡片的二级标题信息内容支持的类型，1 是 url，2 是文件附件，3 代表点击跳转成员详情                                        |
| horizontal_content_list.keyname  | String   | 是       | 二级标题，建议不超过 5 个字                                                                                                 |
| horizontal_content_list.value    | String   | 否       | 二级文本，如果 horizontal_content_list.type 是 2，该字段代表文件名称（要包含文件类型），建议不超过 26 个字                  |
| horizontal_content_list.url      | String   | 否       | 链接跳转的 url，horizontal_content_list.type 是 1 时必填                                                                    |
| horizontal_content_list.media_id | String   | 否       | 附件的 media_id，horizontal_content_list.type 是 2 时必填                                                                   |
| horizontal_content_list.userid   | String   | 否       | 成员详情的 userid，horizontal_content_list.type 是 3 时必填                                                                 |
| jump_list                        | Object[] | 否       | 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过 3                                  |
| jump_list.type                   | Number   | 否       | 跳转链接类型，0 或不填代表不是链接，1 代表跳转 url，2 代表跳转小程序                                                        |
| jump_list.title                  | String   | 是       | 跳转链接样式的文案内容，建议不超过 13 个字                                                                                  |
| jump_list.url                    | String   | 否       | 跳转链接的 url，jump_list.type 是 1 时必填                                                                                  |
| jump_list.appid                  | String   | 否       | 跳转链接的小程序的 appid，jump_list.type 是 2 时必填                                                                        |
| jump_list.pagepath               | String   | 否       | 跳转链接的小程序的 pagepath，jump_list.type 是 2 时选填                                                                     |
| card_action                      | Object   | 是       | 整体卡片的点击跳转事件，text_notice 模版卡片中该字段为必填项                                                                |
| card_action.type                 | Number   | 是       | 卡片跳转类型，1 代表跳转 url，2 代表打开小程序。text_notice 模版卡片中该字段取值范围为[1,2]                                 |
| card_action.url                  | String   | 否       | 跳转事件的 url，card_action.type 是 1 时必填                                                                                |
| card_action.appid                | String   | 否       | 跳转事件的小程序的 appid，card_action.type 是 2 时必填                                                                      |
| card_action.pagepath             | String   | 否       | 跳转事件的小程序的 pagepath，card_action.type 是 2 时选填                                                                   |

### sendNewsNoticeCard

发送图文展示模版卡片消息，详细可查看[企业微信文档](https://developer.work.weixin.qq.com/document/path/91770#%E5%9B%BE%E6%96%87%E5%B1%95%E7%A4%BA%E6%A8%A1%E7%89%88%E5%8D%A1%E7%89%87)。

```js
sendNewsNoticeCard({
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<yourkey>',
  source: {
    icon_url:
      'https://wework.qpic.cn/wwpic/252813_jOfDHtcISzuodLa_1629280209/0',
    desc: '企业微信',
    desc_color: 0,
  },
  main_title: {
    title: '欢迎使用企业微信',
    desc: '您的好友正在邀请您加入企业微信',
  },
  card_image: {
    url: 'https://wework.qpic.cn/wwpic/354393_4zpkKXd7SrGMvfg_1629280616/0',
    aspect_ratio: 2.25,
  },
  image_text_area: {
    type: 1,
    url: 'https://work.weixin.qq.com',
    title: '欢迎使用企业微信',
    desc: '您的好友正在邀请您加入企业微信',
    image_url:
      'https://wework.qpic.cn/wwpic/354393_4zpkKXd7SrGMvfg_1629280616/0',
  },
  quote_area: {
    type: 1,
    url: 'https://work.weixin.qq.com/?from=openApi',
    appid: 'APPID',
    pagepath: 'PAGEPATH',
    title: '引用文本标题',
    quote_text: 'Jack：企业微信真的很好用~\nBalian：超级好的一款软件！',
  },
  vertical_content_list: [
    {
      title: '惊喜红包等你来拿',
      desc: '下载企业微信还能抢红包！',
    },
  ],
  horizontal_content_list: [
    {
      keyname: '邀请人',
      value: '张三',
    },
    {
      keyname: '企微官网',
      value: '点击访问',
      type: 1,
      url: 'https://work.weixin.qq.com/?from=openApi',
    },
    {
      keyname: '企微下载',
      value: '企业微信.apk',
      type: 2,
      media_id: 'MEDIAID',
    },
  ],
  jump_list: [
    {
      type: 1,
      url: 'https://work.weixin.qq.com/?from=openApi',
      title: '企业微信官网',
    },
    {
      type: 2,
      appid: 'APPID',
      pagepath: 'PAGEPATH',
      title: '跳转小程序',
    },
  ],
  card_action: {
    type: 1,
    url: 'https://work.weixin.qq.com/?from=openApi',
    appid: 'APPID',
    pagepath: 'PAGEPATH',
  },
});
```

| 参数                             | 类型     | 是否必填 | 说明                                                                                                                    |
| -------------------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| url                              | String   | 是       | 机器人的 webhook 地址                                                                                                   |
| source                           | Object   | 否       | 卡片来源样式信息，不需要来源样式可不填写                                                                                |
| source.icon_url                  | String   | 否       | 来源图片的 url                                                                                                          |
| source.desc                      | String   | 否       | 来源图片的描述，建议不超过 13 个字                                                                                      |
| source.desc_color                | Number   | 否       | 来源文字的颜色，目前支持：0 (默认) 灰色，1 黑色，2 红色，3 绿色                                                         |
| main_title                       | Object   | 是       | 模版卡片的主要内容，包括一级标题和标题辅助信息                                                                          |
| main_title.title                 | String   | 否       | 一级标题，建议不超过 26 个字。模版卡片主要内容的一级标题 main_title.title 和二级普通文本 s ub_title_text 必须有一项填写 |
| main_title.desc                  | String   | 否       | 标题辅助信息，建议不超过 30 个字                                                                                        |
| card_image                       | Object   | 是       | 图片样式                                                                                                                |
| card_image.url                   | String   | 是       | 图片的 url                                                                                                              |
| card_image.aspect_ratio          | Number   | 否       | 图片的宽高比，宽高比要小于 2.25，大于 1.3，不填该参数默认 1.3                                                           |
| image_text_area                  | Object   | 否       | 左图右文样式                                                                                                            |
| image_text_area.type             | Number   | 否       | 左图右文样式区域点击事件，0 或不填代表没有点击事件，1 代表跳转 url，2 代表跳转小程序                                    |
| image_text_area.url              | String   | 否       | 点击跳转的 url，image_text_area.type 是 1 时必填                                                                        |
| image_text_area.appid            | String   | 否       | 点击跳转的小程序的 appid，必须是与当前应用关联的小程序，image_text_area.type 是 2 时必填                                |
| image_text_area.pagepath         | String   | 否       | 点击跳转的小程序的 pagepath，image_text_area.type 是 2 时选填                                                           |
| image_text_area.title            | String   | 否       | 左图右文样式的标题                                                                                                      |
| image_text_area.desc             | String   | 否       | 左图右文样式的描述                                                                                                      |
| image_text_area.image_url        | String   | 是       | 左图右文样式的图片 url                                                                                                  |
| quote_area                       | Object   | 否       | 引用文献样式，建议不与关键数据共用                                                                                      |
| quote_area.type                  | Number   | 否       | 引用文献样式区域点击事件，0 或不填代表没有点击事件，1 代表跳转 url，2 代表跳转小程序                                    |
| quote_area.url                   | String   | 否       | 点击跳转的 url，quote_area.type 是 1 时必填                                                                             |
| quote_area.appid                 | String   | 否       | 点击跳转的小程序的 appid，quote_area.type 是 2 时必填                                                                   |
| quote_area.pagepath              | String   | 否       | 点击跳转的小程序的 pagepath，quote_area.type 是 2 时选填                                                                |
| quote_area.title                 | String   | 否       | 引用文献样式的标题                                                                                                      |
| quote_area.quote_text            | String   | 否       | 引用文献样式的引用文案                                                                                                  |
| vertical_content_list            | Object[] | 否       | 卡片二级垂直内容，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过 4                                |
| vertical_content_list.title      | String   | 是       | 卡片二级标题，建议不超过 26 个字                                                                                        |
| vertical_content_list.desc       | String   | 否       | 二级普通文本，建议不超过 112 个字                                                                                       |
| horizontal_content_list          | Object[] | 否       | 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过 6                               |
| horizontal_content_list.type     | Number   | 否       | 模版卡片的二级标题信息内容支持的类型，1 是 url，2 是文件附件，3 代表点击跳转成员详情                                    |
| horizontal_content_list.keyname  | String   | 是       | 二级标题，建议不超过 5 个字                                                                                             |
| horizontal_content_list.value    | String   | 否       | 二级文本，如果 horizontal_content_list.type 是 2，该字段代表文件名称（要包含文件类型），建议不超过 26 个字              |
| horizontal_content_list.url      | String   | 否       | 链接跳转的 url，horizontal_content_list.type 是 1 时必填                                                                |
| horizontal_content_list.media_id | String   | 否       | 附件的 media_id，horizontal_content_list.type 是 2 时必填                                                               |
| horizontal_content_list.userid   | String   | 否       | 成员详情的 userid，horizontal_content_list.type 是 3 时必填                                                             |
| jump_list                        | Object[] | 否       | 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过 3                              |
| jump_list.type                   | Number   | 否       | 跳转链接类型，0 或不填代表不是链接，1 代表跳转 url，2 代表跳转小程序                                                    |
| jump_list.title                  | String   | 是       | 跳转链接样式的文案内容，建议不超过 13 个字                                                                              |
| jump_list.url                    | String   | 否       | 跳转链接的 url，jump_list.type 是 1 时必填                                                                              |
| jump_list.appid                  | String   | 否       | 跳转链接的小程序的 appid，jump_list.type 是 2 时必填                                                                    |
| jump_list.pagepath               | String   | 否       | 跳转链接的小程序的 pagepath，jump_list.type 是 2 时选填                                                                 |
| card_action                      | Object   | 是       | 整体卡片的点击跳转事件，text_notice 模版卡片中该字段为必填项                                                            |
| card_action.type                 | Number   | 是       | 卡片跳转类型，1 代表跳转 url，2 代表打开小程序。text_notice 模版卡片中该字段取值范围为[1,2]                             |
| card_action.url                  | String   | 否       | 跳转事件的 url，card_action.type 是 1 时必填                                                                            |
| card_action.appid                | String   | 否       | 跳转事件的小程序的 appid，card_action.type 是 2 时必填                                                                  |
| card_action.pagepath             | String   | 否       | 跳转事件的小程序的 pagepath，card_action.type 是 2 时选填                                                               |

## LICENSE

[MIT](https://github.com/yyz945947732/cnname/blob/master/LICENSE)

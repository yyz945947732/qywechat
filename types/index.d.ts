export interface Option {
  /**
   * 群机器人 webhook 地址
   * @see https://developer.work.weixin.qq.com/document/path/91770
   */
  url: string;
}

/** 文本类型 */
export interface TextOption extends Option {
  /**
   * 文本内容，最长不超过 2048 个字节，必须是 utf8 编码
   */
  content: string;
  /**
   * userid的列表，提醒群中的指定成员(@某个成员)，@all表示提醒所有人，如果开发者获取不到 userid，可以使用 mentioned_mobile_list
   */
  mentioned_list?: string[];
  /**
   * 手机号列表，提醒手机号对应的群成员(@某个成员)，`@all` 表示提醒所有人
   */
  mentioned_mobile_list?: string[];
}

/** markdown 类型 */
export interface MarkdownOption extends Option {
  /**
   * markdown 内容，最长不超过 4096 个字节，必须是 utf8 编码
   */
  content: string;
}

/** 图片类型 */
export interface ImageOption extends Option {
  /**
   * 图片内容的 base64 编码
   */
  base64: string;
  /**
   * 图片内容（base64 编码前）的 md5 值
   */
  md5: string;
}

export interface Articles {
  /**
   * 标题，不超过128个字节，超过会自动截断
   */
  title: string;
  /**
   * 描述，不超过512个字节，超过会自动截断
   */
  description?: string;
  /**
   * 点击后跳转的链接
   */
  url: string;
  /**
   * 图文消息的图片链接，支持 JPG、PNG 格式，较好的效果为大图 1068*455，小图 150*150
   */
  picurl?: string;
}

/** 图文类型 */
export interface NewsOption extends Option {
  /**
   * 图文消息，一个图文消息支持1到8条图文
   */
  articles: Articles[];
}

/** 文件类型 */
export interface FileOption extends Option {
  /**
   * 文件 id，通过下文的文件上传接口获取
   */
  media_id: string;
}

/** 语音类型 */
export interface VoiceOption extends Option {
  /**
   * 语音文件id，通过下文的文件上传接口获取
   */
  media_id: string;
}

/**
 * 卡片来源样式信息，不需要来源样式可不填写
 */
export interface Source {
  /**
   * 来源图片的url
   */
  icon_url?: string;
  /**
   * 来源图片的描述，建议不超过13个字
   */
  desc?: string;
  /**
   * 来源文字的颜色，目前支持：0(默认) 灰色，1 黑色，2 红色，3 绿色
   */
  desc_color?: number;
}

/**
 * 模版卡片的主要内容，包括一级标题和标题辅助信息
 */
export interface MainTitle {
  /**
   * 一级标题，建议不超过 26 个字。模版卡片主要内容的一级标题 `main_title.title` 和二级普通文本 `sub_title_text` 必须有一项填写
   */
  title?: string;
  /**
   * 标题辅助信息，建议不超过 30 个字
   */
  desc?: string;
}

/**
 * 图片样式
 */
export interface CardImage {
  /**
   * 图片的url
   */
  url: string;
  /**
   * 图片的宽高比，宽高比要小于 2.25，大于 1.3，不填该参数默认 1.3
   */
  aspect_ratio?: number;
}

/**
 * 	左图右文样式
 */
export interface ImageTextArea {
  /**
   * 左图右文样式区域点击事件，0 或不填代表没有点击事件，1 代表跳转url，2 代表跳转小程序
   */
  type?: number;
  /**
   * 点击跳转的 url，`image_text_area.type` 是 1 时必填
   */
  url?: string;
  /**
   * 点击跳转的小程序的 appid，必须是与当前应用关联的小程序，`image_text_area.type` 是 2 时必填
   */
  appid?: string;
  /**
   * 点击跳转的小程序的 pagepath，`image_text_area.type` 是 2 时选填
   */
  pagepath?: string;
  /**
   * 左图右文样式的标题
   */
  title?: string;
  /**
   * 左图右文样式的描述
   */
  desc?: string;
  /**
   * 左图右文样式的图片url
   */
  image_url: string;
}

/**
 * 关键数据样式
 */
export interface EmphasisContent {
  /**
   * 关键数据样式的数据内容，建议不超过 10 个字
   */
  title?: string;
  /**
   * 关键数据样式的数据描述内容，建议不超过 15 个字
   */
  desc?: string;
}

/**
 * 引用文献样式，建议不与关键数据共用
 */
export interface QuoteArea {
  /**
   * 引用文献样式区域点击事件，0 或不填代表没有点击事件，1 代表跳转url，2 代表跳转小程序
   */
  type?: number;
  /**
   * 点击跳转的 url，`quote_area.type` 是 1 时必填
   */
  url?: string;
  /**
   * 点击跳转的小程序的 appid，`quote_area.type` 是 2 时必填
   */
  appid?: string;
  /**
   * 点击跳转的小程序的 pagepath，`quote_area.type`是 2 时选填
   */
  pagepath?: string;
  /**
   * 引用文献样式的标题
   */
  title?: string;
  /**
   * 引用文献样式的引用文案
   */
  quote_text?: string;
}

/**
 * 	卡片二级垂直内容
 */
export interface VerticalContent {
  /**
   * 卡片二级标题，建议不超过26个字
   */
  title: string;
  /**
   * 	二级普通文本，建议不超过112个字
   */
  desc?: string;
}

/**
 * 二级标题 + 文本
 */
export interface HorizontalContent {
  /**
   * 模版卡片的二级标题信息内容支持的类型，1 是 url，2 是文件附件，3 代表点击跳转成员详情
   */
  type?: number;
  /**
   * 二级标题，建议不超过5个字
   */
  keyname: string;
  /**
   * 二级文本，如果 `horizontal_content_list.type` 是 2，该字段代表文件名称（要包含文件类型），建议不超过 26 个字
   */
  value?: string;
  /**
   * 链接跳转的 url，`horizontal_content_list.type` 是 1 时必填
   */
  url?: string;
  /**
   * 附件的 media_id，`horizontal_content_list.type` 是 2 时必填
   */
  media_id?: string;
  /**
   * 成员详情的 userid，`horizontal_content_list.type` 是 3 时必填
   */
  userid?: string;
}

/**
 * 跳转指引样式
 */
export interface Jump {
  /**
   * 跳转链接类型，0 或不填代表不是链接，1 代表跳转 url，2 代表跳转小程序
   */
  type?: number;
  /**
   * 跳转链接样式的文案内容，建议不超过 13 个字
   */
  title: string;
  /**
   * 跳转链接的 url，`jump_list.type` 是 1 时必填
   */
  url?: string;
  /**
   * 跳转链接的小程序的 appid，`jump_list.type` 是 2 时必填
   */
  appid?: string;
  /**
   * 跳转链接的小程序的 pagepath，`jump_list.type` 是 2 时选填
   */
  pagepath?: string;
}

/**
 * 整体卡片的点击跳转事件，`text_notice` 模版卡片中该字段为必填项
 */
export interface CardAction {
  /**
   * 卡片跳转类型，1 代表跳转 url，2 代表打开小程序。text_notice 模版卡片中该字段取值范围为 [1,2]
   */
  type: number;
  /**
   * 跳转事件的 url，`card_action.type` 是 1 时必填
   */
  url?: string;
  /**
   * 跳转事件的小程序的 appid，`card_action.type` 是 2 时必填
   */
  appid?: string;
  /**
   * 跳转事件的小程序的 pagepath，`card_action.type` 是 2 时选填
   */
  pagepath?: string;
}

/** 文本通知模版卡片 */
export interface TextNoticeCardOption extends Option {
  /**
   * 卡片来源样式信息，不需要来源样式可不填写
   */
  source?: Source;
  /**
   * 模版卡片的主要内容，包括一级标题和标题辅助信息
   */
  main_title: MainTitle;
  /**
   * 关键数据样式
   */
  emphasis_content?: EmphasisContent;
  /**
   * 引用文献样式，建议不与关键数据共用
   */
  quote_area?: QuoteArea;
  /**
   * 二级普通文本，建议不超过 112 个字。模版卡片主要内容的一级标题 `main_title.title` 和二级普通文本 `sub_title_text` 必须有一项填写
   */
  sub_title_text?: string;
  /**
   * 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过 6
   */
  horizontal_content_list?: HorizontalContent[];
  /**
   * 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过 3
   */
  jump_list?: Jump[];
  /**
   * 整体卡片的点击跳转事件
   */
  card_action: CardAction;
}

/** 图文展示模版卡片 */
export interface NewsNoticeCardOption extends Option {
  /**
   * 卡片来源样式信息，不需要来源样式可不填写
   */
  source?: Source;
  /**
   * 模版卡片的主要内容，包括一级标题和标题辅助信息
   */
  main_title: MainTitle;
  /**
   * 图片样式
   */
  card_image: CardImage;
  /**
   * 左图右文样式
   */
  image_text_area?: ImageTextArea;
  /**
   * 引用文献样式，建议不与关键数据共用
   */
  quote_area?: QuoteArea;
  /**
   * 卡片二级垂直内容，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过 4
   */
  vertical_content_list?: VerticalContent[];
  /**
   * 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过 6
   */
  horizontal_content_list?: HorizontalContent[];
  /**
   * 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过 3
   */
  jump_list?: Jump[];
  /**
   * 整体卡片的点击跳转事件
   */
  card_action: CardAction;
}

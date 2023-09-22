import axios from 'axios';
import type {
  FileOption,
  ImageOption,
  MarkdownOption,
  NewsNoticeCardOption,
  NewsOption,
  TextNoticeCardOption,
  TextOption,
  VoiceOption,
} from '../types';

/** 企业微信 webhook 地址前缀 */
const QYWECHAT_WEBHOOK_PREFIX = 'https://qyapi.weixin.qq.com/cgi-bin';

/**
 * @private
 * 发送消息
 */
async function send(url: string, data: unknown) {
  try {
    if (!url.startsWith(QYWECHAT_WEBHOOK_PREFIX)) {
      throw new Error(
        '非法 webhook。请提供合法的 webhook 地址。参考: https://open.work.weixin.qq.com/help2/pc/14931。'
      );
    }
    await axios.post(url, data);
  } catch (err) {
    console.error(err);
  }
}

/**
 * @public
 * 发送文本类型消息
 */
export async function sendText(option: TextOption) {
  const { url, ...textOption } = option;
  const data = {
    msgtype: 'text',
    text: textOption,
  };
  await send(url, data);
}

/**
 * @public
 * 发送 markdown 类型消息
 */
export async function sendMarkdown(option: MarkdownOption) {
  const { url, ...markdownOption } = option;
  const data = {
    msgtype: 'markdown',
    markdown: markdownOption,
  };
  await send(url, data);
}

/**
 * @public
 * 发送图片类型消息
 */
export async function sendImage(option: ImageOption) {
  const { url, ...imageOption } = option;
  const data = {
    msgtype: 'image',
    image: imageOption,
  };
  await send(url, data);
}

/**
 * @public
 * 发送图文类型消息
 */
export async function sendNews(option: NewsOption) {
  const { url, ...newsOption } = option;
  const data = {
    msgtype: 'news',
    news: newsOption,
  };
  await send(url, data);
}

/**
 * @public
 * 发送文件类型消息
 */
export async function sendFile(option: FileOption) {
  const { url, ...fileOption } = option;
  const data = {
    msgtype: 'file',
    file: fileOption,
  };
  await send(url, data);
}

/**
 * @public
 * 发送语音类型消息
 */
export async function sendVoice(option: VoiceOption) {
  const { url, ...voiceOption } = option;
  const data = {
    msgtype: 'voice',
    voice: voiceOption,
  };
  await send(url, data);
}

/**
 * @public
 * 发送文本通知模版卡片类型消息
 */
export async function sendTextNoticeCard(option: TextNoticeCardOption) {
  const { url, ...textNoticeCardOption } = option;
  const data = {
    msgtype: 'template_card',
    template_card: {
      card_type: 'text_notice',
      ...textNoticeCardOption,
    },
  };
  await send(url, data);
}

/**
 * @public
 * 发送图文展示模版卡片类型消息
 */
export async function sendNewsNoticeCard(option: NewsNoticeCardOption) {
  const { url, ...newsNoticeCardOption } = option;
  const data = {
    msgtype: 'template_card',
    template_card: {
      card_type: 'news_notice',
      ...newsNoticeCardOption,
    },
  };
  await send(url, data);
}

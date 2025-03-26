import zhCN from 'antd/locale/zh_CN';
import zhHK from 'antd/locale/zh_HK';
import enUS from 'antd/locale/en_US';
import jaJP from 'antd/locale/ja_JP';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-hk';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';
import { getLang } from '@/utils/lang';

export const defaultLang = 'zhCN';
export const antdLocale: Record<string, typeof zhCN> = { zhCN, zhHK, enUS, jaJP };
export const dayjsLocale: Record<string, string> = { zhCN: 'zh-cn', zhHK: 'zh-hk', enUS: 'en', jaJP: 'ja' };

const lang = getLang() || defaultLang;

export default {
  setDayjsLocale: () => {
    dayjs.locale(dayjsLocale[lang]);
  },
  antdLocale: antdLocale[lang]
};

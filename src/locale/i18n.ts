import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhCN from '@/assets/langs/zh-CN.json';
import zhHK from '@/assets/langs/zh-HK.json';
import enUS from '@/assets/langs/en-US.json';
import jaJP from '@/assets/langs/ja-JP.json';
import { getLang } from '@/utils/lang';

export default {
  ...i18n,
  loadLangs: () => {
    const resources = {
      zhCN: {
        translation: zhCN
      },
      zhHK: {
        translation: zhHK
      },
      enUS: {
        translation: enUS
      },
      jaJP: {
        translation: jaJP
      }
    };
    const defaultLang = getLang();
    i18n
      .use(initReactI18next)
      .init({ resources, lng: getLang() || defaultLang, interpolation: { escapeValue: false } });
  }
};

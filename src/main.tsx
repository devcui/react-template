import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import App from './App';
import '@/assets/css/index.css';
import '@ant-design/v5-patch-for-react-19';
import '@/locale/i18n';
import locale from '@/locale/locale';

locale.setDayjsLocale();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ConfigProvider locale={locale.antdLocale}>
        <App />
      </ConfigProvider>
    </HashRouter>
  </React.StrictMode>
);

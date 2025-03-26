import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import App from './App';
import '@/assets/css/index.css';
import '@ant-design/v5-patch-for-react-19';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </HashRouter>
  </React.StrictMode>
);

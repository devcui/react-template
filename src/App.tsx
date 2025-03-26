import { ConfigProvider } from 'antd';
import Router from './Router';

function App() {
  return (
    <ConfigProvider>
      <Router />
    </ConfigProvider>
  );
}

export default App;

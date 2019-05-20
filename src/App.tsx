import React, { Component } from 'react';

import Layout from './features/layout';
import TodoList from './features/todoList/todoList';

import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
class App extends Component {
  public render(): React.ReactNode {
    return (
      <LocaleProvider locale={zhCN}>
        <div className="App" style={{ height: '100vh' }}>
          <Layout>
            <TodoList />
          </Layout>
        </div>
      </LocaleProvider>
    );
  }
}
export default App;

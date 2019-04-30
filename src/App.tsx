import React, { Component } from 'react';
import Layout from './layout/index';
import TodoList from './pages/todoList/index';
class App extends Component {
  public render(): React.ReactNode {
    return (
      <div className="App" style={{ height: '100vh' }}>
        <Layout>
          <TodoList />
        </Layout>
      </div>
    );
  }
}

export default App;

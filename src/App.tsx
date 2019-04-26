import React, { Component } from 'react';
import Layout from './layout/index';
import TodoList from './page/todoList';
class App extends Component {
  render() {
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

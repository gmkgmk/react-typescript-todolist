import * as React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
interface ITodoListComponentProps {
  children: React.ReactChild | React.ReactChildren | undefined;
}
const LayoutComponent = (props: ITodoListComponentProps): React.ReactNode => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header className="header">
        <div style={{ color: '#fff' }}>后台管理系统</div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1">
              <Link to="/todoList/list">待办事项</Link>
            </Menu.Item>
            <Menu.Item key="2">待处理事项</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;

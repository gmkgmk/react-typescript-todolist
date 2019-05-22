import React, { Component } from 'react';

import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import PropTypes from 'prop-types';

class App extends Component {
  public static propTypes = {
    children: PropTypes.element.isRequired,
  };
  public render(): React.ReactNode {
    return (
      <LocaleProvider locale={zhCN}>
        <div className="App" style={{ height: '100vh' }}>
          {this.props.children}
        </div>
      </LocaleProvider>
    );
  }
}

export default App;

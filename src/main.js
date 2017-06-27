import React from 'react';
import ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick';
import './main.css';
import './assets/fonts/iconfont.css';
import 'antd/dist/antd.css';

import routes from './routes'
initReactFastclick();
ReactDOM.render(routes,document.getElementById('app'));

import React from 'react';
import {Menu,Icon} from 'antd';
import {Link} from 'react-router';

import './index.css';

class NavMenu extends React.Component {

  getMenuItems(data){
    const collapse =this.props.collapse;
    return data.map((info)=>{
      return (
        <Menu.Item key={info.name}>
            <Link to={info.name == "home"?"/":`/${info.name}`}>
              <i className={info.icon}></i>
              {collapse?"":<span className="nav-text">{info.desc}</span>}
            </Link>
        </Menu.Item>
      )
    });
  }

  render(){
    const {collapse,handleCollapse,pathname} = this.props;
    const MenuData = [
      {name: "home", desc: "首页",icon:"iconfont icon-shouye"},
      {name: "about", desc: "关于我",icon:"iconfont icon-wodexinxi"},
      {name: "skill", desc: "专业技能",icon:"iconfont icon-jineng-copy"},
      {name: "project", desc: "项目经验",icon:"iconfont icon-xiangmu"},
      {name: "github", desc: "Github",icon:"iconfont icon-github"},
      {name: "contact", desc: "联系我",icon:"iconfont icon-lianxi"}
    ];
    return (
      <div>
        <aside className={collapse?"layout-aside layout-aside-collapse":"layout-aside"}>
          <div className="layout-logo">
            <i className="iconfont icon-jianli logo"></i>
            {collapse?"":<span className="title-text">刘文爽</span>}
          </div>
          <Menu mode="inline"
                theme="dark"
                defaultSelectedKeys={["home"]}
                selectedKeys={[pathname]}>

                {this.getMenuItems(MenuData)}
          </Menu>
          <div className={collapse?"aside-action aside-action-collapse":"aside-action"}
             onClick={handleCollapse}>
            {collapse?<Icon type="right"/>:<Icon type="left"/>}
          </div>
        </aside>
      </div>
    )
  }
}

export default NavMenu;

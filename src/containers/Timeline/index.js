import React from 'react';
import {Timeline} from 'antd';
import './index.css';

class TimelineItems extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let {key,name,url,desc} = this.props;
    return (
        <Timeline.Item>
          <div className="project-item">
            <div className="item-title">
              {name}
              <a href={url} className="item-link" target="_blank">
                <i className="iconfont icon-link">源码</i>
              </a>
            </div>
            <div className="item-info">
                <div className="item-desc">{desc}</div>
            </div>
          </div>
        </Timeline.Item>
    )
  }
}

export default TimelineItems;

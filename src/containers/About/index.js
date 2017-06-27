import React from 'react';
import './index.css';

class About extends React.Component {
  getItems(data){
    return data.map((info)=>{
      let {id,styleName,title,desc} = info;
      return (
        <div className="item" key={id}>
          <div className="item-icon">
              <i className={styleName}></i>
          </div>
          <div className="item-info">
              <p className="info-title">{title}</p>
              <p className="info-desc">{desc}</p>
          </div>
        </div>
      )
    })
  }

  render(){
    const AboutData = [
        { id: 0, styleName: 'iconfont icon-nianling', title: '年龄', desc: 30 },
        { id: 1, styleName: 'iconfont icon-xingbie2222', title: '性别', desc: '男' },
        { id: 3, styleName: 'iconfont icon-yuanxiao', title: '学校', desc: '渤海大学'},
        { id: 4, styleName: 'iconfont icon-xuelirenzheng1', title: '学历', desc: '大专'},
        { id: 5, styleName: 'iconfont icon-gongzuojingyan', title: '工作经验', desc: '5年'},
        { id: 6, styleName: 'iconfont icon-lijitoudi', title: '求职意向', desc: '前端工程师'},
        { id: 7, styleName: 'iconfont icon-zhuangtai', title: '状态', desc: '求职'}
        ]
    return (
      <div>
        <div className="about">
          <h1 className="about-title">关于我</h1>
          <div className="about-content">
              {this.getItems(AboutData)}
          </div>
        </div>
      </div>
    )
  }
}

export default About;

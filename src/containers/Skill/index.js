import React from 'react';
import './index.css';

class Skill extends React.Component {
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
    const SkillData = [
        { id: 0, styleName: 'iconfont icon-html5', title: 'HTML5', desc: '熟练掌握并运用熟练掌握并运用熟练掌握并运用' },
        { id: 1, styleName: 'iconfont icon-javascript', title: 'JavaScript', desc: '熟练' },
        { id: 3, styleName: 'iconfont icon-css', title: 'CSS', desc: '熟练'},
        { id: 4, styleName: 'iconfont icon-jquery-copy', title: 'Jquery', desc: '熟练'},
        { id: 5, styleName: 'iconfont icon-Zepto', title: 'Zepto', desc: '熟练'},
        { id: 6, styleName: 'iconfont icon-react', title: 'React', desc: '熟练'},
        { id: 7, styleName: 'iconfont icon-nodejs', title: 'Nodejs', desc: '熟练'},
        { id: 8, styleName: 'iconfont icon-git', title: 'Git', desc: '熟练'},
        { id: 9, styleName: 'iconfont icon-gulp', title: 'Gulp', desc: '熟练'},
        { id: 10, styleName: 'iconfont icon-less', title: 'Less', desc: '熟练'},
        { id: 11, styleName: 'iconfont icon-sass', title: 'Sass', desc: '熟练'},
        { id: 12, styleName: 'iconfont icon-Webpack', title: 'Webpack', desc: '熟练'},
        { id: 13, styleName: 'iconfont icon-bower-logo', title: 'Bower', desc: '熟练'},
        { id: 14, styleName: 'iconfont icon-php', title: 'PHP', desc: '熟练'},
        { id: 15, styleName: 'iconfont icon-linux', title: 'Linux', desc: '熟练'}
        ]
    return (
      <div>
        <div className="skill">
          <h1 className="skill-title">工作技能</h1>
          <div className="skill-content">
              {this.getItems(SkillData)}
          </div>
        </div>
      </div>
    )
  }
}

export default Skill;

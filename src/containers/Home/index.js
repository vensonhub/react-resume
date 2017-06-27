import React from 'react';
import './index.css';

class Home extends React.Component {
  render(){
    return (
      <div>
        <div className="home">
            <div className="avatar-img">
              <img src="https://avatars3.githubusercontent.com/u/16515878?v=3&s=460" className="avatar" alt=""/>
            </div>
            <div className="info">
              <p className="name">刘文爽</p>
              <p className="profession">这是一段职位介绍</p>
              <p className="desc">这是一个概括的简历</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Home;

import React from 'react';
import './index.css';
import {Modal} from 'antd';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      visible:false
    }
  }

  handleCancel(e){
    this.setState({
      visible:false
    })
  }

  handleShow(e){
    this.setState({
      visible:true
    })
  }

  render(){
    return (
      <div>
        <div className="contact">
          <h1 className="contact-title">联系我</h1>
          <div className="contact-content">
              <div className="contact-main">
                  <div className="main-item" onClick={this.handleShow.bind(this)}>
                      <div className="contact-item-icon">
                          <i className="iconfont icon-weixin"></i>
                      </div>
                      <div className="item-content">
                        微信:lovesky4
                      </div>
                  </div>

                  <div className="main-item">
                      <div className="contact-item-icon">
                          <i className="iconfont icon-iconfontqq"></i>
                      </div>
                      <div className="item-content">QQ:283747923</div>
                  </div>

                  <div className="main-item">
                      <div className="contact-item-icon">
                          <i className="iconfont icon-brand"></i>
                      </div>
                      <div className="item-content">邮箱:283747923@qq.com</div>
                  </div>
              </div>
              <div className="contact-other">
                  <p className="other-title">其他方式</p>
                  <div className="other-content">
                      <a href="https://github.com/vensonhub/" target="_blank" className="other-item">
                          <i className="iconfont icon-github"></i>
                      </a>
                  </div>
              </div>
          </div>

          <Modal title="" footer="" onCancel={this.handleCancel.bind(this)} visible={this.state.visible}>
              <div style={{maxWidth:"100%",textAlign:"center",marginTop:"2em"}}>
                <img style={{maxWidth:"100%"}} src={require('../../assets/images/WechatIMG2.jpeg')} alt=""/>
              </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Contact;

import React from 'react';
import {Timeline} from 'antd';

import './index.css';
import TimelineItems from '../Timeline';
import {fetchRepos} from '../../api/fetchGithub.js';
class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repos:[]
    }
  }
  componentWillMount(){
    fetchRepos("vensonhub")
    .then((info)=>{
      this.setState({
        repos:info.data
      })
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  render(){
    return (
      <div>
        <div className="project">
          <h1 className="project-title">项目经验</h1>
          <div className="project-content">
              <Timeline>
                  {
                    this.state.repos.map((msg)=>{
                      let {id,name,html_url,description} = msg;
                      return (
                        <TimelineItems key={id} name={name} url={html_url} desc={description}/>
                      )
                    })
                  }

              </Timeline>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;

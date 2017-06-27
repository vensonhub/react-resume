import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavMenu from '../NavMenu';
import './index.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      collapse: true,
      pathname:"home"
    }
  }

  handleCollapse(){
    this.setState({
      collapse:!this.state.collapse
    })
  }
  componentWillMount(){
    const oldPathname = window.location.hash.split("#/")[1]||"home";
    if(oldPathname != "home"){
      this.setState({
        pathname:oldPathname
      })
    }
  }
  componentDidUpdate(prevProps,nextProps){
    const newPathname = window.location.hash.split("#/")[1]||"home";
    if(newPathname != nextProps.pathname){
      this.setState({
        pathname:newPathname
      });
    }
  }
  render(){
    const collapse=this.state.collapse;
    return (
      <div>
          <NavMenu collapse={collapse}
            handleCollapse={this.handleCollapse.bind(this)}
            pathname={this.state.pathname}/>
          <div className={collapse?"main main-collapse scroll-y":"main scroll-y"}>
            <ReactCSSTransitionGroup
             className="transitionWrapper"
             transitionName="transitionWrapper"
             component="div"
             transitionEnterTimeout={1000}
             transitionLeaveTimeout={1000}>
              <div className="content" key={this.props.location.pathname}>
                  {this.props.children}
              </div>
            </ReactCSSTransitionGroup>
          </div>
      </div>
    )
  }
}

export default App;

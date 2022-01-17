import { TabMenu } from 'primereact/tabmenu';
import "primeicons/primeicons.css";  
import './NavBarComp.css';
import { Button } from 'primereact/button';

import React, { Component } from 'react'


class NavBarComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
        activeIndex: this.props.activeIndex,
        username: this.props.username,
        hasProjects: this.props.hasProjects
    }
    this.items =  [
      {label: 'Home', icon: 'pi pi-fw pi-home', command: (event) => {window.location.href = "/";}},
      {label: 'Add Project', icon: 'pi pi-fw pi-plus-circle', command: (event) => {window.location.href = `/accounts/${this.props.username}/newProject`;}},
      {label: 'Grade Projects', icon: 'pi pi-fw pi-star', command: (event) => {window.location.href = `/accounts/${this.props.username}/gradeProjects`;}},
      {label: 'My Projects', icon: 'pi pi-fw pi-table', command: (event) => {window.location.href = `/accounts/${this.props.username}/projects`;}}
    ];
  }

  componentDidMount()
  {
    this.setState({activeIndex: this.props.activeIndex});
    this.setState({username: this.props.username});
    this.setState({hasProjects: this.props.hasProjects});
  }

  render() {
    return (
        <div>
            <div className="card">
                <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
            </div>
        </div>
    );
}
}

export default NavBarComp;

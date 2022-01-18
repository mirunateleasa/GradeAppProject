import React , {useState, Component} from "react";
import DisplayProjects from "../DisplayProject/DisplayProjects";
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from "primereact/button";
import ProjectsStore from "../stores/ProjectsStore";
import axios from "axios";
import { gapi } from 'gapi-script';

export class UploadPartial extends Component {

    constructor(props) {
        super(props);

        this.state = {
            totalSize: 0,
            username: window.location.href.split('/')[4],
            projectId: window.location.href.split('/')[6],
            project: [], 
            deliveredPartials: 0
        };

        this.store = new ProjectsStore(this.state.username);

        this.displayValueTemplate = (value) =>{
            return (
                <React.Fragment>
                    {value}/<b>{this.state.project.noPartials}</b>
                </React.Fragment>
            );
        }
    }

    componentDidMount(){
        this.store.getProjectById(this.state.projectId);
        this.store.emitter.addListener('GET_PROJ_SUCCESS', () => {
            this.setState({
                project : this.store.project
            })
        })
        let val = this.state.value1;
        this.interval = setInterval(() => {
            val += Math.floor(Math.random() * 10) + 1;

            if (val >= 100) {
                val = 100;
                this.toast.show({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                clearInterval(this.interval);
            }

            this.setState({
                value1: val
            });
        }, 2000);
    }

    
    render() {
        return (
            <div>
                <Toast ref={(el) => { this.toast = el }}></Toast>
                <ProgressBar value={this.state.project.noPartials} displayValueTemplate={this.displayValueTemplate}></ProgressBar>
            </div>
        )
    }
}

export default UploadPartial;
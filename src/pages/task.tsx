import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/navigation.component';

class Task extends Component <any,any>{
    constructor(props: {} | Readonly<{}>){
        super(props);
        this.state ={
            name: "",
            description: "",
            startTime: "",
            endTime: "",
            fields: {},
            errors: {},
            add_task: JSON.parse(localStorage.getItem("data")!) || []
        }
        this.handleValidation = this.handleValidation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValidation(e: { preventDefault: () => void; }){

        e.preventDefault()
          let errors = {};
          let formIsValid = true;
    
          if(this.state.name===""){
             formIsValid = false;
             errors = "Cannot be empty";
          }
          
          if(this.state.description===""){
              formIsValid = false;
              errors = "Cannot be empty";
           }
           
           if(this.state.startTime===""){
            formIsValid = false;
            errors = "Cannot be empty";
         }

         if(this.state.endTime===""){
            formIsValid = false;
            errors = "Cannot be empty";
         }
    
         this.setState({errors: errors})
         if(formIsValid){
             this.handleSubmit(e)
             this.props.history.push('/view-task');
         }
      }

      handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
          let data = 
              {
              name: this.state.name,
              description: this.state.description,
              startTime: this.state.startTime,
              endTime: this.state.endTime
          }

          this.state.add_task.push(data)
          
          localStorage.setItem("data",JSON.stringify(this.state.add_task));
      }

    render(){
        return(
            <div>
                <Navigation />
                <h4 className="text-center">Welcome to Task</h4>
                <div className="container">
                    <p className="text-center">
                    <h5 className="text-center pt-5" style={{display: 'inline',margin:'5%'}}>Add Task</h5>
                    <Link to="/view-task" className="btn btn-info btn-md" style={{float: 'right'}}>view task</Link></p>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="col-md-12"></div>
                                <form className="form" onSubmit={this.handleValidation} method="post">
                                <div className="form-group">
                                    <h4>TaskName</h4>
                                    <input type="text" name="name" placeholder="name" className="form-control" onChange={(e)=>{this.setState({name:e.target.value})}}/>
                                    { <span style={{color: "red"}}>{this.state.errors["name"]}</span> }
                                </div>

                                <div className="form-group">
                                    <h4>Description</h4>
                                    <input type="text" name="description" placeholder="description" className="form-control" onChange={(e)=>{this.setState({description:e.target.value})}}/>
                                    { <span style={{color: "red"}}>{this.state.errors["description"]}</span> }
                                </div>

                                <div className="form-group">
                                    <h4>Start time</h4>
                                    <input type="time" name="startTime" placeholder="Start time" className="form-control" onChange={(e)=>{this.setState({startTime:e.target.value})}}/>
                                    { <span style={{color: "red"}}>{this.state.errors["startTime"]}</span> }
                                </div>

                                <div className="form-group">
                                    <h4>End time</h4>
                                    <input type="time" name="endTime" placeholder="End Time" className="form-control" onChange={(e)=>{this.setState({endTime:e.target.value})}}/>
                                    { <span style={{color: "red"}}>{this.state.errors["endTime"]}</span> }
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;
import React, {Component} from 'react'
import Navigation from '../components/navigation.component';
import '../App.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';

interface IProps {

}

interface IState {
    data?: []
    isLoading?: boolean;
}

class Jokes extends Component <IProps,IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            data: [],
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            axios.get("https://official-joke-api.appspot.com/jokes/ten")
        .then(res => {
            const Data = res.data;
            this.setState({data: Data, isLoading:false})
        })
        }, 1000);
    }

    render(){
        return(
            this.state.isLoading ? <div>
                <Navigation />
                <br></br>
                <h4 className="text-center">Welcome to Jokes</h4>
                <br></br>
                <div className="text-center">
                    <Loader type="Circles" color="#00BFFF" height={100} width={100}/>
                </div>
            </div> 
            :
            <div>
                <Navigation />
                <br></br>
                <h4 className="text-center">Welcome to Jokes</h4>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.data?.map((item: { id: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; type: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; setup: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; punchline: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; },index: React.Key | null | undefined)=>{
                                    return(
                                        <div key={index} >
                                        <div className="card" style={{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition: "0.3s", textAlign:"center"}}>
                                            <div className="card-body">
                                                <table className="table table-borderless">
                                                     <thead>
                                                         <tr className="text-muted">
                                                             <th style={{width:"10%"}}>ID:</th>
                                                             <th style={{width:"10%"}}>TYPE:</th>
                                                             <th style={{width:"40%"}}>SETUP:</th>
                                                             <th style={{width:"40%"}}>PUNCH LINE:</th>
                                                         </tr>
                                                     </thead>
                                                     <tbody >
                                                         <tr>
                                                             <th>{item.id}</th>
                                                             <th>{item.type}</th>
                                                             <th>{item.setup}</th>
                                                             <th>{item.punchline}</th>
                                                         </tr>
                                                     </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <br></br>
                                        </div>
                                    )
                                })
                            }
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
}

export default Jokes;
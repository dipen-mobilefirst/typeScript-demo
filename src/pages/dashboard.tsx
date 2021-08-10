import React, {Component} from 'react';
import Navigation from '../components/navigation.component';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <Navigation />
                <h4 className="text-center">Welcome to Dashboard</h4>
            </div>
        )
    }
}

export default Dashboard;
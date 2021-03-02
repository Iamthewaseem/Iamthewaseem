import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './Containers/Layout';
import LandingPage from './Containers/Pages/LandingPage';
import About from './Containers/Pages/About';

class Routes extends Component {
    render(){
        return (
            <div>
                <Layout>
                    <BrowserRouter>
                        <Route path="/" exact component={LandingPage}/>
                        <Route path="/Home" exact component={LandingPage}/>
                    </BrowserRouter>
                </Layout>
            </div>
            
        
    );
}
};

export default Routes;
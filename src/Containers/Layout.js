import React, { Component } from 'react';
import Header from "./Layouts/Header";
import Footer from './Layouts/Footer';
import './Layout.css';

export default class Layout extends Component {
    constructor(){
        super();
        this.state= {
           
        }
    }
    render() {
        return (
            <div className="page-container">
                <Header/>
                    <div className="content-wrap">
                        {this.props.children}
                    </div>
                <Footer/>
            </div>);
        }
}


"use strict";
import  React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../components/Button/Button';
import './App.less';

class  App extends  Component {
    render(){
        return (
            <div className="app">
                <div className="tip"></div>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <span className="">你好吗</span>
            </div>
        );
    }
}

export default App;
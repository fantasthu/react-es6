import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
class  Button extends Component {
    handleClick(){
        alert("戳你爷");
    }
    render(){
        const style=require("./Button.less");
        return(
            <button className="my-button" onClick={this.handleClick.bind(this)}>
               戳我不
            </button>
        );
    }
}
export default Button;

import React,{Component} from "react";

class Counter extends Component{
    
    render(){

        const {handleIncrement,handleDecrement,handleDelete,value,id}=this.props
    
        return(
            
            <div>
                
                <span className={this.getBadgeColor()}>{this.formatCount()}</span>
                <button onClick={()=>{handleIncrement({counterid:id})}} className="btn btn-primary sm-2 mr-2">Increment</button>
                <button onClick={()=>{handleDecrement({counterid:id})}} className="btn btn-secondary sm-2 mr-2">Decrement</button>
                <button onClick={()=>{handleDelete({btnid:id})}} className="btn btn-danger sm-2 m-2">Delete</button>
                
            </div>
        )
    } 

    getBadgeColor() {
        let classes = "badge m-2 badge-";
        classes += this.props.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value}=this.props.value;
        return value===0?<h6>Zero</h6>:value;
    }
}
export default Counter;
import React, { Component } from 'react'
import Counter from "./Counter"

class Counters extends Component{

    render(){
        return(
            <>
            {
                this.props.counters.map((item)=>(
                
                    <Counter key={item.id} value={item} id={item.id} handleDelete={this.props.onDelete} handleIncrement={this.props.onIncrement} handleDecrement={this.props.onDecrement}  />
                ))
            }
            </>
        )
    }
}

export default Counters;
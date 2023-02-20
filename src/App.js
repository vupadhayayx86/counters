import React,{Component} from 'react'
import Counters from './components/Counters'
import Navbar from './components/Navbar'

class App extends Component{
  state={
    counters:[
        {id:1,value:10},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}           
    ]
}

handleIncrement=({counterid})=>{
    this.setState(
        this.state.counters.map((item)=>{
            if(item.id===counterid){
                item.value++
            }
        })

    )
}

handleDelete=({btnid})=>{
    //console.log("Handle Delete" + btnid)  
    //console.log(btnid)
    const delElement=this.state.counters.filter((item)=>item.id!==btnid)
    this.setState({counters:delElement})
}

handleDecrement=({counterid})=>{
    this.setState(
        this.state.counters.map((item)=>{
            if(item.id===counterid){
                item.value--
            }
        })

    )
}

render(){
  return (
    <>
        <Navbar totalCounters={this.state.counters.length}/>
        <main className="container">
        <Counters 
        counters={this.state.counters}
        onDelete={this.handleDelete}
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
      
        />
        </main>
       
    </>
  )
}

}

export default App
import React from 'react'
class Agregar extends React.Component{
    
    render(){
        
        
        return (
            <li> 
                 {this.props.email}  {this.props.pwd}  
              
                <button onClick={this.props.deleteOp(this.props.id)} >x</button> 
            </li>
        )
    }
}
export default Agregar;
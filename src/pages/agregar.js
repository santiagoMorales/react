import React from 'react'
import PrompTypes from 'prop-types'

class Agregar extends React.Component{
    
    render(){
        
        let id = this.props.id
        return (
            <li> 
               id  {this.props.email}  {this.props.pwd}  
              
                <button onClick={this.props.deleteOp(this.props.id)} >x</button> 
            </li>
        )
    }
}
export default Agregar;
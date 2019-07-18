import React from 'react'
import PrompTypes from 'prop-types'

class Item extends React.Component{
    
    render(){
       let name =this.props.name
        return (
            <li> 
                {name}  {this.props.role} ({this.props.tel}) 
                <button onClick={this.props.deleteOp(this.props.id)} >x</button> 
            </li>
        )
    }
}
export default Item;
import React from 'react'
import fetchApi from '../../modules/fetch-api'

class Order extends React.Component{
    state = {
        order : null
    }

    componentDidMount(){
        fetchApi('get', `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`)
        .then(json => {
            this.setState({order : json})
        })
    }
renderOrder(){
    const { name, email, order_items} = this.state.order
    return (
        <div>
            <h3>Order Infos</h3>
            <div>Name : {name}</div>
            <div>email : {email}</div>
            
            <ul>
                {order_items && order_items.map(item =>{
                    const { product : {name,price,image}, qty} = item
                    return (<li>
                        <img src={image} width ={32} />
                        <div>{name}</div>
                        
                        ({qty} x ${price}) = ${parseFloat(qty) * parseFloat(price)}
                    </li>)
                })}
            </ul>
        </div>
    )
}

    render(){
        const {order} = this.state
        return(
            <div>
                {
                order ? this.renderOrder() : 'loading ...'
                }
            </div>
        )
    }
}

export default Order
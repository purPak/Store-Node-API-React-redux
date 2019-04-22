import React from 'react'
import Order from '../features/order'

function OrderPage(props){
    return(
        <div>
            <h1>order page</h1>
            <Order id={props.match.params.id} />
        </div>
    )
}

export default OrderPage
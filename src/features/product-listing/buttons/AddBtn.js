import React from 'react';

export default function  AddBtn (props) {
    return(
        <div>
            <button
                onClick ={() => props.addToCart(props.product)}
                >ADD TO CART({
                    props.cartItem && props.cartItem.quantity || 0
                })</button>
        </div>
    )
}
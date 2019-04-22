import React from 'react'

export default function RemoveBtn(props){
    return(
        <div>
            <button
                    onClick ={() => props.removeFromCart(props.cartItem)}
                > REMOVE FROM CART
                </button>
        </div>
    )
}
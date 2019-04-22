import React from 'react';
import AddBtn from './buttons/AddBtn'
import RemoveBtn from './buttons/RemoveBtn'

export default function ProductListItem(props){
    
    return (
        <div className="product-list-item">
            
            <img src={props.product.image}
                 height ={150}
                 alt= {props.product.name}   
            />
            <h3>{props.product.name}</h3>
            <div className="description">{props.product.description}</div>
            <div className="price"> ${props.product.price}</div>
            <div>
                <AddBtn className="btn"
                    cartItem ={props.cartItem}    
                    product = {props.product}
                    addToCart = {props.addToCart}
                />
                {
                    props.cartItem 
                    
                        ? <RemoveBtn
                          cartItem ={props.cartItem}    
                          product = {props.product}
                          removeFromCart = {props.removeFromCart}
                          />
                        : null   
                }
            </div>
            
            
        </div>
    )
}
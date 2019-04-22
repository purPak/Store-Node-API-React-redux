import React from 'react';
import ProductListItem from './product-list-item';
import {connect} from 'react-redux';
import fetchApi from '../../modules/fetch-api'


class ProductListing extends React.Component{
   
    componentDidMount(){
        const {loadProducts} = this.props
        
        fetch('http://localhost:3000/api/v1').then(response => response.json()).then((data)=>{
            console.log(data)
             loadProducts(data)
        })
        }
    
    render(){
        const {addToCart, removeFromCart, products, cart} = this.props
        return (
            <div className = "product-listing">
                {
                    
                    products.map((product)=>
                        
                        <ProductListItem
                        product ={product}
                        addToCart = {addToCart}
                        removeFromCart = {removeFromCart}
                        cartItem = {cart.filter(cartItem => cartItem.id === product.id)[0]}
                         />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products : state.products
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        loadProducts : (products) => {
            dispatch({type:'LOAD', payload : products})
        },
        addToCart :(item) => {
            dispatch(
                {
                    type : 'ADD',
                    payload : item
                }
            )
        },
        removeFromCart : (item) => {
            dispatch({type: 'REMOVE', payload : item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)

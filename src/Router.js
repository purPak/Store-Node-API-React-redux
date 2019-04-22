import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';
import CheckoutPage from './pages/checkoutpage'
import OrderPage from './pages/orderpage'

const Router = ()=> (
    <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route extact path='/cart' component = {CartPage} /> 
        <Route exact path = '/checkout' component = {CheckoutPage} />
        <Route exact path = '/orders/:id' component = {OrderPage}/>
    </Switch>
)

export default Router;
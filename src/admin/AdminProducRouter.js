import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import ProductDetail from '../web/ProductDetail'
import ProductAoKhoac from './ProductAoKhoac'

export default class AdminProducRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/admin/product/ao-khoac">
                        <ProductAoKhoac {...this.props}/>
                    </Route>
                    <Route exact path="/admin/product/ao-thun">
                        <ProductDetail {...this.props}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
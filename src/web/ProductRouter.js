import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import AoKhoacProduct from './AoKhoacProduct'

export default class ProductRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/product/ao-khoac">
                        <AoKhoacProduct {...this.props}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

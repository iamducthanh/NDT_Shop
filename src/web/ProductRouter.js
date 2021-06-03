import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import AoKhoacProduct from './AoKhoacProduct'
import AoThunProduct from './AoThunProduct'

export default class ProductRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/product/ao-khoac">
                        <AoKhoacProduct {...this.props}/>
                    </Route>
                    <Route exact path="/product/ao-thun">
                        <AoThunProduct {...this.props}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

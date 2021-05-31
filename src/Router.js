import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import HomePage from './component/web/homePage/Content/HomePage/HomePage';
import AdminLayout from './layout/AdminLayout';
import WebLayout from './layout/WebLayout';
import GianHang from './web/GianHang';
import TrangChu from './web/TrangChu';
import EditProduct from './admin/Edit'
import AddProduct from './admin/Add'
import AdminHome from './admin/AdminHome'
import Login from './web/Login';
import AdminLayout1 from './layout/AdminLayout1';

class Router extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(this.props);
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login'>
                        <WebLayout>
                            <Login {...this.props} />
                        </WebLayout>
                    </Route>

                    <Route exact path={['/admin/*', '/admin']} render={() => (
                        localStorage.getItem("accessToken") ?
                            <AdminLayout>
                                <Switch>
                                    <Route exact path="/admin/products">
                                        <AdminHome {...this.props} />
                                    </Route>
                                    <Route exact path="/admin/products/add">
                                        <AddProduct {...this.props} />
                                    </Route>
                                    <Route exact path="/admin/products/:id">
                                        <EditProduct {...this.props} />
                                    </Route>
                                </Switch>
                            </AdminLayout>
                            :
                            <WebLayout>
                                <Login {...this.props} />
                            </WebLayout>
                    )}>
                    </Route>

                    <Route exact path="/product">
                        <WebLayout>
                            <GianHang {...this.props} />
                        </WebLayout>
                    </Route>

                    <Route exact path="/">
                        <WebLayout>
                            <TrangChu />
                        </WebLayout>
                    </Route>
                    <Route exact path="/test">
                        <AdminLayout1/>
                    </Route>
                </Switch>
            </BrowserRouter >
        );
    }
}


export default Router;
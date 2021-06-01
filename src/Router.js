import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout';
import WebLayout from './layout/WebLayout';
import TrangChu from './web/TrangChu';
import EditProduct from './admin/Edit'
import AddProduct from './admin/Add'
import ProductAoKhoac from './admin/ProductAoKhoac'
import Login from './web/Login';
import ProductRouter from './web/ProductRouter'
import AdminProducRouter from './admin/AdminProducRouter'

class Router extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login'>
                        <WebLayout>
                            <Login {...this.props} />
                        </WebLayout>
                    </Route>

                    <Route exact path={['/admin/*']} render={() => (
                        localStorage.getItem("accessToken") ?
                            <AdminLayout>
                                <Switch>
                                    <Route exact path="/admin/product/*">
                                        <AdminProducRouter {...this.props}/>
                                    </Route>
                                    {/* <Route exact path="/admin/product/add">
                                        <AddProduct {...this.props} />
                                    </Route>
                                    <Route exact path="/admin/product/:id">
                                        <EditProduct {...this.props} />
                                    </Route> */}
                                </Switch>
                            </AdminLayout>
                            :
                            <WebLayout>
                                <Login {...this.props} />
                            </WebLayout>
                    )}>
                    </Route>

                    <Route exact path="/*">
                        <Switch>
                            <Route exact path="/">
                                <WebLayout>
                                    <TrangChu />
                                </WebLayout>
                            </Route>
                            <Route exact path="/product/*">
                                <WebLayout>
                                    <ProductRouter {...this.props} />
                                </WebLayout>
                            </Route>
                        </Switch>
                    </Route>
                </Switch>
            </BrowserRouter >
        );
    }
}


export default Router;
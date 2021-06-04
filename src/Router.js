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
import Slider from './component/web/homePage/Content/HomePage/Slider';
import Signup from './web/Signup';
import AoKhoacProduct from './web/AoKhoacProduct'
import AoThunProduct from './web/AoThunProduct'
import QuanLyUser from './admin/QuanLyUser';
import ProductDetail from './web/ProductDetail';

class Router extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login'>
                        <WebLayout {...this.props}>
                            <Login {...this.props} />
                        </WebLayout>
                    </Route>
                    <Route exact path='/card'>
                        <WebLayout {...this.props}>
                            <ProductDetail/>
                        </WebLayout>
                    </Route>
                    <Route exact path='/signup'>
                        <WebLayout {...this.props}>
                            <Signup />
                        </WebLayout>
                    </Route>

                    <Route exact path={['/admin*']} render={() => (
                        localStorage.getItem("accessToken") ?
                            <AdminLayout {...this.props}>
                                <Switch>
                                    <Route exact path="/admin/product/*">
                                        <AdminProducRouter {...this.props} />
                                    </Route>
                                    <Route exact path="/admin/user">
                                        <QuanLyUser/>
                                    </Route>
                                    {/* <Route exact path="/admin/product/:id">
                                        <EditProduct {...this.props} />
                                    </Route> */}
                                </Switch>
                            </AdminLayout>
                            :
                            <WebLayout {...this.props}>
                                <Login {...this.props} />
                            </WebLayout>
                    )}>
                    </Route>

                    <Route exact path="/*">
                        <Switch>
                            <Route exact path="/">
                                <WebLayout {...this.props}>
                                    <TrangChu />
                                </WebLayout>
                            </Route>
                            <Route exact path="/*">
                                <WebLayout {...this.props}>
                                    <Switch>
                                        <Route exact path="/ao-khoac">
                                            <AoKhoacProduct {...this.props} />
                                        </Route>
                                        <Route exact path="/ao-thun">
                                            <AoThunProduct {...this.props} />
                                        </Route>
                                        <Route exact path="/:sp/:id?">
                                            <ProductDetail {...this.props} />
                                        </Route>
                                    </Switch>
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
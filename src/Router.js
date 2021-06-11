import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout';
import WebLayout from './layout/WebLayout';
import TrangChu from './web/TrangChu';
import Login from './web/Login';
import Signup from './web/Signup';
import QuanLyUser from './admin/QuanLyUser';
import ProductDetail from './web/ProductDetail';
import Cart from './web/Cart';
import DonMua from './web/DonMua';
import DonHang from './admin/DonHang';
import Product from './web/Product';
import QuanLiProduct from './admin/QuanLiProduct';
import AddProduct from './admin/Add';
import EditProduct from './admin/Edit'

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
                    <Route exact path='/don-hang'>
                        <WebLayout {...this.props}>
                            <DonMua />
                        </WebLayout>
                    </Route>
                    <Route exact path='/cart' render={() => (
                        localStorage.getItem('username') == null ?
                            <WebLayout {...this.props}>
                                <Login {...this.props} />
                            </WebLayout>
                            :
                            <WebLayout {...this.props}>
                                <Cart {...this.props} />
                            </WebLayout>
                    )}>
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
                                    <Route exact path="/admin/product/:sp">
                                        <QuanLiProduct {...this.props} />
                                    </Route>
                                    {/* <Route exact path="/admin/product/ao-khoac">
                                        <ProductAoKhoac {...this.props} />
                                    </Route>
                                    <Route exact path="/admin/product/ao-thun">
                                        <ProductAoThun {...this.props} />
                                    </Route>
                                    <Route exact path="/admin/product/jeans">
                                        <ProductJeans {...this.props} />
                                    </Route> */}
                                    <Route exact path="/admin/user">
                                        <QuanLyUser />
                                    </Route>
                                    <Route exact path="/admin/don-hang">
                                        <DonHang />
                                    </Route>
                                    <Route exact path={`/admin/product/:sp/add`}>
                                        <AddProduct />
                                    </Route>
                                    <Route exact path={`/admin/product/:sp/:id`}>
                                        <EditProduct />
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
                                        {/* <Route exact path="/ao-khoac">
                                            <AoKhoacProduct {...this.props} />
                                        </Route>
                                        <Route exact path="/ao-thun">
                                            <AoThunProduct {...this.props} />
                                        </Route>
                                        <Route exact path="/jeans">
                                            <JeansProduct {...this.props} />
                                        </Route> */}
                                        <Route exact path="/:sp?" render={() => (
                                            <Product {...this.props} />
                                        )
                                        }>
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
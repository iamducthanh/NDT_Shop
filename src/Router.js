import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout';
import WebLayout from './layout/WebLayout';
import TrangChu from './web/TrangChu';
import Login from './web/Login';
import Signup from './web/Signup';
import AoKhoacProduct from './web/AoKhoacProduct'
import AoThunProduct from './web/AoThunProduct'
import QuanLyUser from './admin/QuanLyUser';
import ProductDetail from './web/ProductDetail';
import Cart from './web/Cart';
import JeansProduct from './web/JeansProduct';
import ProductAoKhoac from './admin/ProductAoKhoac'
import ProductAoThun from './admin/ProductAoThun';
import ProductJeans from './admin/ProductJeans';
import DonMua from './web/DonMua';
import DonHang from './admin/DonHang';
import Product from './web/Product';
import PhanLoaiSP from './web/phanLoaiSP';
import LocProduct from './web/LocProduct';

class Router extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/:sp?" render={() => (
                        <WebLayout {...this.props}>
                            <Product {...this.props} />
                        </WebLayout>
                        )
                    }>
                    </Route> */}
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
                                    <Route exact path="/admin/product/ao-khoac">
                                        <ProductAoKhoac {...this.props} />
                                    </Route>
                                    <Route exact path="/admin/product/ao-thun">
                                        <ProductAoThun {...this.props} />
                                    </Route>
                                    <Route exact path="/admin/product/jeans">
                                        <ProductJeans {...this.props} />
                                    </Route>
                                    <Route exact path="/admin/user">
                                        <QuanLyUser />
                                    </Route>
                                    <Route exact path="/admin/don-hang">
                                        <DonHang />
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
                                        <Route exact path="/jeans">
                                            <JeansProduct {...this.props} />
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
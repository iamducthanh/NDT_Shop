import './App.css';
import Router from './Router';
import { useEffect, useState } from 'react';
import gioHangApi from './api/gioHangApi';
import userApi from './api/userApi';
import productApi from './api/productApi';

function App() {
  const [product, setProduct] = useState([]);
  const [slHang, setSlHang] = useState();
  const [user, setUser] = useState([username, password]);

  useEffect(() => {
    const getUserLogin = async () => {
      if (localStorage.getItem('username') != null) {
        const { data } = await userApi.getUserByUsername(localStorage.getItem('username'))
        setUser(data[0].username, data[0].password);
      }
    }
    getUserLogin();
  }, [])
  useEffect(() => {
    const getSlHang = async () => {
      const { data } = await gioHangApi.getAllGioHangByUsername(localStorage.getItem('username'))
      setSlHang(data.length);
    }
    getSlHang();
  }, [])

  const getSlHang = async () => {
    const { data } = await gioHangApi.getAllGioHangByUsername(localStorage.getItem('username'))
    setSlHang(data.length);
  }

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await productApi.getAllAo();
      setProduct(data);
    }
    getProduct();
  }, [])

  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');
  const setUserLogin = (username, password) => {
    setUser(username, password)
    getSlHang()
  }


  //test

  return (
    <div>
      <Router
        maxPage={product.length % 8 == 0 ? product.length / 8 : Math.round(product.length / 8 + 1)}
        setUserLogin={setUserLogin}
        user={user}
        slHang={slHang}
        getSlHang={getSlHang}
      />
    </div>
  );
}

export default App;

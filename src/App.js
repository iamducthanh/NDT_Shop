import './App.css';
import Router from './Router';
import { useEffect, useState } from 'react';
import aoKhoacApi from './api/aoKhoacApi';
import aoThunApi from './api/aoThunApi'
import gioHangApi from './api/gioHangApi';
import userApi from './api/userApi';

function App() {
  const [aoKhoac, setAoKhoac] = useState([]);
  const [aoThun, setAoThun] = useState([]);
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

  const maxAo = 1;
  useEffect(() => {
    const getAoKhoac = async () => {
      const { data } = await aoKhoacApi.getAllAo()
      setAoKhoac(data);
    }
    getAoKhoac();
  }, [])

  useEffect(() => {
    const getAoThun = async () => {
      const { data } = await aoThunApi.getAllAo()
      setAoThun(data);
    }
    getAoThun();
  }, [])

  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');
  const setUserLogin = (username, password) => {
    setUser(username, password)
    getSlHang()
  }

  return (
    <div>
      <Router
        maxPage={aoKhoac.length % 8 == 0 ? aoKhoac.length / 8 : Math.round(aoKhoac.length / 8 + 1)}
        maxPageAoThun={aoThun.length % 8 == 0 ? aoThun.length / 8 : Math.round(aoThun.length / 8 + 1)}
        setUserLogin={setUserLogin}
        user={user}
        slHang={slHang}
        getSlHang={getSlHang}
      />
    </div>
  );
}

export default App;

import './App.css';
import Router from './Router';
import { useEffect, useState } from 'react';
import aoKhoacApi from './api/aoKhoacApi';
import aoThunApi from './api/aoThunApi'
function App() {
  const [aoKhoac, setAoKhoac] = useState([]);
  const [aoThun, setAoThun] = useState([]);

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
  const [user, setUser] = useState([username, password]);

  const setUserLogin = (username, password) => {
      setUser(username, password)
  }

  return (
    <div>
      <Router 
        maxPage={aoKhoac.length % 8 == 0 ? aoKhoac.length / 8 : Math.round(aoKhoac.length / 8 + 1)} 
        maxPageAoThun={aoThun.length % 8 == 0 ? aoThun.length / 8 : Math.round(aoThun.length / 8 + 1)}
        setUserLogin = {setUserLogin} 
        user = {user}/>
    </div>
  );
}

export default App;

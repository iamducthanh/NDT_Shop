import './App.css';
import Router from './Router';
import { useEffect, useState } from 'react';
import newsAPI from './api/aoKhoacApi';
function App() {
  const [aoKhoac, setAoKhoac] = useState([]);

  const maxAo = 1;
  useEffect(() => {
    const getAoKhoac = async () => {
      const { data } = await newsAPI.getAllAo()
      setAoKhoac(data);
    }
    getAoKhoac();
  }, [])

  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');
  const [user, setUser] = useState([username, password]);

  const setUserLogin = (username, password) => {
      setUser(username, password)
  }

  return (
    <div>
      <Router maxPage={aoKhoac.length % 8 == 0 ? aoKhoac.length / 8 : Math.round(aoKhoac.length / 8 + 1)} setUserLogin = {setUserLogin} user = {user}/>
    </div>
  );
}

export default App;

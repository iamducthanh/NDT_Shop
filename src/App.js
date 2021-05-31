import './App.css';
import Router from './Router';
import { useEffect, useState } from 'react';
import newsAPI from './api/aoKhoacApi';
function App() {
  const [aoKhoac, setAoKhoac] = useState([]);

  useEffect(() => {
    const getAoKhoac = async () => {
      try {
        const { data } = await newsAPI.getAllAo()
        setAoKhoac(data);
      } catch (error) {

      }
    }
    getAoKhoac();
  }, [])
  
  return (
    <div>
      <Router listAo={aoKhoac} />
    </div>
  );
}

export default App;

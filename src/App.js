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

console.log(aoKhoac.length % 8);
  return (
    <div>
      {/* <button onClick={getToPage}>ddddd</button> */}
      <Router maxPage={aoKhoac.length % 8 == 0 ? aoKhoac.length / 8 : Math.round(aoKhoac.length / 8 + 1)} />
    </div>
  );
}

export default App;

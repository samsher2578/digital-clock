import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [time, setTime] = useState('');

  function formateTime(val){
    if(val<10){
      return '0';
    }
    else{
      return '';
    }
  }

  useEffect(()=> {
    const timeId = setInterval(() =>tick(), 1000)
  
    return function cleanUp(){
      clearInterval(timeId)
    }
  })

  function tick() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(formateTime(h) + h + ':' + formateTime(m) + m + ':' + formateTime(s) + s);
  }

  return (
    <div className="App">
      <h1> {time} </h1>
    </div>
  );
}

export default App;

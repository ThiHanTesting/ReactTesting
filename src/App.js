import './App.css';
import myimage from './assets/image.jpeg'
import { useState } from 'react';
function App() {
let [name , setName] = useState('khunthihan') // [getter,setterfun]

  let changeName = () => {
   setName("aung aung") 
    console.log(name) // the console value is khhun thi han because the setName is a little bit longer so js doesn't wait the result and take the default value to show

  }

  return (
    <div className="app">
       <h1>hello {name}</h1>
       <button onClick={changeName}>Change name</button>
       <br/>
    </div>
  );
}

export default App;

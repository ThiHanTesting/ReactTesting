import './App.css';
import myimage from './assets/image.jpeg'
function App() {
   let name = 'khunthihan'

  let changeName = () => {
    name = 'aung aung'
    console.log(name)
  }

  return (
    <div className="app">
       <h1>hello {name}</h1>
       
       <br/>
{/* 
      you can dynamically take photo like this but 
       relative path
        <img src="/image.jpeg"  alt="gg" />
          <br/>
        absolute path
         <img src="http://localhost:3000/image.jpeg" /> */}


        <br/>
        {/* this is the way of taking photo with import */}
        <img src={myimage} />
    </div>
  );
}

export default App;

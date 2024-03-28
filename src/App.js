// import './App.css';
// import myimage from './assets/image.jpeg'
// import { useState } from 'react';

// function App() {
// let [name , setName] = useState('khunthihan') // [getter,setterfun]
// let [posts , setPosts] = useState([
//   {
//     id : 1 ,
//     title : 'First post'
//   },
//   {
//     id : 2 ,
//     title : 'second post'
//   },
//   {
//     id : 3 ,
//     title : 'third post'
//   }
// ])
// console.log(posts)
// console.log(name)

// let changeName = () => {
//   setName("aung aung") 
//   console.log(name) // the console value is khhun thi han because the setName is a little bit longer so js doesn't wait the result and take the default value to show

//   }

//   return (
//     <div className="app">
//        <h1>hello {name}</h1>
//        <button onClick={changeName}>Change name</button>



//       <h1>Posts</h1>
//        <ul>
//           {posts.map((post)=>(
//              <li key={post.id}>{post.title}</li>
//           ))} 
//        </ul>
//        <br/>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'
export default function App() {


  let [count , setCount ] = useState(0)


  let increment = () =>{
    //setCount(count+1)   // shouldn't use like this
    setCount((prevState)=>prevState+1) // 0+1=1
    setCount((prevState)=>prevState+1) // 1+1=2
    setCount((prevState)=>prevState+1) // 2+1=3
    setCount((prevState)=>prevState+1) // 3+1=4
    
  }

  return (
    <div>
     <h1>Counter</h1>
    <h3>count - {count}</h3>
    <button onClick={increment}>increment</button>
    </div>
  )
}
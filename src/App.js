import './App.css';
import myimage from './assets/image.jpeg'
import { useState } from 'react';

function App() {
let [name , setName] = useState('khunthihan') // [getter,setterfun]
let [posts , setPosts] = useState([
  {
    id : 1 ,
    title : 'First post'
  },
  {
    id : 2 ,
    title : 'second post'
  },
  {
    id : 3 ,
    title : 'third post'
  }
])
console.log(posts)
console.log(name)

let changeName = () => {
  setName("aung aung") 
  console.log(name) // the console value is khhun thi han because the setName is a little bit longer so js doesn't wait the result and take the default value to show

  }

let deletePost = (id)=>{
 
   setPosts((prevState) => prevState.filter(post => post.id != id)) //[{},{},{}]
   
}

  return (
    <div className="app">
       <h1>hello {name}</h1>
       <button onClick={changeName}>Change name</button>




      <h1>Posts</h1>
       <ul>
          {posts.map((post)=>(
             <li key = {post.id } >
              {post.title}
              <button onClick={()=>deletePost(post.id)}>Delete</button>
              </li>
          ))}
       </ul>
       <br/>
    </div>
  );
}

export default App;

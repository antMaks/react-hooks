// import React, { useState, useEffect } from 'react';


// function App() {
// const [type, setType ] = useState('users')
// const [data, setData] = useState([])
// const [pos, setPos] = useState({
//   x:0, y: 0
// })

//  useEffect(() => {
//   fetch(`https://jsonplaceholder.typicode.com/${type}`)
//   .then(response => response.json())
//   .then(json => setData(json))

//   return () => {
//     console.log('clean type')
//   }
// }, [type])

//   const mouseMoveHandler = event => {
//     setPos({
//       x: event.clientX,
//       y: event.clientY
//     })
//   }
  

// useEffect(() => {
//   console.log('componentdidmount')

//   return () => {
//     window.removeEventListener('mousemove', mouseMoveHandler)
// }
// }, [])

//   return (
//     <div>
//       <h1>Resourse: {type}</h1>
//       <button onClick={() => setType('users')}>users</button>
//       <button  onClick={() => setType('todos')}>todo</button>
//       <button  onClick={() => setType('posts')}>posts</button>


//       {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
//       <pre onClick={mouseMoveHandler}>{JSON.stringify(pos, null, 2)}</pre>
//     </div>
//   );
// }

// export default App;
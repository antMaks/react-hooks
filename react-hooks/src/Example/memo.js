import React, { useState, useMemo, useEffect } from 'react';


function complexCompute(num) {
  console.log('complexCompute')
  let i = 0;
  while (i < 100000000) i++

  return num * 2
}

function App() {

  const [number, setNumber] = useState(27)
  const [colored, setColored] = useState(false)

  const styles = useMemo( () => ({
    color: colored ? 'darked' : 'black'
  }),[colored])
  

  const computed = useMemo(() => {
    return complexCompute(number)

}, [number])

 useEffect(() => {
   console.log('Styles changed')
 }, [styles])

  return (
   <>
   <h1 style={styles}>computed value:{computed}</h1>
   <button className={"btn btn-success"} onClick={() => setNumber(prev => prev  + 1)}>plus</button>
   <button className={"btn btn-danger"} onClick={() => setNumber(prev => prev  - 1)}>minus</button>
   <button className={"btn btn-warning"} onClick={() => setColored(prev => !prev )}>change</button>
   </>
  )
}

export default App;

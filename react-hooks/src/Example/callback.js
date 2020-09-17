import React, { useState, useMemo, useEffect, useCallback } from 'react';
import ItemsList from './Example/ItemsList'


function App() {

  
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darked' : 'black'
  }

  const generateItemFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `element ${i + 1}`)
  }, [count])
  

  return (
   <>
   <h1 style={styles}> elements:{count}</h1>
   <button className={"btn btn-success"} onClick={() => setCount(prev => prev  + 1)}>plus</button>
   <button className={"btn btn-warning"} onClick={() => setColored(prev => !prev )}>change</button>
   <ItemsList getItems={generateItemFromAPI}/>
   </>
  )
}

export default App;

import { useState } from 'react'
import Crud from './crud'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Crud/> 
    </>
  )
}
export default App
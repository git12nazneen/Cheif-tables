
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Foods from './components/Foods/Foods'
import Header from './components/Header/Header'
import Prepare from './components/Prepare/Prepare'

function App() {
  const [table, setTable] = useState([]);

  const handleTable = (foodyitem) =>{
    // setTable([foodyitem])
    // console.log('foodyitem',foodyitem)
    const newTable = [...table, foodyitem];
    setTable(newTable)
}

  return (
    <>
      <Header></Header>
      <Banner></Banner>
    <div className='container max-w-5xl mx-auto'>
    <div className='md:flex'>
     
        <Foods handleTable={handleTable}></Foods>
     
   
      <Prepare table={table}></Prepare>
     
     </div>
    </div>
     
    </>
  )
}

export default App

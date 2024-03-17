
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const isExist = table.find(item => item.id === foodyitem.id);
    if (!isExist) {
      const newTable = [...table, foodyitem];
      setTable(newTable);
    }
    else{
      // alert('already done')
      toast.error('Already prepare the food,do not choose again!Go and choose another one!');
 
    }
    // const newTable = [...table, foodyitem];
    // setTable(newTable)

}

const handleDelete =(id)=>{
  // console.log(id)
  const newTable = table.filter(item => item.id !=id);
  // console.log(newTable)
  setTable(newTable)
}
  return (
    <>
      <Header></Header>
      <Banner></Banner>
    <div className='container max-w-5xl mx-auto'>
    <div className='md:flex'>
     
       <Foods handleTable={handleTable}></Foods>
      <Prepare table={table} handleDelete={handleDelete}></Prepare>
     
     </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default App

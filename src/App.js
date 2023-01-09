import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes, BrowserRouter, json } from 'react-router-dom';
import AddContact from './Components/AddContact';
import { useEffect, useState } from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function App() {

// const getLocalData = ()=>{
//   const temp = localStorage.getItem('tempdata')
//   console.log('localtemp',temp)
//   console.log('JSON.parse(temp) localtemp',JSON.parse(temp))

//   if(temp){
//     return JSON.parse(temp)
//   }
//   else{
//     return [];
//   }
// }




const contacts = useSelector(contacts=>contacts)



  const [tempdata,setTempdata] = useState(contacts);
  const [isEditpage, setIsEditpage] = useState({value:false,id:0, email:'',first:'',last:''});
  // console.log(tempdata)

  // useEffect(()=>{
  //   setTempdata(JSON.parse(localStorage.getItem('tempdata')))
  //   }, [tempdata])

  // useEffect(()=>{
  //   localStorage.setItem('tempdata', JSON.stringify(tempdata))
    
  // },[tempdata])

  useEffect(()=>{
    setTempdata(contacts)
  }, [contacts])


// store.subscribe(()=>{
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
      <Navbar setTempdata={setTempdata} tempdata={tempdata} />
      <Routes>
        <Route exact path='/' element={<Home  setIsEditpage={setIsEditpage}  tempdata={tempdata} setTempdata={setTempdata}/>}/>
        <Route exact path='/addcontact' element={<AddContact setIsEditpage={setIsEditpage} isEditpage={isEditpage}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

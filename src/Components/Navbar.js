import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
// import { data } from './Data/Data';


const Navbar = ({tempdata, setTempdata}) => {

  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state=>state)

  useEffect(()=>{

    setTempdata(contacts.filter((item)=>item.first.toLowerCase().includes(searchValue) || item.last.toLowerCase().includes(searchValue) || item.email.toLowerCase().includes(searchValue) || item.id.toString().includes(searchValue)))
    console.log(tempdata);

    // dispatch({type:'SEARCH_CONTACT', payload:{first:searchValue}})
  
  },[searchValue])

  // const [filteredData, setFilteredData]= useState();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/addcontact' className="nav-link active" aria-current="page" href="/#">Add New Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 w-100" style={{Width:'20rem'}} placeholder="Search" onChange={(e)=>setSearchValue((e.target.value).toLowerCase())} value={searchValue}/>
        {/* <button className="btn btn-outline-success">Search</button> */}
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

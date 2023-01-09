import React from 'react'
// import { data } from './Data/Data'
import { Link } from 'react-router-dom'
import {  useDispatch } from 'react-redux';
import { toast } from "react-toastify";



const Home = ({setIsEditpage, setTempdata, tempdata}) => {
    

    // const contacts = useSelector(contacts=>contacts)
    const dispatch = useDispatch();

    const handleDelete = (e) =>{
        // console.log(e.target.id)
        // console.log(tempdata.filter(item=>item.id===3))
        setTempdata(()=>tempdata.filter(item=>item.id!=e.target.id))

        dispatch({type:'DELETE_CONTACT', payload:{id:e.target.id}})

        toast.error("Contact Deleted successfully!!");
    }


    // useEffect(()=>{
    //     setTempdata(contacts)
    // }, [tempdata])

    // useEffect(()=>{
    //     setTempdata(JSON.parse(localStorage.getItem('tempdata')))
    // },[])
    return (
        <div style={{width:'98vw', overflow:'auto'}}>
          <Link to='/addcontact'> <button className="btn btn-primary my-4" onClick={()=>setIsEditpage({value:false})}>Add Contact</button></Link> 
          <div class="table-responsive">
            <table className="table" style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>                       
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {tempdata.map((item) => {
                        return (
                            // <div key={item.id}>
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.email}</td>
                                    <td>{item.first}</td>
                                    <td>{item.last}</td>
                                    <td> <Link style={{textDecoration:'none'}} to='/addcontact'><button id={item.id} onClick={(e)=>setIsEditpage({value:true,id:item.id,email:item.email,first:item.first,last:item.last})} className="btn btn-primary">Edit</button> </Link>  
                                    <button id={item.id} onClick={(e)=>handleDelete(e)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            // </div>
                        )
                    })}
                   
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Home

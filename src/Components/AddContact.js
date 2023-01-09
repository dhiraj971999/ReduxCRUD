import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {useHistory} from 'react-router'
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import './AddContact.css'

const AddContact = ({setIsEditpage,isEditpage}) => {
    const [id, setId] = useState();
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [newcontact, setNewcontact] = useState({id:0,email:'',first:'',last:''});

    const dispatch = useDispatch();

    const navigate = useNavigate()


    // useEffect(()=>{
    //   if(newcontact.id!=0)
    //   {setTempdata([...tempdata, newcontact]);}
    // },[newcontact])

const handleSubmit = (e) =>{
    e.preventDefault()

   



console.log('details',id,email,first,last)

if(isEditpage.value)
  {
    // tempdata.map((item)=>{
    //     if(item.id==isEditpage.id){
    //      return( item.id=id,
    //       item.email=email,
    //       item.first=first,
    //       item.last=last)
    //     }
    // } 
    // )

    dispatch({type:'UPDATE_CONTACT', payload:{
        id:isEditpage.id,
        email:email,
        first:first,
        last:last,
      }})

      toast.success("Contact updated successfully!!");
  }

else{
//  console.log('before',data);
//  console.log(newcontact)
//  data.push(newcontact);
//  console.log('after',data);
// setNewcontact({
//   id:id,
//   email:email,
//   first:first,
//   last:last,
// })

dispatch({type:'ADD_CONTACT', payload:{id:id,
  email:email,
  first:first,
  last:last,}})

  toast.success("Contact added successfully!!");
// setTempdata([...tempdata, {id:id,email:email,first:first,last:last}])
}



setIsEditpage({value:false})
// localStorage.setItem('tempdata', JSON.stringify(tempdata))

console.log('isEditpage isEditpage',isEditpage)

navigate('/')
}

useEffect(()=>{
  if(isEditpage.value)
  {
    
    setId(isEditpage.id)
    setEmail(isEditpage.email)
    setFirst(isEditpage.first)
    setLast(isEditpage.last)
  }
},[isEditpage])

  return (
    <div className='add-contact' >
      <h1 className='my-5'>{isEditpage.value?'Edit':'Add'} Contact</h1>
      <form  style={{border:'1px solid black', padding:'2rem', borderRadius:'7%'}} >
      <div className="mb-3" >
    <label className="form-label">ID</label>
    <input type="text" className="form-control" value={id} onChange={(e)=>setId(e.target.value)}/>
   
  </div>
  <div className="mb-3"  >
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
   
  </div>
  <div className="mb-3">
    <label  className="form-label">First Name</label>
    <input type="text" className="form-control" value={first} onChange={(e)=>setFirst(e.target.value)} />
  </div>

  <div className="mb-3"  >
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" value={last}  onChange={(e)=>setLast(e.target.value)} />
   
  </div>
    
  <button  className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Submit</button>
</form>
    </div>
  )
}

export default AddContact

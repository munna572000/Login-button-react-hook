import React , {useState} from 'react'

function App() {
    const [user , setUser] = useState({
        username: "",
        email:"",
        phone:"",
        date:"",
        password:""
    });
    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name , value);
        setUser( { ...user, [name]:value });
    }
    const [records , setRecords] = useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newRecords = {...user , id:new Date().getTime().toString()}
        console.log(records);
        setRecords ([...records , newRecords]);
        console.log(records);
        setUser({ username: "" , email: "", phone:"", date:"date", password:""});
    }
  return (
    <>
     /<div className="container mt-3 bg-info  " >
       <form action="" onSubmit={handleSubmit}>
        <div className='mb-3 mt-3'>
           <label htmlFor='username'>Full Name</label>
           <input type="text" className='form-control' autoComplete='off' placeholder="Enter full name"
            value={user.username}
            onChange={handleInput}
             name="username" id='username'/>
        </div>
        <div className='mb-3 mt-3'>
           <label htmlFor='email'>Email</label>
           <input type="text" className='form-control' autoComplete='off' placeholder="Enter your email"
            value={user.email} onChange={handleInput} name="email" id='email' required/>
        </div>
        <div className='mb-3 mt-3'>
           <label htmlFor='phone'>Phone</label>
           <input type="number" className='form-control' autoComplete='off' placeholder="Enter phone number"
            value={user.phone} onChange={handleInput} name="phone" id='phone'/>
        </div>
        <div className='mb-3 mt-3'>
           <label htmlFor='date'>DOB</label>
           <input type="date" className='form-control' autoComplete='off' placeholder="Enter phone DOB"
            value={user.date} onChange={handleInput} name="date" id='date' required/>
        </div>
        <div className='mb-3 mt-3'>
           <label htmlFor='password'>Password</label>
           <input type="password" className='form-control' autoComplete='off' placeholder="Enter password" 
            value={user.password} onChange={handleInput} name="password" id='password'/>
        </div>
        <button type='submit' className='btn btn-primary'> Login</button>

       </form>
       <div>
           {
               records.map((curElem)=>{
                   const { id , username, email , phone , date , password}= curElem;
                   return(
                       <>
                           <div className='mb-3 mt-3' key ={id}>
                               <p> {username}  </p>
                               <p> {email}  </p>
                               <p> {phone}  </p>
                               <p> {date}  </p>
                               <p> {password}  </p>
                           </div>
                       </>
                   )
               })
           }
       </div>
       
       
       

     </div>
 
    </>
  )
}

export default App;
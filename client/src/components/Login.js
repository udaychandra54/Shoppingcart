import React,{useState,useContext} from 'react';
import { CartContext } from '../store/cart-context';
import { useNavigate, useNavigationType } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {users} = useContext(CartContext);
    const navigate =useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
      const isEmail= users.find(user=>user.email===email);
      console.log(isEmail)
      if(isEmail || "undefined"){
        alert("email is not existed please signup")
       
      }else{
        navigate("/home")
      }
    }
  return (
    <div className="container mt-5" style={{width:"70%"}}>
    <div className="row">
        <div className="col-sm-6">
            <h2>Login</h2>
            <p>Get access to your Orders, Whishlist and Recommendations.</p>
        </div>
        <div className=" col-sm-6">
        <form onSubmit={submitHandler}>
           
            <div className="mb-3 form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-3 form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
           
            <div className="mb-3">
                <button className="btn btn-danger w-100">Login</button>
            </div>
            </form>
            
        </div>
    </div>
</div>
  )
}

export default Login
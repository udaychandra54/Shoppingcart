import React,{useState,useContext} from 'react';
import "../styles/Register.css";
import { CartContext } from '../store/cart-context';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {users,addUser}=useContext(CartContext);
    const navigate = useNavigate();

    const checkEmail=(mail)=>{
        console.log(mail)
      const isEmailThere=  users.find(user=>user.email===mail);
      console.log(isEmailThere)
      if(isEmailThere){
          alert("This email is already exists")
      }else{
          setEmail(mail);
      }
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(password===confirmPassword){
            const user={
                id:Math.floor(Math.random()*99999),
                firstName,
                lastName,
                email,
                password
            }
            addUser(user);
            navigate('/home')
            
        }else{
            alert("passwords did not matched")
        }
        
    }
  return (
    <div className="container mt-5" style={{width:"70%"}}>
        <div className="row">
            <div className="col-sm-6">
                <h2>Signup</h2>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div className=" col-sm-6">
            <form onSubmit={submitHandler}>
                <div className="mb-3 form-group">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
                </div>
                
                <div className="mb-3 form-group">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e)=>checkEmail(e.target.value)} required/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-danger w-100">Signup</button>
                </div>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Register
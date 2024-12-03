import { useState } from "react";
const Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [error,setError] = useState('');
    const [showUser,setShowUser] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setShowUser(false);
        if(validateEmail(email)){
            setShowUser(true);
            setError('')
        }
        setError('email not valid');
    }
    return(
        <div>
            <h1>Login Form</h1>
            
            {
                showUser&&(
                    <div>showUser</div>
                )
                (<div>error - {error}</div>)
            }


            <form onSubmit={(e)=>handleSubmit(e)}>
            <input 
            type = 'text'
            name = 'useremail'
            placeholder="enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}>

            </input>
            <input 
            type = 'text'
            name = 'useremail'
            placeholder="enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}>
                
            </input>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export const validateEmail=(email)=>{
    if(email==='admin@123'){
        return true;
    }
    else{
        return false;
    }
}
export default Login;
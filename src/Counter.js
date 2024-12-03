import { useState } from "react";
const Counter = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [error,setError] = useState('');
    const [showUser,setShowUser] = useState(false);
   
    return(
        <div>
          <h1>hello</h1>
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
export default Counter;
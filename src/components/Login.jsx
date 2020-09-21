import React, {useState} from 'react'

const Login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const register = e =>{
        e.preventDefault();
        console.log({name, password});
    }
    return (
        <>
        <form onSubmit={register}>

            <label>Username:</label>

            <input 
            value={name}
            onChange = {e => setName(e.target.value)}
            type="text" 
            placeholder="Email..." 
            name="email"        
            />
            
            <label>Password:</label>

            <input 
            value={password}
            onChange = {e => setPassword(e.target.value)}
            type="password" 
            placeholder="Password..." 
            name="password"
            />
            
            <input type="submit"/>

        </form>
        </>
    )
}

export default Login
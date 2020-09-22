import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({setUser}) => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const register = e =>{
        e.preventDefault();
        console.log({name, password});
        setUser(name)
        history.push('/works')
    }
    return (
        <>
        <form onSubmit={register} id="home">

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
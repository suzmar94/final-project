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
        <form onSubmit={register} id="home" className="loginform form-group container d-flex flex-column">

        <h6 className="h5">In order to check out our works, please login!</h6>
        <br/>


            <label>Username:</label>

            <input className="form-control"
            value={name}
            onChange = {e => setName(e.target.value)}
            type="text" 
            placeholder="Email..." 
            name="email"        
            />
            
            <label>Password:</label>

            <input className="form-control"
            value={password}
            onChange = {e => setPassword(e.target.value)}
            type="password" 
            placeholder="Password..." 
            name="password"
            />
            <br/>
            <input className="btn btn-dark" type="submit"/>

        </form>
        </>
    )
}

export default Login
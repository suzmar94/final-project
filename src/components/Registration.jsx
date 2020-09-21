import React, { useState } from 'react'

 const Registration = () => {

        const [name, setName] = useState("")
        const [lastName, setLastName] = useState("")
        const [email, setEmail] = useState("")
        const [phone, setPhone] = useState("")
        const [password, setPassword] = useState("")
    
        const register = e =>{
            e.preventDefault();
            console.log({name, lastName, email, phone, password});
        }

        return (
            <>
            <form onSubmit={register}>
    
                <label>Name:</label>
                <br/>
                <input 
                value={name}
                onChange = {e => setName(e.target.value)}
                type="text" 
                placeholder="e.g. Suzana" 
                name="name"        
                />

                <br/>
                <br/>
                
                <label>Last Name:</label>
                <br/>
                <input 
                value={lastName}
                onChange = {e => setLastName(e.target.value)}
                type="text" 
                placeholder="e.g. Markovic" 
                name="lastname"
                />

                <br/>
                <br/>
                
                <label>Email:</label>
                <br/>
                <input 
                value={email}
                onChange = {e => setEmail(e.target.value)}
                type="text" 
                placeholder="e.g. suzana@gmail.com" 
                name="email"        
                />

                <br/>
                <br/>

                <label>Phone Number:</label>
                <br/>
                <input 
                value={phone}
                onChange = {e => setPhone(e.target.value)}
                type="number" 
                placeholder="e.g. +38169XXXXXXX" 
                name="phone number"        
                />  

                <br/>
                <br/>

                <label>Password:</label>
                <br/>
                <input 
                value={password}
                onChange = {e => setPassword(e.target.value)}
                type="password"  
                name="password"        
                />  

                <br/>
                <br/>
                
                <input type="submit"/>
    
            </form>
            </>
    )
}

export default Registration


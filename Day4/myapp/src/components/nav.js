import React from "react";
import {useState} from "react";
function Nav(){
    const[visible,setVisible]=useState('');
    const[data,setData]=useState({
        username : '',
        password : ''
    })
    function toggle(){
        setVisible(!visible);
    }
    function Login(e){
        e.preventDefault();
        alert(data.username+data.password)
    }
    const handleChange=(e)=>{setData({...data,[e.target.id]:e.target.value})}
    return(
        <>
        <section class="header">
        <nav>
            
            <a href="exp1.html"><img src="download-removebg-preview.png"/></a>
            <div className="nav-links">
                <ul>
                    <li><a href="exp1.html">REGISTRATION</a></li>
                    <li><a href="exp11.html">LOGIN</a></li>
                </ul>
            </div>
        </nav>
    </section>
    <h1 > LOG IN </h1>
    <form class="container" onSubmit={Login}>
        <input type="text" id="un" placeholder="username" required onChange={handleChange} className="inp-class"/>
        <input type="password" id="pwd" placeholder="password" onChange={handleChange} className="inp-class"/>
        <input type="submit" value="LOGIN" className="inp-sub" />
    </form>
        </>
    )
}
export default Nav;
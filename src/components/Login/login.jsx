import React from 'react';
import ReactDOM from 'react-dom';



function Login() {



    return(

        <div>
            <h1>Login</h1>

        <form>


            <label htmlFor="">Email:</label>
            <input type="email"/>

            <label htmlFor="">Password:</label>
            <input type="password"/>

            <button>Login</button>
        </form>
        </div>
    )
    
}

export default Login;
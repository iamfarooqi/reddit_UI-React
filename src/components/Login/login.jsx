import React from 'react';
import ReactDOM from 'react-dom';



function Login() {



    return(

        <form>


            <label htmlFor="">Email:</label>
            <input type="email"/>

            <label htmlFor="">Password:</label>
            <input type="password"/>

            <button>Login</button>
        </form>
    )
    
}
ReactDOM.render(<Login/>,document.getElementById("root"))
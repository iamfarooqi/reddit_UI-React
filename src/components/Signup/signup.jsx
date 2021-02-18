import React from 'react';
import ReactDOM from 'react-dom';



function Signup() {



    return(

        <div>

        <h1>SignUp</h1>

        <form>
            <label htmlFor="">Name:</label>
            <input type="text"/>

            <label htmlFor="">Email:</label>
            <input type="email"/>

            <label htmlFor="">Password:</label>
            <input type="password"/>

            <button>Signup</button>
        </form>

        </div>
    )
    
}

export default Signup;

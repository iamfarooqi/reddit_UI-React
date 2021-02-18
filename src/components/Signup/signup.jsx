import React from 'react';
import ReactDOM from 'react-dom';



function Signup() {



    return(

        <form>
            <label htmlFor="">Name:</label>
            <input type="text"/>

            <label htmlFor="">Email:</label>
            <input type="email"/>

            <label htmlFor="">Password:</label>
            <input type="password"/>

            <button>Signup</button>
        </form>
    )
    
}
ReactDOM.render(<Signup/>,document.getElementById("root"))
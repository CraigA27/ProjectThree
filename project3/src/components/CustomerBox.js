import React, { useState } from 'react';

const CustomerBox = ({customers}) => {


    const [userInput, setUserInput] = useState({
        email: "",
        passWord: ""
    })

    // const checkLogInDetails

    const handleChange = function(event){
        let propertyName = event.target.name;
        let Input = {...userInput}
        Input[propertyName] = event.target.value;
        setUserInput(Input);
    }


    return(
        <>
        <form>
            <input type="text" placeholder="enter email" name="email" onChange={handleChange} value={userInput.email} />
            <input type="text" placeholder="enter password" name="passWord" onChange={handleChange} value={userInput.passWord}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default CustomerBox;
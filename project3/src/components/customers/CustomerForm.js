import React from 'react';

const CustomerForm = () => {

    const [stateCustomer, setStateCustomer] = useState(
        {
            name: "",
            email: "",
            passWord: "",
            avatar: null
        }
    )

    return(
        <>
        <h1>CustomerForm</h1>
        <form>
            <input type ="text" placeholder="enter your name" name="name" onChange={handleChange} value={stateCustomer.name} />
            <input type ="text" placeholder="enter your email" name="email" onChange={handleChange} value={stateCustomer.email} />
            <input type ="text" placeholder="enter your password" name="passWord" onChange={handleChange} value={stateCustomer.passWord} />
            <button type="submit">Create Account</button>
        </form>
        </>
    )
}

export default CustomerForm;
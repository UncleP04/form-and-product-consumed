import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "./style.css";
import React from "react";
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import handleError from "../../utils/checkErrors";

const FormValidation = () => {

    //  //////////////// CALLING OUT USESTATES.. /////////////////
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });
    // const [invalidInput, setInvalidInput] = useState('');

    // HANDELING SUBMIT ...
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("You have just submitted!")
    }

    // GETTING THE INPUT VALUE...
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }

    // USING VISIBILITY ICON TO HIDE AND SEE PASSWORD..
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return (
        <div>
            <div className="FormContainer">
                <h1 className='title'>Imperiod</h1>
                <form action="https://cookies.vercel.app" className='Form' onSubmit={handleSubmit}>
                    <fieldset className='fieldsetContainer'>
                        <label htmlFor="firstName" className='formTitle'>First name</label>
                        <input
                            className='inputField'
                            type="text"
                            id="firstName"
                            onChange={(event) => setErrors(handleError(event))}
                            required />
                        <span className="InvalidInputcaller">{ errors.firstName }</span>
                    </fieldset>
                    {/* <fieldset className='fieldsetContainer'>
                        <label htmlFor="lastName" className='formTitle'>Last name</label>
                        <input
                            name="lastName"
                            className='inputField'
                            type="text"
                            id="lastName"
                            onChange={(e) => setErrors(handleError(e))}
                            required />
                        <span className="InvalidInputcaller">{errors.lastName}</span>
                    </fieldset>
                    <fieldset className='fieldsetContainer'>
                        <label htmlFor="email" className='formTitle'>Email</label>
                        <input
                            name="email"
                            className='inputField'
                            type="email"
                            id="email"
                            onChange={(e) => setErrors(handleError(e))}
                            required />
                        <span className="InvalidInputcaller">{errors.email}</span>
                    </fieldset> */}
                    <fieldset className='fieldsetContainer'>
                        <label htmlFor="date" className='formTitle'>Birth_Date</label>
                        <input
                            name="date"
                            className='inputField'
                            type="date"
                            id="date"
                            required />
                    </fieldset>
                    <fieldset className='fieldsetContainer'>
                        <div className="positionLabelAndTo">
                            <label htmlFor="password" className='formTitle'>Password</label>
                            <div className="input-group-btn">
                                <i className="toggle" onClick={togglePassword}>
                                    {passwordType === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </i>
                            </div>
                        </div>
                        <input
                            className=' passwordinput'
                            value={passwordInput}
                            type={passwordType}
                            id="password"
                            onChange={handlePasswordChange}
                            required />
                        <span className="InvalidInputcaller">Password should be 8- 20 characters. including 1 letter(uppercase and lowercase), 1 number and a special character </span>
                    </fieldset>
                    <pre className='buttonContainer'> <button className='button' type='submit'>Submit</button></pre>
                </form>
            </div>
        </div >
    )
}

export default FormValidation;
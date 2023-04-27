import React from "react";
import { useState } from 'react';
import "../FormFolder/style.css";

const FormValidated = () => {

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        mail: ""
    });

    const [values, setValues] = useState(errors)
  

    const handleOnChange = (event) => {
        let element = event.target;
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        console.log(element.id)
        if (element.id == "firstName") {
            if (!element.value) {
                return { firstName: "Can't be Empty.." }
            }
            if (element.value.length < 4 || element.value.length > 16) {
                return { firstName: "this should be between 4 - 16 characters" }
            } else {
                return { firstName: "" }

            }
        }

        if (element.id == "lastName") {
            if (!element.value) {
                return { lastName: "Can't be Empty.." }
            }
            if (element.value.length < 6 || element.value.length > 10) {
                return { lastName: "this should be 3 - 16 characters" }
            } else {
                return { lastName: "" }
            }
        }

        //   EMAIL VALIDATION
        if (element.id == "mail") {

            if (!element.value) {
                return { email: "Can't be Empty.." }
            }
            if (element.value.includes('@gmail.com' || '@yahoo.com')) {
                return { email: "" }
            } else {
                return { email: "Should include @gmail.com or '@yahoo.com" }
            }
        }
    }


    return (
        <div>
            <div className="formContainer">
                <fieldset className='fieldsetContainer'>
                    <label htmlFor="firstName" className='formTitle'>First name</label>
                    <input
                        className='inputField'
                        id="firstName"
                        value={values.firstName}
                        onChange={handleOnChange}   
                    />
                    <span className="invalidInputCaller">this should be between 4 - 16 characters</span>
                </fieldset>
                <fieldset className='fieldsetContainer'>
                    <label htmlFor="lastName" className='formTitle'>Last name</label>
                    <input
                        className='inputField'
                        id="lastName"
                        value={values.lastName}
                        onChange={handleOnChange}

                    />
                    <span className="invalidInputCaller">this should be 3 - 16 characters</span>
                </fieldset>
                <fieldset className='fieldsetContainer'>
                    <label htmlFor="mail" className='formTitle'>Email</label>
                    <input
                        className='inputField'
                        id="mail"
                        value={values.mail}
                        onChange={handleOnChange}
                    />
                    <span className="invalidInputCaller">Should include @gmail.com or '@yahoo.com</span>
                </fieldset>
                <button className="button">Submit</button>
            </div>
        </div >
    )
}

export default FormValidated;
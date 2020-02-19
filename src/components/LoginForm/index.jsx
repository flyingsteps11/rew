import React, {Fragment, useState} from 'react'
import '../../assets/styles/index.css'
import {useHistory} from 'react-router-dom'
import LanguageForm from "../LanguageForm";
import { withTranslation } from "react-i18next";

const LoginForm = ({login, t, i18n}) => {
    const history = useHistory();


    const [formValues, setFormValues] = useState({
        login: null,
        password: null,
        language: i18n.language
    });

    const onChangeInputHandler = (event) => {
        const name = event.nativeEvent.target.name;
        const value = event.nativeEvent.target.value;
        setFormValues({
            ...formValues,
            [name]: value
        })

    };

    const submitHandler = event => {
        event.nativeEvent.preventDefault();
        login(formValues, history);
        console.log(formValues)
    };
    return (

        <form onSubmit={submitHandler}>
            <div className='login-box'>
                <h1>TMS Beiersdorf</h1>

                <div className='login'>
                    <i className="fa fa-user" aria-hidden='true'></i>
                    <input
                        id="formLogin"
                        type="text"
                        name="login"
                        placeholder="Enter email"
                        value={t(formValues.login)}
                        onChange={onChangeInputHandler}/>
                </div>

                <div className='login'>
                    <i className='fa fa-lock' aria-hidden='true'></i>
                    <input
                        id="formPassword"
                        type="password"
                        name="password"
                        value={t(formValues.password)}
                        placeholder="Enter password"
                        onChange={onChangeInputHandler}/>

                </div>


                <div className='login'>
                    <i className="fa fa-globe" aria-hidden='true'></i>
                    <input
                        id="formLanguage"
                        type="text"
                        name="language"
                        placeholder="Enter language"/>

                </div>

                <button id="signInButton" type="submit">Sing in</button>
            </div>
        </form>
    );
};
export default withTranslation()(LoginForm)
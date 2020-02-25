import React, {Fragment, useState} from 'react'
import '../../assets/styles/index.css'
import {useHistory} from 'react-router-dom'
import LanguageForm from "../LanguageForm";
import {withTranslation} from "react-i18next";



const LoginForm = ({login, t, i18n}) => {
    const history = useHistory();

    const [formValues, setFormValues] = useState({
        login: "",
        password: "",
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
        <>
            <LanguageForm/>
            <div className="Login">
                <form onSubmit={submitHandler}>
                    <div className='login-box'>

                        <h1>TMS Beiersdorf</h1>

                        <div className='login'>
                            <i className="fa fa-user" aria-hidden='true'></i>
                            <input
                                id="formLogin"
                                type="text"
                                name="login"
                                placeholder={t("login")}
                                value={formValues.login}
                                onChange={onChangeInputHandler} required/>
                        </div>

                        <div className='login'>
                            <i className='fa fa-lock' aria-hidden='true'></i>
                            <input
                                id="formPassword"
                                type="password"
                                name="password"
                                placeholder={t("password")}
                                value={formValues.password}
                                onChange={onChangeInputHandler} required/>

                        </div>


                        <button id="signInButton" type="submit">{t("login_btn")}</button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default withTranslation()(LoginForm)
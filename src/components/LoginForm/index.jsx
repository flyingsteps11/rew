import React, {Fragment, useState} from 'react'
import '../../assets/styles/index.css'
import {useHistory} from 'react-router-dom'
import LanguageForm from "../LanguageForm";
import {withTranslation} from "react-i18next";
import ru from "../../images/ru.png";
import en from "../../images/usa.png";
import i18next from "i18next";


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

    function clickDropdown(e) {
        document.getElementById("dropdown_content").classList.toggle("show");
    }

    function onBlur(e) {
        e.preventDefault();
        let myDropdown = document.getElementById("dropdown_content");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }

    const submitHandler = event => {
        event.nativeEvent.preventDefault();
        login(formValues, history);
        console.log(formValues)
    };

    function onClickLang(event) {
        i18n.changeLanguage(event.target.lang);
        const value = event.target.lang;
        setFormValues({
            ...formValues,
            language: value
        })
    }

    return (
        <>
            <LanguageForm/>
            <div className="Login">
                <button className="dropdown_button" onClick={clickDropdown} onBlur={onBlur}>
                    <div className="dropdown_lang">
                        {
                            formValues.language === "ru" ?
                                <div className="dropdown_content-link">
                                    <img src={ru} alt="rus"/>
                                    Русский
                                </div> :
                                <div className="dropdown_content-link">
                                    <img src={en} alt="eng"/>
                                    English
                                </div>
                        }
                    </div>
                    <div className="dropdown_content" id="dropdown_content">
                        <div className="dropdown_content-link" lang="ru" onClick={onClickLang}>
                            <img src={ru} alt="rus"/>
                            Русский
                        </div>
                        <div className="dropdown_content-link" lang="en" onClick={onClickLang}>
                            <img src={en} alt="eng"/>
                            English
                        </div>
                    </div>
                </button>

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
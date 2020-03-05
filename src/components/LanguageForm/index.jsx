import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Dropdown} from "semantic-ui-react"
import CustomIcons from "../CustomIcons";

const LanguageForm = () => {
    const {i18n} = useTranslation();
    const [lang, setLang] = useState(i18n.language);

    const changeLanguage = (e, data) => {
        console.log(e, data)
        i18n.changeLanguage(data.value);
        setLang(data.value)
    };

    const items = [
        {
            key: "ru",
            value: 'ru',
            content: (
                <>
                    <img src={CustomIcons["ru"]}/>
                    Russian
                </>
            )
        },
        {
            key: "en",
            value: 'en',
            content: (
                <>
                    <img src={CustomIcons["en"]}/>
                    English
                </>
            )
        }
    ];

    return (
        <>
            <Dropdown
                trigger={(<span style={{display: "flex", alignItems: "center"}}>
                    <img src={CustomIcons[lang]} style={{marginRight: '10px'}}/> {lang === 'ru' ? 'Russian' : 'English'} </span>)}
                icon={null} options={items}  onChange={(e, data) => changeLanguage(e, data)}/>
        </>
    );
};
export default LanguageForm
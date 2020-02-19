import React,{useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Dropdown} from "semantic-ui-react"
const LanguageForm =()=>{
    const {t, i18n}=useTranslation();
    const [lang,setLang] = useState(i18n.language);
    const changeLanguage =lang=>{
        i18n.changeLanguage(lang);
        setLang(lang)
    };
    return(
      <>
        <Dropdown
        button
        onSelect={(lang)=>changeLanguage(lang)}
        className='icon'
        floating
        labeled
        icon='world'
        search
        text={"Select Language"}
        />



      </>
    );
};
export default LanguageForm
import {createContext, useContext, useState} from "react";

const LangContext = createContext('eng');
const LangUpdateContext = createContext();

export const useLang = () => {
    return useContext(LangContext)
}
export const useLangUpdate = () => {
    return useContext(LangUpdateContext)
}



export const LangProvider = ({children}) => {


    const [lang, setLang] = useState('eng');

    const updateLang = () => {
        setLang(lang => lang === 'eng' ? 'fr' : 'eng');
    }


    return (
        <LangContext.Provider value={lang}>
            <LangUpdateContext.Provider value={updateLang}>
                {children}
            </LangUpdateContext.Provider>
        </LangContext.Provider>
    )
}




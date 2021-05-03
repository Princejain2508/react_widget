import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

const options = [
    {
        title: "Afrikaans",
        value: "af"
    },
    {
        title: "Arabic",
        value: "ar"
    },
    {
        title: "Hindi",
        value: "hi"
    },
    {
        title: "French",
        value: "fr"
    },
    {
        title: "German",
        value: "de"
    },
    {
        title: "Gujarati",
        value: "gu"
    },
    {
        title: "Italian",
        value: "it"
    },
    {
        title: "Japanese",
        value: "ja"
    }, {
        title: "Irish",
        value: "ga"
    }
];
const Translate = () => {
    const [language, setLanguage] = useState(options[2]);
    const [term, setTerm] = useState('hello');

    const onFormSubmit = (e) => e.preventDefault();

    const onTermChange = (e) => {
        setTerm(e.target.value);
    }

    return (
        <div className="ui container">
            <br />
            <form className=" ui form " onSubmit={(e) => onFormSubmit(e)}>
                <div className="field">
                    <label>Search</label>
                    <input type="text" onChange={(e) => onTermChange(e)} value={term} />
                </div>
            </form><br />
            <Dropdown options={options} selected={language} onChangeSelected={setLanguage} label={'Select a Language'} />
            <Convert language={language} term={term} />
        </div>
    );
}

export default Translate;
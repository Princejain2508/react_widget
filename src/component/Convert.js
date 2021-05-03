import React, { useState, useEffect } from "react";
import Axios from "axios";
const Convert = ({ language, term }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  useEffect(() => {
    if (term) {
      const timeoutId = setTimeout(() => {
        setDebouncedTerm(term);
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);
  useEffect(() => {
    const getResults = async () => {
      const { data } = await Axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedTerm,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    if (debouncedTerm) getResults();
  }, [debouncedTerm, language]);

  return (
    <div className="ui container">
      <br />
      <div className="field">
        <h1>{translated} </h1>
      </div>
    </div>
  );
};
export default Convert;

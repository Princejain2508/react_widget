import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Search = () => {

    const [debouncedTerm, setDebouncedTerm] = useState('programming');
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(() => {

        if (term) {
            const timeoutId = setTimeout(() => {
                setDebouncedTerm(term);
            }, 1000)

            return () => { clearTimeout(timeoutId) }
        }

    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await Axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            })
            // console.log(data.query.search);
            setResults(data.query.search);
        }
        search();
    }, [debouncedTerm])

    const onTermChange = (e) => {
        setTerm(e.target.value);
    }

    const renderedResult = results.map(result => {
        return (
            <div className="item " key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">{result.title} </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

                </div>
            </div >
        );
    });

    const onFormSubmit = (e) => e.preventDefault();
    



    return (
        <div className=" ui container">
            <form className=" ui form container" onSubmit={(e) => onFormSubmit(e)}>
                <div className="field">
                    <label>Enter Text: </label>
                    <input type="text" onChange={(e) => onTermChange(e)} />
                </div>
            </form>
            <div className="ui celled list">{renderedResult}</div>
        </div>
    );
}

export default Search;
import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Search = ()=> {
    const [term , setTerm] = useState('programing');
    const [results, setResults] = useState([])
    useEffect(()=>{
        (async () => {
          const{data} =  await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search);
        })();
    },[term]);

    const renderResults = results.map((result) => {
        return (
                    <div key ={result.pageid} className="item">
                        <div className="content">
                            <div className="header">
                                {result.title}
                            </div>
                            {result.snippet}
                        </div>
                    </div>
                );
    });

    
    return (
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>Enter Search Term</label>
                        <input className="input"
                                value={term}
                                onChange={e => setTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="ui celled list">
                    {renderResults}
                </div>
            </div>
        );
};

export default Search;
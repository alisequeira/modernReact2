import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Search = ()=> {
    const [term , setTerm] = useState('programing');
    const [results, setResults] = useState([])
    useEffect(()=>{
        const timeOutId = setTimeout(() => {//timeoutId is for cancel the timeout in case it's need it
            if(term){
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
            }
        },1000); 
    return () => {//useEffect's clean up function
        clearTimeout(timeOutId);
    }    
    },[term]);

    const renderResults = results.map((result) => {
        return (
                    <div key ={result.pageid} className="item">
                        <div className="right floated content">
                            <a 
                                className="ui button"
                                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                            >
                                GO
                            </a>
                        </div>
                        <div className="content">
                            <div className="header">
                                {result.title}
                            </div>
                            <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
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
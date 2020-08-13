import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"/>
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;
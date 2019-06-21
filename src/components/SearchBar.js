import React from 'react';

class SearchBar extends React.Component{
    state = {
        searchText:''
    };

    onInputChange = (e) =>{
        this.setState({
            searchText:e.target.value
        });
    };

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchText);
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.searchText} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
import React from 'react'
import _ from 'lodash';
import { useHistory } from 'react-router';

const Searchbar = ({ searchActions }) => {
    const { searchProductsFetch } = searchActions;
    const history = useHistory();
    var handleSearchInput = () => {
        return _.debounce((event) => {
            if (event.target.value.length > 2) {
                searchProductsFetch(event.target.value);
                history.push("/search");
            }
        }, 1000);
    }
    const searchQuery = () => {
        debugger;
        const searchTerm = document.getElementById('search').value;
        if (searchTerm.length > 2) {
            searchProductsFetch(searchTerm);
            history.push("/search");
        }
    }
    return (
        <>
            <div className="advanced-search">
                <button type="button" className="category-btn">All Categories</button>
                <form action="#" className="input-group">
                    <input type="text" placeholder="What do you need?" onChange={handleSearchInput()} id='search' />
                    <button type="button" onClick={searchQuery}><i className="ti-search" /></button>
                </form>
            </div>
        </>
    )
}

export default Searchbar

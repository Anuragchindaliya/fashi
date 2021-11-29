import React, { useState } from 'react'
import _ from 'lodash';
import { useHistory } from 'react-router';

const Searchbar = ({ searchActions, categories }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const { searchProductsFetch } = searchActions;
    const history = useHistory();

    const fetchData = (searchText) => {
        if (searchText.length > 2) {
            searchProductsFetch({ search: searchText, category: document.getElementById("cat_id").value });
            history.push("/search");
        }
    }
    var handleSearchInput = () => {
        return _.debounce((event) => {
            fetchData(event.target.value)
            setSearchTerm(event.target.value);
        }, 1000);
    }

    const searchQuery = () => {
        // const searchValue = document.getElementById('search').value;
        fetchData(searchTerm);
    }

    const handleEnterKey = (e) => {
        if (e.keyCode === 13) {
            // const searchValue = document.getElementById('search').value;
            fetchData(searchTerm);
        }
    }
    console.log("search Term ", searchTerm);
    return (
        <>
            <div className="advanced-search">
                {/* <button type="button" className="category-btn">All Categories</button> */}
                {categories?.length > 0 &&
                    <select className="category-btn" id="cat_id">
                        <option key="0" value="0">All Categories</option>
                        {categories.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
                    </select>}

                <div className="input-group">
                    <input type="text" placeholder="What do you need?" onChange={handleSearchInput()} onKeyDown={handleEnterKey}
                        // onInput={(e) => setSearchTerm(e.target.value)}
                        id='search' />
                    <button type="button" onClick={searchQuery}><i className="ti-search" /></button>
                </div>
            </div>
        </>
    )
}

export default Searchbar

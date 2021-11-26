import React from 'react'
import _ from 'lodash';
import { useHistory } from 'react-router';

const Searchbar = ({ searchActions, categories }) => {
    const { searchProductsFetch } = searchActions;
    const history = useHistory();
    var handleSearchInput = () => {
        return _.debounce((event) => {
            if (event.target.value.length > 2) {
                searchProductsFetch({ search: event.target.value, category: document.getElementById("cat_id").value });
                history.push("/search");
                console.log("category id ", document.getElementById("cat_id").value)
            }
        }, 1000);
    }

    const searchQuery = () => {
        const searchTerm = document.getElementById('search').value;
        if (searchTerm.length > 2) {
            searchProductsFetch({ search: searchTerm, category: document.getElementById("cat_id").value });
            history.push("/search");
        }
    }

    const handleEnterKey = (e) => {
        if (e.keyCode === 13) {
            const searchTerm = document.getElementById('search').value;
            if (searchTerm.length > 2) {
                console.log("clicked");
                searchProductsFetch({ search: searchTerm, category: document.getElementById("cat_id").value });
                history.push("/search");
            }
        }
    }

    console.log("hello", categories);
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
                    <input type="text" placeholder="What do you need?" onChange={handleSearchInput()} onKeyDown={handleEnterKey} id='search' />
                    <button type="button" onClick={searchQuery}><i className="ti-search" /></button>
                </div>
            </div>
        </>
    )
}

export default Searchbar

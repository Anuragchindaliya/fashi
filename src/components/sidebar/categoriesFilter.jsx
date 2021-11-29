import React from 'react'
import { Link } from 'react-router-dom';
import parse from "html-react-parser";
const CategoriesFilter = ({ categories }) => {
    return (
        <>
            <div className="filter-widget">
                <h4 className="fw-title">Categories</h4>
                <ul className="filter-catagories">
                    {categories.map((cat, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/category/${cat.slug}`}>{parse(cat.name)}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}

export default CategoriesFilter

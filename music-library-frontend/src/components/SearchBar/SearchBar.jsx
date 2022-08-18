import React, { useState } from 'react';
import { makeStyles, Grid, Textfield, Button } from '@mui/material';

const SearchBar = (props) => {
    const [category, setCategory] = useState();
    const [filterData, setFilterData] = useState();

    function handleSubmit(event) {
        event.preventDefault()
        props.filterSongs(category, filterData)
    }

    return (
        <div className="sb-center">
            <form onSubmit={handleSubmit} className='mui-form'>
                <input type='text' className="m-3 p-2 mui-textfield" placeholder="Enter Category Name" value={category} onChange={(event) => setCategory(event.target.value)} />
                <input type='text' className="m-3 p-2 mui-textfield" placeholder="Enter Search Criteria"value={filterData} onChange={(event) => setFilterData(event.target.value)}/>
                <button className='m-3 p-2 me-5 mbtn btn-primary' onClick={handleSubmit}>Filter</button>
            </form>
        </div>
    );
}

export default SearchBar;
import React from 'react'

function Search({searchValue, handleSearchChange}) {
    return (
        <div>
            <form className="form"> 
                <input
                value={searchValue}
                name="search"
                onChange={handleSearchChange}
                type="text"
                placeholder="Search Employees"
                ></input>
            </form>
            
        </div>
    )
}

export default Search

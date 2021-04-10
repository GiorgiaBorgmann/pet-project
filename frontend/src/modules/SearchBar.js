import React from 'react'
import searchDetail from '../img/search-pag-d.PNG'
import ModalFilerSearch from './ModalFilterSearch'

function SearchBar({ setSearch, search }) {
    const searchInput = (e) => {
        setSearch(e.target.value)

    }
    return (
        <div className="container-search">
            <div>
                <div className="title-search">Adoption proposal</div>
                <div className="input-search-container">
                    <input onChange={searchInput} className="input-search" type="text"></input>
                    <ModalFilerSearch />
                    <button className="button-search" type="submit">Search</button>
                </div>
            </div>
            <img className="detail-search" src={searchDetail}></img>
        </div>
    )
}
export default SearchBar;

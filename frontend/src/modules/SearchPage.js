import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import DogCard from './DogCard'
import axios from './axios'

function SearchPage() {
    const [petList, setPetList] = useState("")
    const [search, setSearch] = useState("")
    useEffect(() => {
        const getPetList = async () => {
            const petList = await axios.get("/pet/pet-list")
            setPetList(petList.data)
        }

        getPetList()
    }, [])
    const filter = petList && petList.filter((dog) => dog.type.toLowerCase().includes(search)
    )
    return (
        <div className="container-search-page">
            <SearchBar setSearch={setSearch} search={search} />
            <div className="list-dogs">
                {filter && filter.map((dog, index) => (
                    < DogCard key={index} dog={dog} />
                ))}
            </div>
        </div>
    )
}
export default SearchPage;
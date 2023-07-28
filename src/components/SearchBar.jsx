import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"


export default function SearchBar() {
    const { term, handleSearch } = useContext(SearchContext)
    return (
        <div>
            <form>
                <input
                    ref={term}
                    type="text"
                    placeholder="Search for music"
                />
                <button
                    type="submit"
                    onClick={(e) => handleSearch(e, term.current.value)}
                >
                    Search</button>
            </form>
        </div>
    )
}
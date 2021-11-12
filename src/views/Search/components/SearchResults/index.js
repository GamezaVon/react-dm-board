import SearchResultsItem from "./SearchResultsItems";
import './style.css'
export default function SearchResults({ results, isSearching }) {
    return(
        <div className="search-result-box">
            {!results?.length && isSearching && <p>No existen resultados</p> }
            {results?.map((value) => <SearchResultsItem key={value.id} {...value} /> )}
        </div>
    );
}
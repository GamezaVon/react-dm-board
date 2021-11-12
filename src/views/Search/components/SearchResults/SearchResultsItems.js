export default function SearchResultsItem({name, email}) {
    return(
        <div className='search-result-item'>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}
import { useState, useEffect } from 'react';
import './style.css'

export default function SearchBox({ onSearch, onClose, isSearching}) {
    const [searchText, setSearchText] = useState('');

    const handleSearchClick = () => {
        setSearchText('');
        onClose();
    };

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            console.log("Enter key was pressed. Run your function.");
            // event.preventDefault();
            onSearch(searchText);
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);

    return(
        <div className="search-box">
            <h2 className="search-box-title">Finder</h2>
            <div className="search-box-buttons">
                <label htmlFor="searchText"></label>
                <input type="text" value={searchText} onChange={({target: {value}}) => setSearchText(value)} className="search-box-input"/>
                <button onClick={() => onSearch(searchText)} disabled={!searchText?.length} className="search-button">Search</button>
                {isSearching && <button onClick={handleSearchClick} disabled={!searchText?.length} className="close-button">Close</button>}
            </div>
        </div>
    );
}
const Search = () => {
    return (
        <>
            <style>
                {`
                    .search-input::placeholder {color: #828282ff; opacity: 1;}
                    .search-container {
                        display: flex;
                        justify-content: center;
                        color: white;
                        margin-top: 15px;
                        padding: 40px 20px;
                    }
                    .search-input {
                        border: 2px solid #007bffff;
                        background-color: #212529;
                        color: white;
                        height: 50px;
                        width: 100%;
                        max-width: 65%;
                        padding-left: 20px;
                        border-radius: 4px;
                        font-size: 16px;
                    }
                    .recent-searches {
                        color: white;
                        margin-top: 15px;
                        padding: 0px 20px;
                        max-width: 1000px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    @media (min-width: 768px) {
                        .recent-searches {
                            padding: 0px 200px;
                        }
                    }
                `}
            </style>
            <div className="search-container">
                <input className="search-input"
                    type="text"
                    placeholder="Search for Movies, series, Animes..."
                />
            </div>
            <div className="recent-searches">
                <h2>Recent Searches</h2>
            </div>
        </>
    );
}

export default Search;
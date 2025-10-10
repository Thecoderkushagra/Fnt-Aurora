const Search = () => { 
    return (
        <>
            <style>
                {`.search-input::placeholder {color: #828282ff; opacity: 1;}`}
            </style>
            <div className="d-flex justify-content-center" 
            style={{color:"white", marginTop: '15px', padding: '40px 60px' }}>
                <input className="form-control search-input"
                type="text" 
                placeholder="Search for Movies, series, Animes..."
                style={{
                    border:"2px solid #007bffff", 
                    backgroundColor:"#212529", 
                    color: "white",
                    height: "50px", 
                    width: "65%", 
                    paddingLeft: "20px"
                }} 
                />               
            </div>
            <div className="container" style ={{color:"white", marginTop: '15px', padding: '0px 200px'}}>
                <h2>Recent Serches</h2>
            </div>
        </>
    );
}

export default Search;
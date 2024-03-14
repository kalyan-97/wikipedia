import React,{useState,useEffect} from "react";
import "./App.css";

const App = () => {

  const [searchItem,setSearchItem] = useState([])
  const [search,setSearch] = useState("google")
  
  const getFetchedItems = async() => {
        const response = await fetch(`https://apis.ccbp.in/wiki-search?search=${search}`);
        const data = await response.json();
        //console.log(data.search_results)
        setSearchItem(data.search_results)
  }

  useEffect(() =>{
      getFetchedItems()
  },[search])

  const handleSearch = (e) =>{
      e.preventDefault();
      setSearch(e.target.value);
  }

  console.log(searchItem)

  return(
    <section>
      <div className="top-container">
        <img 
        className="logo"
        alt="logo"
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png" />
        <br/>
        <div className="input-container"> 
        <input onChange={handleSearch}  placeholder="search" type="text"/>
        <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <hr/>
      {
        searchItem.map((x) =>{
          const {title,link,description} = x;
          return(
            <div className="result-container">
              <a className="title" href="link" target="_blank"> {title} </a> <br/>
              <a className="link" href="link" target="_blank"> {link} </a>
              <p className="description"> {description} </p>
            </div>
          )
        })
      }
    </section>
  )
}

export default App;
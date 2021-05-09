import './App.css';
import Recipe from './Recipe'
import { useEffect, useState } from 'react';

const App = () => {
  const APP_ID = '21c32d65';
  const APP_KEY = 'ceafebf07abc57b689634c3f56f6b66a';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        cuisine={recipe.recipe.cuisineType} 
        image={recipe.recipe.image}
        time={recipe.recipe.totalTime}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
    
}

export default App;

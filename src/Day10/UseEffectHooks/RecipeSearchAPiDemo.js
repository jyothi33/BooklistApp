//API_ID = 055e95c1;
//API_KEYS = 9f0a585810011ee9289d14a42fdd3594	
//https://api.edamam.com/api/recipes/v2?type=public&q=cake&app_id=055e95c1&app_key=9f0a585810011ee9289d14a42fdd3594%09

import React, { useEffect, useState } from 'react'
import { Recipe } from './Recipe';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const RecipeSearchAPiDemo = () => {

    const [recipes, setRecipe] = useState([]);

    const [inputSearch, setInputSearch] = useState("");
    const [queryString, setQueryString] = useState("");

    const API_ID = '055e95c1';
    const API_KEY = '9f0a585810011ee9289d14a42fdd3594';

    useEffect(() => {
            const getRecipe = async () => {
                const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${queryString}&app_id=${API_ID}&app_key=${API_KEY}%09`).then(
                    (res) => {
                        return res.json()
                    })
                    setRecipe(response.hits);            
            }  
            getRecipe();   
    }, [queryString])

    const submitHandler = (e) => {
        //Get teh input query string and set inputSearch
        e.preventDefault();
        setQueryString(inputSearch);
        setInputSearch("");
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Recipe Search App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
            <form onSubmit={submitHandler}>
            <input type="text" value={inputSearch} onChange={ (e) => setInputSearch(e.target.value)}></input>
            <button type="submit">Search</button>
            </form>

            {recipes && recipes.map( 

                (rec) => <Recipe recipe= {rec.recipe}/>
            )}
        </div>
    )
}

export default RecipeSearchAPiDemo

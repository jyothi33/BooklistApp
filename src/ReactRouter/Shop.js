import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Shop = () => {


    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        fetchFortNightItems();
    }, [])

    const fetchFortNightItems = async () => {

        const response = await fetch(`https://fortnite-api.theapinetwork.com/store/get`);
        const data = await response.json();
        console.log(data.data)
        setGameData(data.data)
    }

    return (
        <div>
            Shop Component
            {
                gameData && gameData.map( (game) => <Link to={`/detail/${game.itemId}`}><h1 key={game.itemId}>{game.item.name}</h1></Link>)
            }
        </div>
    )
}

export default Shop

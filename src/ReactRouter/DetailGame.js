import { lightBlue } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate , useLocation} from 'react-router'

const DetailGame = () => {

    const [gameData, setGameData] = useState();

    const {itemid} = useParams();

    const navigate = useNavigate();

    const location = useLocation();
    console.log(location.pathname)

    const getDetailGame = async () => {
        const res = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${itemid}`);

        const data = await res.json();

        setGameData(data.data.item)
    }

    //https://fortnite-api.theapinetwork.com/item/get?id=5db96452-b486-49ae-9fd8-40a6331a074f

    useEffect(() => {
        getDetailGame();
    }, [])


    return (
        <div>
            <h1>Detail Game Page</h1>
            Description : {gameData && gameData.description}
            <br></br>
            <button onClick={ () => navigate(-1)}>Go Back</button>
            <br></br>
            {location.pathname}
            <img src={gameData && gameData.images.background}></img>
        </div>
    )
}

export default DetailGame

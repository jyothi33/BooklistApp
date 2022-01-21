import axios from 'axios';
import React from 'react';
import {useQuery} from 'react-query'


const UseQueryShop = () => {

    const {data, isError, error, isFetching} = useQuery('game', () => {
    const response = axios.get(`https://fortnite-api.theapinetwork.com/store/get?_limit=2&_page=2`)
    return response;
   
   })

   //console.log(data.data.data)

   //console.log(isError && error.message)

   console.log( isError , isFetching)
    return (
        <div>
            <h1> UseQuery Demo</h1>
            { data && data.data.data.map( game => <h1>{game.item.name}</h1>)}
            <h1>{ isError && error.message}</h1>
        </div>
    )
}

export default UseQueryShop

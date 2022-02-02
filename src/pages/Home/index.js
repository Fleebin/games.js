import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

export const Home = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        api.get("/games?key=b9ef1e48ead6447e94f27518a2c2f3e1")
            .then((response) => {
                setGames(response.data.results)
            })

    }, []);

    if (!games) {
        return null;
    }

    return (
        <>
            {games.map(({ name, background_image }) => (
                <li key={name}>
                    {name}
                    <img src={background_image} />
                </li>
            ))}
        </>
    );
}

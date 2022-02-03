import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from '../../services/api'
import Container from '@mui/material/Container';

export const Interna = () => {
    const [game, setGame] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        api.get(`/games/${id}?key=b9ef1e48ead6447e94f27518a2c2f3e1`)
            .then((response) => {
                setGame(response.data)
            })
    }, [id]);

    if (!game) {
        return null;
    }
    return (
        <Container>
            <div className="2A">
                <div className="flexA">
                    <h1>{game.name}</h1>
                    <img src={game.background_image} />
                    <p>{game.metacritic}</p>
                    <p>{game.description}</p>
                </div>
            </div>
        </Container>
    );
}

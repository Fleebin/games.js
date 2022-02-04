import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { api } from '../../services/api'
import Container from '@mui/material/Container';
import { useStyles } from './styles';

export const Interna = () => {
    const [game, setGame] = useState(null);
    const { id } = useParams();
    const classes = useStyles();

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
            <div className={classes.flex}>
                <img className={classes.img} src={game.background_image} />

                <div className={classes.column}>
                    <h1 className={classes.title}>{game.name}</h1>
                    <div className={classes.column}>
                        <h1 className={classes.sub}> Gêneros:</h1>
                        {game.genres.map((genre) => (
                            <p key={genre.id}>{genre.name}</p>
                        ))}
                    </div>

                    <div className={classes.column}>
                        <h1 className={classes.sub}>Desenvolvedora:</h1>
                        {game.developers.map((dev) => (
                            <p key={dev.id}>{dev.name}</p>
                        ))}
                    </div>
                    <div className={classes.column}>
                        <h1 className={classes.sub}>Plataformas:</h1>
                        {game.platforms.map((item) => (
                            <p key={item.id}>{item.platform.name}</p>
                        ))}
                    </div>
                </div>
            </div>

        </Container>
    );
}

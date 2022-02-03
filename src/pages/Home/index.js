import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

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
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'grid',
                    columnGap: 4,
                    rowGap: 3,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}
            >
                {games.map((game) => (
                    <Card sx={{ maxWidth: 345 }} key={game.id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={game.background_image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link to={`/interna/${game.id}`}>
                                        {game.name}
                                    </Link>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Container >
    );
}

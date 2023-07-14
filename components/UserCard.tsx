'use client'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { signOut } from "next-auth/react";

interface IUserCard {
    email: string
    image: string
    name: string
}

export default function UserCard({ email, image, name } : IUserCard) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="body2" color="text.primary">
                    Email: {email}
                </Typography>
            </CardActions>
            <Button onClick={() => signOut()}>Sign out</Button>
        </Card>
    )
}

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
            <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                    sx={{ height: 180, backgroundSize: "contain" }}
                    image={image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography variant='h4' gutterBottom>
                        Welcome to profile
                    </Typography>
                    <Typography variant="h5" component="div">
                        User info
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Name - {name}
                    </Typography>
                    <Typography variant="body1">
                        Contacts:
                        <br />
                        Email - {email}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => signOut()}>Sign out</Button>
                </CardActions>
            </Card>
    )
}

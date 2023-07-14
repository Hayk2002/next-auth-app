import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import {getSession, signIn} from "next-auth/react";
import {Box} from "@mui/material";

export default function SignIn() {
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Not Signed in
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => signIn()}>Sign in</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: { session }
    }
}

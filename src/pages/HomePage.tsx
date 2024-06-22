import { Box, Card, Typography } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";

export default function HomePage() {

    return (
        <>
            <NavBar />
            <Box sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

            }}>
                <Card sx={{
                    width: "100%",
                    height: "100vh",
                }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url(../../picture1.webp)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: "blur(5px)",
                        }}
                    >
                        {/* <CardMedia
                            component="img"
                            image="../../picture1.webp"
                            alt="my pic"
                            sx={{
                                width: '100%',
                                height: '100%',
                                filter: 'blur(2px)',
                            }}
                        /> */}
                    </Box>
                </Card>
                <Typography
                    variant="h1"
                    component="h1"
                    style={{
                        fontSize: "3rem",
                        fontWeight: "300",
                        marginBottom: "1rem",
                        position: "absolute",
                        transform: "translate(-50 %, -50 %)",
                        color: "white",
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                    }}
                >
                    We build PCs for you
                </Typography>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: "1.5rem",
                        color: "white",
                        marginTop: "4rem",
                        position: "absolute",
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                    }}
                >
                    All you gotta do is use our interactive tool to build pc, pay and we build it for you
                </Typography>

            </Box >
        </>

    )
}
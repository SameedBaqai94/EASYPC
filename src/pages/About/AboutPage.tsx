import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import { useInView } from "react-intersection-observer";
import "./AboutPage.css";

export default function AboutPage() {
    const { ref: boxRef, inView: boxInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })


    return (
        <>
            <NavBar />
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    scrollBehavior: "smooth"
                }}
            >
                <Box
                    sx={{
                        height: "30vh",
                        width: "40vw",
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Typography
                        component="p"
                        variant="h4"
                        sx={{
                            width: "100%",
                            textAlign: "center",
                            padding: 2,
                            fontFamily: 'Roboto, Arial, sans-serif',
                            fontWeight: 300,
                            mb: 2
                        }}
                    >
                        Who are we?
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            component="p"
                            sx={{
                                fontSize: "1rem",
                                fontWeight: "300",
                                marginBottom: "1rem",
                                maxWidth: "300px",
                                textAlign: 'center',
                            }}
                        >
                            Hi, welcome to EasyPC. I am Sameed Baqai, the owner of this company. I am an enthusiastic computer guy with an actual degree in Computer Science.
                        </Typography>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="../../me.jpg"
                                alt="my pic"
                            />
                        </Card>
                    </Box>
                </Box>
            </Box>
            <Box
                id="section2"
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#d8d8d8",
                    scrollBehavior: "smooth"
                }}
            >
                <Box
                    ref={boxRef}
                    className={boxInView ? 'pop-in' : ''}
                    sx={{
                        height: "30vh",
                        width: "60vw",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={4} md={4} textAlign="center" sx={{

                        }}>
                            <img src="../../list.svg" alt="Make a List" style={{ width: '100px', height: '100px' }} />
                            <Typography component="p" >Build Your PC</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} textAlign="center">
                            <img src="../../cc.svg" alt="Pay" style={{ width: '100px', height: '100px' }} />
                            <Typography component="p">Pay For It</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} textAlign="center">
                            <img src="../../tool.svg" alt="Build it" style={{ width: '100px', height: '100px' }} />
                            <Typography component="p">We Build It</Typography>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </>
    );
}

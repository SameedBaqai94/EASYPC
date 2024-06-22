import { Box, Button, Typography } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

export default function RouteErrorPage() {
    return (
        <>
            <NavBar />
            <Box sx={{
                height: "85vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography
                    variant="h1"
                    component="h1"
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "300",
                        marginBottom: "1rem",
                    }}
                >
                    Error 404! Page Not Found
                </Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem"
                }}>
                    <Link to="/"><Button>Home</Button></Link>
                </Box>
            </Box >

        </>
    )
}
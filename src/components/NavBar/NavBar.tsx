import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Box sx={{
            flexGrow: 1,
        }}>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "white",
                    color: "#36454F"
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'inherit'
                        }}>
                        EasyPC
                    </Typography>
                    <Button
                        component={Link}
                        to="/"
                        color="inherit"
                    >
                        Home
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        color="inherit"
                    >
                        About
                    </Button>
                    <Button
                        component={Link}
                        to="/build"
                        color="inherit"
                    >
                        Build
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
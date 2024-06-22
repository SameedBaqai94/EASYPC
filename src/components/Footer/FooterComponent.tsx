import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function FooterComponent() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Footer
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
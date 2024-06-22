import { Box } from "@mui/material";
import PcListComponent from "../../components/PcList/PcListComponent";
import NavBar from "../../components/NavBar/NavBar";


export default function BuildPcPage() {
    return (
        <>
            <NavBar />
            <Box sx={{
                height: "92vh",
                backgroundColor: "lightblue",
                display: "flex",
                flexDirection: "column",
                padding: 20,
                marginTop: "64px",
            }}>
                <PcListComponent />
            </Box>
        </>
    )
}
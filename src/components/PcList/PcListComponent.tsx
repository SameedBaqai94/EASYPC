import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const PARTS_NAME = ["CPU", "GPU", "MOTHERBOARD", "PSU", "RAM"];

interface TextFieldInterface {
    id: number;
}

export default function PcListComponent() {
    const [textFields, setTextFields] = useState<TextFieldInterface[]>([{ id: 0 }]);

    const addTextField = () => {
        setTextFields([...textFields, { id: textFields.length }]);
    }

    return (
        textFields.length < 6 && textFields.map((txtFields, index) => (
            <Box
                key={txtFields.id}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: '100px',
                    maxWidth: '100px',
                    mr: 2
                }}>
                    <Typography component="p">{PARTS_NAME[index]}</Typography>
                </Box>
                <TextField
                    variant="outlined"
                    sx={{
                        minWidth: '300px',
                        maxWidth: '300px'
                    }}
                />
                {index + 1 < 5 && <Button sx={{
                    minWidth: '100px',
                    maxWidth: '150px',
                    fontSize: "10px",
                    ml: 10
                }} onClick={addTextField} variant="contained"> Add  {PARTS_NAME[index + 1]}</Button>}

            </Box>
        ))

    )
}
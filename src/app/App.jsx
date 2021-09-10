import FieldInput from "../components/FieldInput/FieldInput";
import TodosList from "../components/TodosList/TodosList";
import { Box, Grid } from "@material-ui/core";
import { sx } from "./styles";
import React from 'react';

const App = () => {
    return (
        <Box sx={sx}>
            <Grid container spacing={2}>
                <Grid item sx={{width: '100%'}}>
                    <FieldInput/>
                    <TodosList/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default App;

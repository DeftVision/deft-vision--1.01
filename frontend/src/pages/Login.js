import {Box, Button, Stack, TextField} from '@mui/material';

export default function Login () {
    return (
        <Box component="form">
            <Stack spacing={2}>
                <TextField
                    type="email"
                    id="email"
                    variant="standard"
                    name="email"
                    label="Email"
                />
                <TextField
                    sx={{width: '50char'}}
                    type="password"
                    id="password"
                    variant="standard"
                    name="password"
                    label="Password"
                />
                <Button variant="outlined">Login</Button>
            </Stack>
        </Box>
    );
};


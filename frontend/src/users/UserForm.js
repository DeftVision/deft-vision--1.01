import { Box, FormControlLabel, Switch, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {useState} from "react";

const form_default = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    location: '',
    active: true
}

export default function UserForm() {
    const [form, setForm] = useState(form_default);
    return (
        <Box>
            <Typography variant="body2" color="textSecondary">User Form</Typography>

            <Box component='form'>
                <TextField
                    type='text'
                    label='First Name'
                    id='firstName'
                    value={form.firstName}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        })
                    }}
                />
                <TextField
                    type='text'
                    label='Last Name'
                    id='lastName'
                    value={form.lastName}
                />
                <TextField
                    type='email'
                    label='Email'
                    id='email'
                    value={form.email}
                />
                <TextField
                    type='password'
                    label='Password'
                    id='password'
                    value={form.password}
                />
                <TextField
                    label='Role'
                    id='role'
                    value={form.role}
                />
                <TextField
                    label='Location'
                    id='location'
                    value={form.location}
                />

                <TextField
                    label="Active User"
                    id='activeUser'
                    value={form.active}
                />
                <Button>Save</Button>
                <Button component={Link} to='../users'>Cancel</Button>
            </Box>
        </Box>
    );
};


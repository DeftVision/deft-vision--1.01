import {Box, Button, Table, TableRow, TableCell, TableHead, TableBody, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';






export default function Users () {
    const [users, setUsers] = useState([]);

    useEffect(() => {

    }, []);
    return (
        <Box>
            <Button component={Link} to='/user-form'>Add New User</Button>
            <Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
};


import {Box, Container, Toolbar} from '@mui/material';
import {Home, Login} from './pages/index'
import {Users, UserForm} from './users/index'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom';
import {useEffect, useState} from "react";
import { lightTheme, darkTheme } from './utilities/theme'
import {ThemeProvider} from "@mui/system";

function App() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };


    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Navbar toggleTheme={toggleTheme} theme={theme}/>
                <div className="App">
                    <Toolbar/>
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path='/user-form' element={<UserForm/>}/>
                            <Route path='/users' element={<Users/>}/>
                        </Routes>
                    </Container>
                </div>

            </Box>
        </ThemeProvider>
    );
}

export default App;

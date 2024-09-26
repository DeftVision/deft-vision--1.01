import {styled} from '@mui/material/styles';
import {
    Box,
    Collapse,
    CssBaseline,
    Divider,
    Drawer,
    FormControlLabel,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
    Toolbar,
    Typography
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import {
    AdminPanelSettings,
    AssignmentSharp,
    Brightness1,
    Campaign,
    ChevronLeft,
    ExpandLess,
    ExpandMore,
    Home,
    Leaderboard,
    Logout,
    Menu,
    Person,
    WbSunny,
} from '@mui/icons-material';
//import cookies from 'js-cookie';
import {Link} from 'react-router-dom';
import {useContext, useState} from 'react';
//import {UserContext} from "../utility";

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Navbar({toggleTheme, theme}) {
    const [open, setOpen] = useState(false);
    const [adminOpen, setAdminOpen] = useState(false); // State for toggling the Admin list
    //const {user, setUser} = useContext(UserContext);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleAdminClick = () => {
        setAdminOpen(!adminOpen);
    };

    /*function logout() {
        setUser(null);
        cookies.remove("userCookie");
    }*/

        return (
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{mr: 2, ...(open && {display: 'none'})}}
                        >
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Version 1.0
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? "" : <ChevronLeft/>}
                        </IconButton>
                    </DrawerHeader>
                    <Divider/>
                    <List sx={{textAlign: 'end'}}>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/">
                                <ListItemIcon><Home/></ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>
                        {/*<ListItem disablePadding>
                            <ListItemButton component={Link} to="/document-overview">
                                <ListItemIcon><AssignmentSharp/></ListItemIcon>
                                <ListItemText primary="Documents"/>
                            </ListItemButton>
                        </ListItem>*/}

                        {/*<ListItem disablePadding>
                            <ListItemButton component={Link} to="/template-form">
                                <ListItemIcon><AssignmentSharp/></ListItemIcon>
                                <ListItemText primary="Custom Form"/>
                            </ListItemButton>
                        </ListItem>*/}

                        {/*<ListItem disablePadding>
                            <ListItemButton component={Link} to="/templates">
                                <ListItemIcon><AssignmentSharp/></ListItemIcon>
                                <ListItemText primary="Form List"/>
                            </ListItemButton>
                        </ListItem>*/}

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/users">
                                <ListItemIcon><Person/></ListItemIcon>
                                <ListItemText primary="Users"/>
                            </ListItemButton>
                        </ListItem>

                        {/* Admin section */}
                            {/*<ListItem disablePadding>
                                <ListItemButton onClick={handleAdminClick}>
                                    <ListItemIcon><AdminPanelSettings/></ListItemIcon>
                                    <ListItemText primary="Admin"/>
                                    {adminOpen ? <ExpandLess/> : <ExpandMore/>}
                                </ListItemButton>
                            </ListItem>*/}
                        <Collapse in={adminOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding sx={{pl: 4}}>
                                {/*<ListItem disablePadding>
                                    <ListItemButton component={Link} to="/documents">
                                        <ListItemIcon><AssignmentSharp/></ListItemIcon>
                                        <ListItemText primary="Docs & Forms"/>
                                    </ListItemButton>
                                </ListItem>*/}
                                {/*<ListItem disablePadding>
                                    <ListItemButton component={Link} to="/evaluations">
                                        <ListItemIcon><Leaderboard/></ListItemIcon>
                                        <ListItemText primary="Evaluations"/>
                                    </ListItemButton>
                                </ListItem>*/}
                                {/*<ListItem disablePadding>
                                    <ListItemButton component={Link} to="/announcements">
                                        <ListItemIcon><Campaign/></ListItemIcon>
                                        <ListItemText primary="Announcements"/>
                                    </ListItemButton>
                                </ListItem>*/}
                            </List>
                        </Collapse>

                            {/*<ListItem disablePadding>
                                <ListItemButton onClick={logout}>
                                    <ListItemIcon><Logout/></ListItemIcon>
                                    <ListItemText primary="Logout"/>
                                </ListItemButton>
                            </ListItem>*/}

                        <ListItem>
                            <FormControlLabel
                                control={<Switch
                                    checked={theme === 'dark'}
                                    onChange={toggleTheme}
                                    icon={<Brightness1/>}
                                    checkedIcon={<WbSunny/>}
                                />}
                                label="Mode"
                            />
                        </ListItem>
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader/>
                </Main>
            </Box>
        );
}


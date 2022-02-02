import React, { useContext } from "react";
import Auth from "../../utils/auth";
import useStyles from "./styles";
import { AppBar, Toolbar, IconButton, Badge, Box, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from "../../StateProvider";
import "./style.css";
const pages = ['Products', 'Profile'];
const pages2 = ['Login', 'SignUp']

function Navbar() {
    const classes = useStyles();
    const [{ cart }, dispatch] = useStateValue();

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'space-evenly' }}>
                        {pages.map((page) => (
                            <Link
                                className={classes.link}
                                to={"/" + page.toLowerCase()}
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                {page}
                            </Link>
                        ))}
                        <div>
                            <a href="/" onClick={() => Auth.logout()}>
                                Logout
                            </a>
                        </div>
                    </Box>
            )
        } else {
            return (
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'space-evenly' }}>
                        {pages2.map((page) => (
                            <Link
                                className={classes.link}
                                to={"/" + page.toLowerCase()}
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                {page}
                            </Link>
                        ))}
                    </Box>
            )
        }
    }
    return (
        <>
            <AppBar position="sticky" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={1} alt="" className={classes.image} />
                        <Link to="/">
                            <span className='font-link'>goghbuy</span>
                        </Link>
                    </Typography>
                    {showNavigation()}
                    <Link to="/cart">
                        <div>
                            <IconButton aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={cart?.length} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navbar;
import React from "react";
import Auth from "../../utils/auth";
import useStyles from "./styles";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

function Navbar() {
    function showNavigation() {
        if (Auth.loggedIn) {
            return (
                <>

                </>
            )
        } else {
            <>
              
            </>
        }
    }
    const classes = useStyles();
    
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={1} alt="" height="25px" className={classes.image} />
                        goughbuy
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navbar;
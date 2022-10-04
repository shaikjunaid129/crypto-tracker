import { AppBar, Tab, Tabs, Toolbar, Typography, Button } from '@material-ui/core'
import React from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';


function Navbar() {
    return (
        <>
            <AppBar position='sticky'>
                <Toolbar>
                    <CurrencyBitcoinIcon />
                    <Typography> CryptoTracker</Typography>
                    <Tabs textColor='white'>
                        <Tab href='/home' label="Home"></Tab>
                        <Tab href='/currencies' label="Currencies"></Tab>
                        <Tab href='/news' label="News"></Tab>
                        <Tab href='/contactus' label="Contact us"></Tab>
                    </Tabs>

                    <Button 
                    variant='contained' 
                    style = {{marginLeft: 'auto'}}
                    href = '/'
                    >
                        logout      
                    </Button>
                </Toolbar>

            </AppBar>

        </>
    )
}

export default Navbar
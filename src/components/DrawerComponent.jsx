import { Box, Drawer, IconButton, List, ListItemButton, ListItemText, useMediaQuery } from '@mui/material'
import React, { useState } from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import Logo from '../assets/logo-fabi-sussuarana.svg';

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box bgcolor='background.default' height={'100%'}>
                    <img src={Logo} width={250} />
                    <List>
                        <ListItemButton>   
                            <ListItemText color={'text.primary'}>Home</ListItemText>
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
                <img src={Logo} width={250} />
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <MenuRoundedIcon sx={{ color: '#fff' }}/>
                </IconButton>
            </Box>
        </React.Fragment>
    )
}

export default DrawerComponent

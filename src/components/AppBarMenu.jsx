import { AppBar, Box, Button, Container, Tab, Tabs, Toolbar, useMediaQuery,  } from '@mui/material';
import React, { useState } from 'react';

import FileDownloadIcon from '@mui/icons-material/FileDownload';

import Logo from '../assets/logo-fabi-sussuarana.svg';

const AppBarMenu = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);

      const sections = ['home', 'sobre', 'tecnologias', 'projetos', 'contato'];
        const sectionId = sections[newValue];
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <React.Fragment>
            <AppBar sx={{ background: 'transparent', boxShadow: 'none' }}>
                <Container>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBlock: '10px',
                        }}
                    >
                        <Box>
                            <img src={Logo} width={250} />
                        </Box>
                        <Tabs
                            textColor='text.primary'
                            value={value}
                            onChange={handleChange}
                        >
                            <Tab label="Home"></Tab>
                            <Tab label="Sobre Mim"></Tab>
                            <Tab label="Tecnologias"></Tab>
                            <Tab label="Projetos"></Tab>
                            <Tab label="Contato"></Tab>
                        </Tabs>
                        <Button variant="contained"
                            sx={{
                                height: '50px',
                                bgcolor: 'primary',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                }
                            }}>
                            <FileDownloadIcon />
                            Download CV
                        </Button>
                    </Toolbar>
                </Container>
                
            </AppBar>
        </React.Fragment>
    )
}

export default AppBarMenu
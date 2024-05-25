import { Box, Container, Link, ListItemButton, ListItemText, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react';

import FileDownloadIcon from '@mui/icons-material/FileDownload';

import Logo from '../assets/logo.svg';
import LetrasBg from '../assets/letras-bg.svg';
import FabiComTexto from '../assets/img-com-texto-fabi.png';

const Home = () => {
  return (
    <div>
      <Box sx={{ bgcolor: '#040C19', }}>
        <Box sx={{
          backgroundImage: `url(${LetrasBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          height: "100vh",
        }}>
          <Container sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '70%',
          }}>
            <Box>
              {/* header */}
              <Box sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems: 'center',
                paddingBlock: '10px',
                }}>
                <Box>
                  <img src={Logo} width={100}/>
                </Box>
                <List sx={{
                  display: 'flex',
                  gap: 2,
                  color: '#fff',
                }}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ borderRadius: '50px', border: '1px solid #A73200' }}>
                      <Link href="#" 
                      sx={{ 
                        textDecoration: 'none', 
                        color: '#fff', 
                        display: 'flex', 
                        justifyContent: 'center' 
                        }}>
                        <ListItemText primary="Home"/>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Sobre Mim"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Tecnologias"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Projetos"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Contato"/>
                    </ListItemButton>
                  </ListItem>
                </List>
                <Button variant="contained" 
                sx={{ 
                  height: '50px', 
                  bgcolor: '#A73200',
                  '&:hover': {
                    bgcolor: '#972D00',
                  } 
                  }}>
                  <FileDownloadIcon/>
                  Download CV</Button>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={FabiComTexto} style={{ width: '80%' }}/>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  )
}

export default Home;
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

import AppBarMenu from '../components/AppBarMenu';

import LetrasBg from '../assets/letras-bg.svg';
import FabiComTexto from '../assets/img-com-texto-fabi.png';
import FotoSecao2 from '../assets/foto-2.png';
import { useTheme } from '@mui/material/styles';
import DrawerComponent from '../components/DrawerComponent';

const Home = () => {
  const theme = useTheme();
  const mediaQueryMD = useMediaQuery(theme.breakpoints.down('md'));
  const mediaQueryLG = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div>
      <Box>
        <Box 
        bgcolor='background.default'
        sx={{
          backgroundImage: `url(${LetrasBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backdropFilter: blur('10px'),
          zIndex: 1000,
        }}>
          <Container>
            {/* header */}
            {
              mediaQueryLG ? (
                <>
                  <DrawerComponent></DrawerComponent>
                </>
              ) : (
                <>
                  <AppBarMenu></AppBarMenu>
                </>
              )
            }

            {/* seção 1 */}
            <div id='home'>
              <Box
                sx={{
                  height: mediaQueryMD ? '70vh' : '100vh',
                  backgroundImage: `url(${FabiComTexto})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                }}
              >
              </Box>
            </div>
            <div id='sobre'>
              <Box
                sx={{
                  height: '100vh',
                  display: 'flex',
                  flexDirection: mediaQueryMD ? 'column-reverse' : 'row',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <Box sx={{ width: mediaQueryMD ? '100%' : '50%' }}>
                  <img src={FotoSecao2} width='100%'/>
                </Box>
                <Box sx={{ width: mediaQueryMD ? '100%' : '50%' }}>
                  <Box>
                    <Typography variant="h2" color={'primary'}>
                      Sobre Mim
                    </Typography>
                    <Typography variant="h5" color={'text.primary'} marginTop={2}>
                      Olá, me chamo Fabiana Sussuarana, sou desenvolvedora full-stack e UI/UX designer. Me inseri no mundo da TI - Tecnologia da Informação - há 4 anos atrás e busco desde então exercer cada vez melhor minhas habilidades.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h2" color={'primary'} marginTop={3}>
                      Formações
                    </Typography>
                    <Box color={'text.primary'} marginTop={2}>
                      <Typography>Técnica em Informática para internet - IFAC</Typography>
                      <Typography color='#9E9E9E'>2021 - 2023</Typography>
                    </Box>
                    <Box color={'text.primary'} marginTop={1}>
                      <Typography>WebAcademy - Capacitação em desenvolvimento full stack da Motorola - UFAC</Typography>
                      <Typography color='#9E9E9E'>2022 - 2023</Typography>
                    </Box>
                    <Box color={'text.primary'} marginTop={1}>
                      <Typography>Sistemas de Informação - Uninorte</Typography>
                      <Typography color='#9E9E9E'>2023 - cursando</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </div>
            <div id='tecnologias'>
              <Box
                sx={{
                  height: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <Box>
                  icon html
                  icon css
                  ...
                </Box>
              </Box>
            </div>
            <div id='projetos'>

            </div>
            <div id='contato'>

            </div>
          </Container>
        </Box>
      </Box>
    </div>
  )
}

export default Home;
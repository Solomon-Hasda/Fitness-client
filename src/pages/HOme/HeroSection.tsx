import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/products');
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '80vh',
        backgroundImage: 'url(https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
            <Grid item xs={12} md={8}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                  Welcome to Modern Fitness
                </Typography>
                <Typography variant="h5" component="p" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
                  Discover the best fitness equipment and accessories for a healthier lifestyle.
                </Typography>
                <Button variant="contained" color="primary" size="large" sx={{ marginTop: 2 }} onClick={handleShopNowClick}>
                  Shop Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;

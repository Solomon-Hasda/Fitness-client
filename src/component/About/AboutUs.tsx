
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const AboutUs = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
        At Modern Fitness, we're passionate about empowering individuals to achieve their health and fitness goals. Founded with a vision to revolutionize the fitness industry, we aim to provide high-quality fitness equipment and accessories that inspire an active lifestyle. Our commitment extends beyond just selling products; we strive to create a community where fitness enthusiasts of all levels can find support, guidance, and motivation.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
            Our mission is to make fitness accessible to everyone. We believe that a healthy lifestyle should be enjoyable and sustainable. Through our curated selection of premium fitness products, personalized customer service, and community engagement, we aim to foster a culture of wellness and inspire positive changes in people's lives. Whether you're a beginner or a seasoned athlete, Modern Fitness is here to support you on your fitness journey.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography>123 Fitness Street, Fitness Town, Dhaka</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography>+88 234 567 890</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography>info@modernfitness.com</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;

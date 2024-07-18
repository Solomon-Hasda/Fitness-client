import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: grey[900],
        color: 'white',
        py: 5,
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Contact Us */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Address: 123 Fitness Street, Fitness Town, Dhaka
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone: +88 234 567 8901
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: info@modernfitness.com
            </Typography>
          </Grid>

   
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <div className="d-flex justify-content-center">
              <Link href="https://www.facebook.com/profile.php?id=100081675172817" color="inherit" variant="body2" sx={{ color: 'white', mr: 2 }}>
                <FacebookIcon sx={{ fontSize: 32 }} />
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ color: 'white', mr: 2 }}>
                <TwitterIcon sx={{ fontSize: 32 }} />
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ color: 'white', mr: 2 }}>
                <InstagramIcon sx={{ fontSize: 32 }} />
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ color: 'white' }}>
                <LinkedInIcon sx={{ fontSize: 32 }} />
              </Link>
            </div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Link href="#" color="inherit" variant="body2">About Us</Link>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Link href="#" color="inherit" variant="body2">Products</Link>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Link href="#" color="inherit" variant="body2">Terms of Service</Link>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Link href="#" color="inherit" variant="body2">Privacy Policy</Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography variant="body2" align="center" mt={4}>
          &copy; {new Date().getFullYear()} Modern Fitness. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

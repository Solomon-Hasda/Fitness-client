import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Sample image data
const images = [
  {
    url: 'https://images.pexels.com/photos/7689289/pexels-photo-7689289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Success is usually the culmination of controlling failure',
  },
  {
    url: 'https://images.pexels.com/photos/6998744/pexels-photo-6998744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'The only bad workout is the one that didn\'t happen',
  },
  {
    url: 'https://images.pexels.com/photos/7674484/pexels-photo-7674484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Don\'t stop when you\'re tired. Stop when you\'re done',
  },
  {
    url: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Achieve greatness with every workout',
  },
  {
    url: 'https://images.pexels.com/photos/4164640/pexels-photo-4164640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Push your limits and break through barriers',
  },
  {
    url: 'https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg',
    caption: 'Strive for progress, not perfection',
  },
  {
    url: 'https://images.pexels.com/photos/17895203/pexels-photo-17895203/free-photo-of-young-muscular-man-lifting-weights-in-the-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Strength comes from overcoming challenges',
  },
  {
    url: 'https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Believe in yourself and you will be unstoppable',
  },
  {
    url: 'https://images.pexels.com/photos/2475875/pexels-photo-2475875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Fitness is not about being better than someone else, it\'s about being better than you used to be',
  },
];

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className="p-5">
      <Typography variant="h4" gutterBottom>
        Image Gallery
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              className="p-2"
              style={{
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                transition: 'transform 0.3s ease',
                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.url}
                alt={`Image ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
              {hoveredIndex === index && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: '1rem',
                  }}
                >
                  {image.caption}
                </div>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ImageGallery;

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


interface Benefit {
  id: number;
  title: string;
  description: string;
  image: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Improved Fitness',
    description: 'Enhance your fitness levels with our high-quality equipment designed for optimal performance.',
    image: 'https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Health Benefits',
    description: 'Experience the health benefits of regular exercise with our range of fitness products. Health is wealth',
    image: 'https://images.pexels.com/photos/1089144/pexels-photo-1089144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Convenience',
    description: 'Enjoy the convenience of exercising at home with our easy-to-use and space-saving equipment.',
    image: 'https://images.pexels.com/photos/347134/pexels-photo-347134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <div className="p-5">
      <Typography variant="h4" gutterBottom>
        Benefits of Using Our Products
      </Typography>
      <Grid container spacing={3}>
        {benefits.map((benefit) => (
          <Grid item xs={12} md={4} key={benefit.id}>
            <Paper elevation={3} className="p-3 text-center">
              <img src={benefit.image} alt={benefit.title} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
              <Typography variant="h6" gutterBottom>
                {benefit.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {benefit.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BenefitsSection;

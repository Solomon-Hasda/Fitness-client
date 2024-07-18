
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Sample category data
const categories = [
  { id: 1, name: 'Treadmills', image: 'https://images.pexels.com/photos/13896072/pexels-photo-13896072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/products?category=1' },
  { id: 2, name: 'Weights', image: 'https://images.pexels.com/photos/4853698/pexels-photo-4853698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, name: 'Yoga Mats', image: 'https://images.pexels.com/photos/7500325/pexels-photo-7500325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/products?category=3' },
  { id: 4, name: 'Exercise Bikes', image: 'https://images.pexels.com/photos/8612471/pexels-photo-8612471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/products?category=4' },
];

const CategorySection = () => {
  return (
    <div className="p-5">
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <Paper elevation={3} className="p-3 text-center" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <a href={category.link} className="text-decoration-none" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src={category.image} alt={category.name} style={{ width: '80%', maxWidth: '100%', height: 'auto' }} />
              </a>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '1rem', textAlign: 'center' }}>
                {category.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategorySection;

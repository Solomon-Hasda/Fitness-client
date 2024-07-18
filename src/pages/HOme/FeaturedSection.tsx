
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Sample product data
const products = [
  { id: 1, name: 'Treadmill', image: 'https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$599.99', link: '/product/1' },
  { id: 2, name: 'Weights Set', image: 'https://images.pexels.com/photos/6740821/pexels-photo-6740821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$129.99', link: '/product/2' },
  { id: 3, name: 'Yoga Mat', image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$29.99', link: '/product/3' },
];

const FeaturedProducts = () => {
  return (
    <div className="p-5">
      <Typography variant="h4" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Paper elevation={3} className="p-3 text-center">
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
              <Typography variant="h6" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Price: {product.price}
              </Typography>
              <Button variant="contained" color="primary" href={product.link} className="mr-2">
                View Details
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <div className="mt-4 text-center">
        <Button variant="contained" color="primary" href="/products">
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProducts;

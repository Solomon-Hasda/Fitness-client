
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TProduct } from '@/Types/types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: TProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        textAlign: 'center',
        width: '100%',
        mt: 4,
      }}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
      />
      <Typography variant="h6" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Price: ${product.price.toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/product/${product._id}`}
        sx={{ mr: 2 }}
      >
        View Details
      </Button>
    </Paper>
  );
};

export default ProductCard;

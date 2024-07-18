
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import { TProduct } from '@/Types/types';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { addToCart } from '@/redux/cartSlice';
import { toast } from 'sonner';

interface ProductDetailsCardProps {
  product: TProduct;
}

const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = cartItems.find((item) => item.product._id === product._id);
      if (cartItem) {
        if (cartItem.quantity < product.countInStock) {
          dispatch(addToCart(product));
          toast.success('Product added to the cart' , { duration: 1000 });
        }
      } else {
        dispatch(addToCart(product));
        toast.success('Product added to the cart', { duration: 1000 });
      }
    }
  };

  const isInCart = cartItems.some((item) => item.product._id === product?._id);
  const cartItem = cartItems.find((item) => item.product._id === product?._id);
  const isAddToCartDisabled = cartItem && cartItem.quantity >= product?.countInStock;

  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <CardMedia
        component="img"
        sx={{ width: { xs: '100%', md: 300 } }}
        image={product.imageUrl}
        alt={product.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            ${product.price}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Category: {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock: {product.countInStock}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
            disabled={isAddToCartDisabled}
            sx={{ mt: 2 }}
          >
            {isInCart ? 'Add More' : 'Add to Cart'}
          </Button>
          {isAddToCartDisabled && (
            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
              Cannot add more, stock limit reached
            </Typography>
          )}
        </CardContent>
      </Box>
    </Card>
  );
};

export default ProductDetailsCard;

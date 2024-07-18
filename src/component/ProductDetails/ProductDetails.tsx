
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { useGetProductByIdQuery } from '@/redux/api/baseApi';
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data , error, isLoading } = useGetProductByIdQuery(id);
    const product  = data?.data
  if (isLoading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  if (error || !product) {
    return <Typography variant="h5">Error loading product details or product not found.</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <ProductDetailsCard product={product} />
    </Container>
  );
};

export default ProductDetails;

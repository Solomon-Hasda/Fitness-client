import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { useCreateProductMutation } from '@/redux/api/baseApi';
import { toast } from 'sonner';

const ProductManagement: React.FC = () => {
  const [createProduct] = useCreateProductMutation();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleCreate = async () => {
    try {
      await createProduct({ name, title, description, price: parseFloat(price), category, countInStock: parseInt(countInStock), imageUrl });
      toast.success(`Product created successfully`)
      clearFormFields();
    } catch (err) {
      console.error('Failed to create product:', err);
    }
  };

  const clearFormFields = () => {
    setName('');
    setTitle('');
    setDescription('');
    setPrice('');
    setCategory('');
    setCountInStock('');
    setImageUrl('');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Product Management
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Create Product
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Count in Stock"
                type="number"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutline />}
            onClick={handleCreate}
            sx={{ mt: 2 }}
          >
            Create Product
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProductManagement;

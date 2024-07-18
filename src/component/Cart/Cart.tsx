import React, { useState } from 'react';
import { useAppSelector } from '@/redux/hooks/hooks';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toast } from 'sonner';


const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalCost = cartItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleBuyNow = () => {
    handleOpenModal();
  };

  const handleConfirmAction = () => {
    handleCloseModal();
  
    toast.success(`Product created successfully`, {duration: 2000});
  };


  const handleCancelAction = () => {
    handleCloseModal();
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart <ShoppingCartIcon fontSize="large" />
      </Typography>
      <Box sx={{ boxShadow: 3, borderRadius: 8, padding: 2 }}>
        <List sx={{ width: '100%' }}>
          {cartItems.map((item) => (
            <ListItem key={item.product._id} sx={{ mb: 2, border: '1px solid #ddd', borderRadius: 4 }}>
              <Grid container alignItems="center">
                <Grid item xs={3} sm={2}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      alt={item.product.name}
                      src={item.product.imageUrl}
                      sx={{ width: 56, height: 56 }}
                    />
                  </ListItemAvatar>
                </Grid>
                <Grid item xs={6} sm={8}>
                  <ListItemText
                    primary={item.product.name}
                    secondary={`Quantity: ${item.quantity}`}
                    primaryTypographyProps={{ variant: 'subtitle1' }}
                    secondaryTypographyProps={{ variant: 'body2' }}
                  />
                </Grid>
                <Grid item xs={3} sm={2}>
                  <Typography variant="subtitle1">${(item.quantity * item.product.price).toFixed(2)}</Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Grid container justifyContent="flex-end" alignItems="center" sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom align="right">
              Total Cost:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom align="right">
              ${totalCost.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Button variant="contained" color="primary" fullWidth size="small" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </Box>


      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Confirm Purchase</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to proceed with the purchase?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelAction} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmAction} color="primary" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Cart;

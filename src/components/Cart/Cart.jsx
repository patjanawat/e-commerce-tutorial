import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from './styles'
import CartItem from './CartItem/CartItem'
import { Link } from "react-router-dom";

const Cart = ({ cart,onUpdateCartQty,onRemoveFromCart,onEmptyCart }) => {        
    const classes = useStyles()

    if (!cart.line_items) return 'Loading';
    const isEmpty = !cart.line_items.length;

  const EmptyCard = () => (
    <Typography varaint="subtitle1">
      You have no items in your shopping cart, <Link to="/" className={classes.link}>start adding some!</Link>
    </Typography>
  )

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>         
            <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
          <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
          <div>
              <Button onClick={onEmptyCart} className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
              <Button component={Link} to="/checkout" className={classes.emptyButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
          </div>
      </div>
    </>
  )

  return (      
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} varaint="h3" gutterBottom>Your Shopping Cart</Typography>
      {isEmpty ? <EmptyCard/> : <FilledCart/>}
    </Container>
  );
};

export default Cart;

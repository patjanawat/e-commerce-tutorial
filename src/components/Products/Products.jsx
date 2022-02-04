import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const data = [
  {
    id: 1,
    name: "Shoes",
    description: "Running sho",
    price: "$5",
    image:
      "https://cdn.chec.io/merchants/19661/assets/WGkKDasZr7W5RVC2%7CScreenshot%202020-11-25%20at%2011.00.11.png",
  },
  {
    id: 2,
    name: "Mackbook",
    description: "Apple",
    price: "$10",
    image:
      "https://cdn.chec.io/merchants/19661/assets/H4khxFAmm8BOxSOZ%7CScreenshot%202020-11-25%20at%2011.00.51.png",
  },
];

// const products = {}
// products.data = data

const Products = ({ products }) => {
    const classes = useStyles();

    if(!products.length) return <p>Loading...</p>
    console.log(products)
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
            {/* <p>{product.name}</p> */}
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running sho", price: "$5",image:'https://cdn.chec.io/merchants/19661/assets/WGkKDasZr7W5RVC2%7CScreenshot%202020-11-25%20at%2011.00.11.png' },
  { id: 2, name: "Mackbook", description: "Apple", price: "$10",image:'https://cdn.chec.io/merchants/19661/assets/H4khxFAmm8BOxSOZ%7CScreenshot%202020-11-25%20at%2011.00.51.png' },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

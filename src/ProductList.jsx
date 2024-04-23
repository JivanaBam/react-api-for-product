import { CircularProgress, Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const ProductList = () => {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["get.product-list"],
    queryFn: async () => {
      return await axios.get("https://fakestoreapi.com/products");
    },
  });

  const ProductList = data?.data;

  console.log(ProductList);

  if (isPending) {
    return <CircularProgress />;
  }

  return (
    <div>
      <h1>Product List</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {ProductList.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "1rem",
                width: "400px",
                maxHeight: "400px",
              }}
            >
              <img src={item.image} alt="" width="200px" height="200px" />

              <h4>{item.title}</h4>

              <Button variant="contained" color="secondary" fullWidth>
                Explore
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

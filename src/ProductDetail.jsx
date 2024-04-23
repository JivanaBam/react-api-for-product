import { CircularProgress, Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useMutation } from "@tanstack/react-query";

const ProductDetail = () => {
  const { isPending, isError, error, mutate } = useMutation({
    mutationKey: ["add product"],
    mutationFn: async () => {
      return await axios.get("https://fakestoreapi.com/products/11");
    },
  });

  if (isPending) {
    return <CircularProgress />;
  }
  return (
    <div>
      <h1>Product Detail</h1>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          mutate();
        }}
      >
        Fetch Detail
      </Button>
    </div>
  );
};

export default ProductDetail;

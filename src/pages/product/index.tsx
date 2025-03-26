import React from "react";
import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default Product;

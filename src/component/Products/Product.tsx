import { TProduct } from "@/Types/types";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ProductCard from "./ProductCard";

const Product = () => {
  const { data , error, isLoading } = useGetProductsQuery({});


  if (isLoading) return <div className="text-blue-700">Loading...</div>;
  if (error) return <div className="text-red-700">Error occurred</div>;

  const products = data?.data;
  console.log(products)

  return (
    <div>
      <Container>
      <h1 className="mt-6 text-3xl font-bold">Our Products</h1>
      <Grid container spacing={4}>
        {products.map((product: TProduct) => (
          <Grid item key={product._id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default Product;



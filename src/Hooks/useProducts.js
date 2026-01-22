import { useEffect, useState } from "react";
import axios from "axios";

const apibase = import.meta.env.VITE_API_URL;

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${apibase}/api/v2/products`);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return { products, loading };
}

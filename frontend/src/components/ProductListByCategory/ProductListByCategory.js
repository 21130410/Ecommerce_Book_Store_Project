import React, { useEffect, useState } from 'react';
import categoryApi from '../../api/categoryApi';
import { useParams } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';

function ProductListByCategory() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryId) return;

    setLoading(true);
    categoryApi.getProductsByCategory(categoryId)
      .then(data => {
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        setError('Không tải được sản phẩm');
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Đang tải sản phẩm...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Sản phẩm trong danh mục {categoryId}</h2>
      <ProductList data={products} />
    </div>
  );
}

export default ProductListByCategory;

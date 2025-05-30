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

  const categoryNames = {
    '1': 'Sách thiếu nhi:',
    '2': 'Sách văn học:',
    '3': 'Sách lịch sử:',
    '4': 'Tâm lý kỹ năng:',
  };

  const categoryTitle = categoryNames[categoryId] || `Danh mục ${categoryId}`;

  return (
    <div>
      <h2>{categoryTitle}</h2>
      <ProductList data={products} />
    </div>
  );
}

export default ProductListByCategory;

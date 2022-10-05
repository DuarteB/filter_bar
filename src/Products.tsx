import React, { ReactElement, useState } from 'react';

interface ProductsProperties {
  name: string,
  value: number
}

const initialProducts: Array<ProductsProperties>  = [
  { name: "Apple", value: 2.00 },
  { name: "Banana", value: 3.45 },
  { name: "Orange", value: 2.73 },
  { name: "Strawberry", value: 4.15 },
  { name: "Watermelon", value: 7.12 },
  { name: "Avocado", value: 4.35 }
];

export const Products = ({ filterBy }): ReactElement => {
  const [products] = useState( initialProducts )
  return(
    <div style={{ background: 'orage' }}>
      {products
        .filter((product) =>
          filterBy ? product.name.includes(filterBy) : true
        )
        .map((product) => (
          <div key={product.name}>
            {product.name} @ {product.value}
          </div>
      ))}
    </div>
  );
};
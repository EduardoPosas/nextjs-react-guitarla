'use client'
import { useState } from 'react';
import { useCartContext } from '@/context/CartProvider';

import styles from '@/styles/guitar.module.css';

function Form({ guitar }) {
  const [quantity, setQuantity] = useState(0);
  const { addProduct } = useCartContext();
  const { name = '', image = '', description = '', price = 0 } = guitar?.attributes;

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      alert('Selecciona una cantidad');
      return;
    }

    const cartProduct = {
      id: guitar?.id,
      name,
      image: image.data.attributes.url,
      description,
      price,
      quantity
    }

    addProduct(cartProduct);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label htmlFor="quantity" >Cantidad:</label>
      <select
        id="quantity"
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        <option value="0">--Selecciona Cantidad</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input type="submit" value="Agregar" />
    </form>
  )
}

export default Form
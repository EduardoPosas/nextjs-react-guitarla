'use client'

import { useCartContext } from '@/context/CartProvider';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from '@/styles/cart.module.css';

function Cart() {
  const { cart, updateQuantity, deleteProduct } = useCartContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    document.title = 'GuitarLa - Shopping Cart'
  }, []);

  useEffect(() => {
    const totalDue = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setTotal(totalDue);
  }, [cart]);


  return (
    <main className={styles.cart}>
      <h1 className='cart-heading'>Carrito</h1>
      <div className={`${styles.cartContainer} cart-container`}>
        <div className={styles.items}>
          <h3>Artículos</h3>
          {
            cart.length === 0
              ? <p>No hay articulos aún</p>
              : (cart?.map(product => (
                <div key={product.id} className={styles['items-container']}>
                  <div className={styles['cart-image']}>
                    <Image
                      src={product.image}
                      alt={`guitarra ${product.name}`}
                      width={380}
                      height={480}
                    />
                  </div>
                  <div className={styles['cart-content']}>
                    <p className={styles['cart-name']}>{product.name}</p>
                    <p className={styles['cart-price']}>$ {product.price}</p>
                    <div className={styles['cart-quantity']}>
                      <p>Cantidad:</p>
                      <select
                        value={product.quantity}
                        onChange={e => updateQuantity(product.id, e.target.value)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <p>Subtotal: <span className={styles['cart-subtotal']}>{product.price * product.quantity}</span></p>
                  </div>
                  <button
                    type='button'
                    className={styles['cart-delete']}
                    onClick={() => deleteProduct(product.id)}
                  >x</button>
                </div>
              )))
          }

        </div>

        <div className={styles.summary}>
          <h3 className={styles.summaryTitle}>Resumen del pedido:</h3>
          <p >Total a pagar: $ {total}</p>
        </div>
      </div>

    </main >
  )
}

export default Cart;
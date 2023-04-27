import React, { useState, useEffect } from 'react'
import styles from './product.module.css'

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);

    
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
                // setData(await response.clone().json());
                setFilter(await response.json());
        }
        getProducts();
    }, []);

    return (
        <>
            <h1 className={styles.header}>JSON PLACEHOLDER SHOWING PRODUCT(FAKE PRODUCTS)</h1>
            <div className={styles.container}>
                    {
                        filter.map((product) => {
                            return (
                                <>
                                        <div className={styles.card}>
                                            <div className={styles.imageBox}>
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <div className={styles.content}>
                                                <label>
                                                    <h5 className={styles.title}>{product.title}</h5>
                                                    <div className={styles.other}>
                                                        <span>{product.rating.rate}</span>
                                                        <span>${product.price}</span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                </>
                            )
                        })    
                    }
             </div>
        </>
    )
}

export default Products;
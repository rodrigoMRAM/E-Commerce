import { Hero } from '../../components/ui/Hero/Hero'
import { useState, useEffect } from 'react';
import styles from './Home.module.css'
import { CardProduct } from '../../components/ui/CardProduct/CartProduct';
import { getProducts } from '../../service/products';
import { Product } from '../../interfaces/products';


const Home = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [error, seteEror] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // const getProducts = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3000/products')
    //         const data = await response.json()
    //         setProducts(data)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    useEffect(() => {
        getProducts().then((data)=>{
            setProducts(data)
        }).catch(()=>{
            seteEror(true)
        }).finally(()=>{
            setIsLoading(false)
        })
    }, [])

    // console.log(products);

    return (
        <>  
            <Hero />
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}
            <div className={styles.container}>
                {products.map((product)=>(
                    <CardProduct key={product.tail} product={product}/>
                ))}
            </div>
        </>
    )
}

export default Home
import { Hero } from '../../components/ui/Hero/Hero'
import { useState } from 'react';
import styles from './Home.module.css'
import { CardProduct } from '../../components/ui/CardProduct/CartProduct';
import { getProducts } from '../../service/products';
// import { Product } from '../../interfaces/products';
import { Toaster } from 'sonner'
// import { useQuery } from '@tanstack/react-query'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

const Home = () => {
    const [page,setPage] = useState(1)
    const {data,isLoading,error} =useQuery({
        queryKey:["products", page],
        queryFn:()=> getProducts(page), 
        placeholderData: keepPreviousData}
    )

    // const [products, setProducts] = useState<Product[]>([])
    // const [error, seteEror] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // const getProducts = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3000/products')
    //         const data = await response.json()
    //         setProducts(data)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // useEffect(() => {
    //     getProducts().then((data)=>{
    //         setProducts(data)
    //     }).catch(()=>{
    //         seteEror(true)
    //     }).finally(()=>{
    //         setIsLoading(false)
    //     })
    // }, [])

    // console.log(products);

//     return (
//         <>  
//             <Hero />
//             <Toaster richColors/>
//             {isLoading && <p>Loading...</p>}
//             {error && <p>Something went wrong</p>}
//             <div className={styles.container}>
//                 {product.map((product)=>(
//                     <CardProduct key={product.tail} product={product}/>
//                 ))}
//             </div>
//         </>
//     )
// }

    return (
        <>  
            <Hero />
            <Toaster richColors/>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}
            <div className={styles.container}>
                {data?.map((product)=>(
                    <CardProduct key={product.tail} product={product}/>
                ))}
            </div>
            <div className={styles.paginationContainer}>
                <button onClick={()=> setPage((old) => old -1)} className={styles.paginationButton} disabled={page === 1}>
                    Previus page
                </button>
                <div className={styles.paginationActive}>
                    <span>{page}</span>
                </div>
                    <button className={styles.paginationButton} onClick={()=> setPage((old) => old + 1)} >
                        Next Page
                    </button>
            </div>
        </>
    )
}

export default Home
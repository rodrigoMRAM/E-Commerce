import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css'
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Product } from '../../interfaces/products';
import { createProduct } from '../../service/products';
const Dashboard = () => {


    
    const navigate = useNavigate()
    const [product, setproduct] = useState({
        amiiboSeries: "",
        character: "",
        gameSeries: "",
        head: "",
        image: "",
        name: "",
        releaseDate: "",
        tail: "",
        type: "",
        price: 0
    });

    useEffect(() => {
        const userLogin = localStorage.getItem('userLogin')
        if (!userLogin) {
            navigate("/login")
        }
    }, [])
    const handleLogout = () => {
        localStorage.removeItem("userLogin")
        navigate("/login")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setproduct
            ({
                ...product,
                [e.target.name]: e.target.value
            })
    }

    const mutation = useMutation({
        mutationFn:(product:Product)=>createProduct(product)})   

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate(product)
        

    }

    return (
        <div className={styles.container}>
            <div>
                <h1>Dasboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <form onSubmit={handleSubmit}>

                <div className={styles.formControlLogin}>
                    <label htmlFor="amiiboSeries">Amiibo Series</label>
                    <input
                        type="text"
                        id='amiiboSeries'
                        name='amiiboSeries'
                        value={product.amiiboSeries}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="character">character</label>
                    <input
                        type="text"
                        id='character'
                        name='character'
                        value={product.character}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="gameSeries">gameSeries</label>
                    <input
                        type="text"
                        id='gameSeries'
                        name='gameSeries'
                        value={product.gameSeries}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="head">head</label>
                    <input
                        type="text"
                        id='head'
                        name='head'
                        value={product.head}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="image">image</label>
                    <input
                        type="url"
                        id='image'
                        name='image'
                        value={product.image}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        value={product.name}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="releaseDate">release</label>
                    <input
                        type="date"
                        id='releaseDate'
                        name='releaseDate'
                        value={product.releaseDate}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="tail">tail</label>
                    <input
                        type="text"
                        id='tail'
                        name='tail'
                        value={product.tail}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="type">type</label>
                    <input
                        type="text"
                        id='type'
                        name='type'
                        value={product.type}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="price">price</label>
                    <input
                        type="number"
                        id='price'
                        name='price'
                        value={product.price}
                        onChange={handleChange}
                        required />
                </div>
                <div>
                    <button type="submit"> Add product</button>
                </div>
            </form>
        </div>
    )
}
export default Dashboard;
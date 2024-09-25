import Logo from '../../../assets/logo.svg'
import Cart from '../../../assets/cart.svg'
import styles from './Navbar.module.css'
import { useState } from 'react'
import { CartModal } from '../CartModal/CartModal'


export const Navbar =()=>{
    const [showCartModal, setshowCartModal] = useState(false);

    const handleShowCartModal = ()=>{
        setshowCartModal(!showCartModal)
    }
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.navbarDetail}>
                <img src={Logo} alt="Logo de Ecommerce" width={50} height={50} />
                <div>
                    <span>DH Ecommerce</span>
                </div>
            </div>
            <div className={styles.navbarCartContainer}>
                <p className={styles.navbarTextAmount}>2</p>
                <img src={Cart} alt="Cart" onClick={handleShowCartModal} />
            </div>
            {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal}/>)}
        </div>
    )
}
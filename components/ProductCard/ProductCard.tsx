import { FC } from 'react'
import { ProductItem } from '../Categories/Categories'
import styles from './ProductCard.module.scss'

export const ProductCard: FC<ProductItem> = (props) => {
    return <div className={styles.card}>
        <div className={styles.imgContainer}>
            <img src={props.pictures[0].src} alt={props.pictures[0].alt} />
        </div>
        <div className={styles.contentContainer}>
            <h3>
                {props.varietyName}
            </h3>
            <div className={styles.additionalInfo}>
                <div className={styles.propertyBox}>
                    <div className={styles.propertyKey}>price:</div>
                    <div className={`${styles.propertyValue} ${styles.priceValue}`}>{props.price}</div>
                </div>
                <div className={styles.propertyBox}>
                    <div className={styles.propertyKey}>availability:</div>
                    <div className={styles.propertyValue}>{
                        props.amount === 0
                            ? 'missing'
                            : props.amount <= 5
                                ? 'few'
                                : 'lot'
                    }</div>
                </div>

                <button>+</button>
            </div>
        </div>
    </div>
}
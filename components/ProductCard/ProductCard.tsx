import { FC } from 'react'
import { ProductItem } from '../Categories/Categories'
import styles from './ProductCard.module.scss'

export const ProductCard: FC<ProductItem> = (props) => {
    return <div className={"card"}>
        <div className={"imageContainer"}>
            <img src={props.pictures[0].src} alt={props.pictures[0].alt} />
        </div>
        <div className={styles.container}>
            <h4>
                {props.varietyName}
            </h4>
            <div className={styles.propertyBox}>
                <div className={styles.propertyName}>availability</div>
                <div className={styles.propertyPriceValue}>{props.amount}</div>
            </div>
            <div className={styles.propertyBox}>
                <div className={styles.propertyName}>price</div>
                <div className={styles.propertyPriceValue}>{props.price}</div>
            </div>
            <button>Add</button>
        </div>
    </div>
}
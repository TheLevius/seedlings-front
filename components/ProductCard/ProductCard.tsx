import { FC } from 'react'
import { ProductItem } from '../Categories/Categories'
import styles from './ProductCard.module.scss'

export const ProductCard: FC<ProductItem> = (props) => {
    return <>
        {/* <div className={styles.card}>
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
        </div> */}
        <div className="flex bg-slate-300 mb-2 rounded-lg overflow-hidden">
            <div className="basis-1/3 bg-neutral-500"></div>
            <div className="flex-col basis-2/3 p-4 bg-neutral-300">
                <h3>{props.varietyName}</h3>
                <div className="flex pt-3">
                    <div className="flex-col grow">
                        <div className="text-[10px] leading-[12px] tracking-wide">price:</div>
                        <div>{props.price}</div>
                    </div>
                    <div className="flex-col grow">
                        <div className="text-[10px] leading-[12px] tracking-wide">availability:</div>
                        <div className="text-sm">{
                            props.amount === 0
                                ? 'missing'
                                : props.amount <= 5
                                    ? 'few'
                                    : 'lot'
                        }</div>
                    </div>
                    <button className="rounded-lg px-4 bg-stone-200">+</button>
                </div>
            </div>
        </div>
    </>
}
import { FC } from "react";
import styles from './Category.module.scss'
import { ProductCard } from '../../ProductCard/ProductCard';
import { CategoryItem } from '../Categories';

export const Category: FC<CategoryItem> = (props) => {
    console.log(props)
    return <div className={styles.category}>
        <div>
            <h3>
                {props?.categoryName || 'BlueberryStub'}
            </h3>
        </div>
        <div className={styles.container}>
            {props.products.map((item, index) => {
                return <ProductCard {...item} key={index} />
            })}
        </div>
    </div>
}
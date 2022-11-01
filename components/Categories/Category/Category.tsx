import { FC } from "react";
import styles from './Category.module.scss'
import { ProductCard } from '../../ProductCard/ProductCard';
import { CategoryItem } from '../Categories';

export const Category: FC<CategoryItem> = (props) => {

    return <div className={styles.category}>
        <div className="flex justify-between items-center p-4 bg-stone-200">
            <h3 className="text-xl leading-8 tracking-wide">
                {props?.categoryName?.toUpperCase() || 'BlueberryStub'}
            </h3>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6.22259L1.7775 9.05991e-05L0 1.77759L8 9.77759L16 1.77759L14.2225 9.05991e-05L8 6.22259Z" fill="black" fillOpacity="0.8" />
            </svg>
        </div>
        <div className="flex-col px-4 py-8">
            {props.products.map((item, index) => {
                return <ProductCard {...item} key={index} />
            })}
        </div>
    </div>
}
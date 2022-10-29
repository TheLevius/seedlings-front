import { FC } from 'react'
import { Category } from './Category/Category'

type Img = {
    src: string;
    alt: string;
}
export type ProductItem = {
    varietyName: string;
    categoryName: string;
    age: number;
    price: number;
    amount: number;
    pictures: Img[];
}

const productItem: ProductItem = {
    varietyName: 'Prime Arc Freedom',
    categoryName: 'Berries',
    age: 20,
    price: 99.99,
    amount: 5,
    pictures: [
        {
            src: '',
            alt: '',
        },
    ],
}

export type CategoryItem = {
    products: ProductItem[],
    categoryName: string,
}

const categoryItem: CategoryItem = {
    products: [productItem, productItem, productItem],
    categoryName: 'Blueberry'
};


const categories: CategoryItem[] = [categoryItem]

export const Categories: FC = () => {
    return <div>
        <h2>Categories</h2>
        {
            categories.map((item, index) => {
                return <Category {...item} key={index} />
            })
        }
    </div>
}
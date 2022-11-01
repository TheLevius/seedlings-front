import { FC, useState } from 'react'
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
const blackberryVarieties = ['Prime-Ark Freedom', 'Natchez', 'Karaka Black'];

const berries = ['Blueberry', 'Blackberry', 'Strawberry', 'Cowberry', 'Raspberry', 'Cranberry'] as const;
export type Berries = typeof berries[number];

export type CategoryItem = {
    products: ProductItem[],
    categoryName: Berries,
}

const categoryItem: CategoryItem = {
    products: [
        {
            varietyName: blackberryVarieties[0],
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
        },
        {
            varietyName: blackberryVarieties[1],
            categoryName: 'Berries',
            age: 20,
            price: 99.99,
            amount: 8,
            pictures: [
                {
                    src: '',
                    alt: '',
                },
            ],
        },
        {
            varietyName: blackberryVarieties[2],
            categoryName: 'Berries',
            age: 20,
            price: 99.99,
            amount: 0,
            pictures: [
                {
                    src: '',
                    alt: '',
                },
            ],
        }
    ],
    categoryName: 'Blueberry'
};

const categories: CategoryItem[] = [categoryItem, categoryItem, categoryItem]

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
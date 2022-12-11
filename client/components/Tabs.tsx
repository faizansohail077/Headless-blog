import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ICategory } from '../types'

interface IPropTypes {
    categories: ICategory[]
}

const Tabs = ({ categories }: IPropTypes) => {

    const router = useRouter()
    console.log(router, 'router')


    const isActiveLink = (category: ICategory) => {
        return category.attributes.Slug === router.query.category
    }

    return (
        <div className='my-8 flex items-center justify-between border-b-2 border-gray-100' >

            <ul className='flex items-center' >
                <li className={`mr-6 pb-4 border-b-4 rounded-sm 
                ${router.pathname == '/' ? 'border-primary text-primary' : 'border-white text-gray-400 '} `} >
                    <Link href={"#"} >
                        Recent
                    </Link>
                </li>
                {categories?.map((category, index) => {
                    return (
                        <li className={`mr-6 pb-4 border-b-4 rounded-sm ${isActiveLink(category) ? 'border-primary text-primary' : 'border-white text-gray-400 '} `} >
                            <Link href={"#"} >
                                {category?.attributes?.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>


        </div>
    )
}

export default Tabs
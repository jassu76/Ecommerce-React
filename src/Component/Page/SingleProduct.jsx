import React from 'react'
import { MyProductContext } from '../../Context/ProductContext'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PagNavigation from './PagNavigation';
import MYImage from './MYImage';
import FormatPrice from './FormatPrice';
import { TbTruckDelivery, TbReplace } from "react-icons/tb";

import { MdSecurity } from "react-icons/md";
import Colors from './Colors';


const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
    const { isSingleLoading, SingleProduct, singleDataProduct } = MyProductContext();

    const { id } = useParams()
    const { id: alis, name, image, category, price, description, stock, review, colors , company } = SingleProduct
    console.log("name", name)


    useEffect(() => {
        singleDataProduct(`${API}?id=${id}`)
    }, [])

    if (isSingleLoading) {
        return <div>...........................Loading</div>
    }


    return (
        <div>
            <PagNavigation title={name} />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <MYImage imgs={image} />
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h2>{name}</h2>
                        </div>
                        <div>
                            <p>{review}</p>
                        </div>
                        <div>
                            <p><FormatPrice price={price + 250000} /></p>
                        </div>
                        <div>
                            <p>Deal of the Day: <FormatPrice price={price} /></p>
                        </div>
                        <div>
                            <p>Description:{description}</p>
                        </div>
                        <div className='d-flex gap-2 align-item-center'>
                            <div className="freedelivery text-center">
                                <TbTruckDelivery />
                                <p>Free Delivery</p>
                            </div>

                            <div className="replace text-center">
                                <TbReplace />
                                <p>30 Days Replacement</p>
                            </div>

                            <div className="replace text-center">
                                <TbTruckDelivery />
                                <p>Apni Delivery</p>
                            </div>
                            <div className="replace text-center">
                                <MdSecurity />
                                <p>Apni Delivery</p>
                            </div>


                        
                        </div>

                          <div className='stock'>
                            <span>Stock:{stock>0?  "In Stock": "Out of Stock"}</span> <br />
                            <span>id:{id}</span> <br />
                            <span>Brand: {company}</span>
                          </div>
                        <div>
                            { stock > 0 &&  <Colors product={SingleProduct} />}
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default SingleProduct
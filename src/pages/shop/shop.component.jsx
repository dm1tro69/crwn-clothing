import React, {useState} from 'react'
import {SHOP_DATA} from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";




const ShopPage = () => {

    const [collection, setCollection] = useState(SHOP_DATA)


return (
<div className={'shop-page'}>
    {collection.map(({id, ...otherCollectionProps}) => (
        <PreviewCollection key={id} {...otherCollectionProps}/>
        ))}
</div>
)
}
 export default ShopPage
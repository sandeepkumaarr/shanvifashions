import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collectionpreview/collectionpreview.component'

class ShopPage extends React.Component {
 
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;

        return (
            <div className="shoppage">
                {

                    collections.map( ({id,...othercollectionprops}) => (
                        <CollectionPreview key={id} {...othercollectionprops} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;
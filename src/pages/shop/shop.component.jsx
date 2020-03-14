import React, { Component } from 'react';

import SHOP_DATA from './shop.data.js'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render (){
        return(
            <div className='shop-page'>
                <h1>Our Collections</h1>
                {
                    this.state.collections.map(({id, ...otherCollectionProps }) => (
                      <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
};

export default ShopPage;

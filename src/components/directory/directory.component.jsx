import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends Component {
    constructor (){
        super();

        this.state = {
            sections: [
                {
                    title: 'HATS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'regular',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'JACKETS',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    size: 'regular',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    size: 'regular',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'WOMENS',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'MENS',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    };
    render () {
        return (
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({id, title, imageUrl, size}) => (
                        <MenuItem key = {id} title = {title} size = {size} imageUrl = {imageUrl} />
                    ))
                }
            </div>
        )
    }

};

export default Directory;
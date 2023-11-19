import React from 'react';
import ItemsListContainer from '../ItemsListContainer/ItemsListContainer';

const Store = () => {
    return (
        <div className='container'>
            <ItemsListContainer sectionTitle={"Nuestros productos"} buttonLoadMode={"Cargar más productos"} enableLoadMore={true} />
        </div>
    )
}

export default Store
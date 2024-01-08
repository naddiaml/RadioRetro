import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import CartNavigation from '../CartNavigation/CartNavigation';

const OrderDetails = () => {
    const { orderID } = useParams();
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const orderDocRef = doc(db, 'pedidos', orderID);
                const orderSnapshot = await getDoc(orderDocRef);


                if (orderSnapshot.exists()) {
                    setOrderData(orderSnapshot.data());
                } else {
                    console.log('Orden no encontrada');
                }
            } catch (error) {
                console.error('Error al obtener los detalles de la orden:', error);
            }
        };

        fetchOrderData();
    }, [orderID]);

    return (
        <div className="container">
            <CartNavigation />
            <div className="order-details-container">
                <h2>Detalles de la Orden {orderID}</h2>
                <pre>{JSON.stringify(orderData, null, 2)}</pre>
            </div>
        </div>
    );
};

export default OrderDetails;
import React from 'react';
import publicidad2 from '../img/publicidad2.jpg';

const InfoExtra = () => {
    return (
        <section className='row'>
            <div className='col-sm-3 col-md-3 col-lg-3 border border-dark my-2'>
                <p>Widget Clima</p>
            </div>
            <div className='col-sm-3 col-md-3 col-lg-3 border border-dark my-2'>
                <p>Valor Monedas</p>
            </div>
            <div className='col-sm-3 col-md-3 col-lg-3 border border-dark my-2'>
                <img className='w-100' src={publicidad2} alt="" />
            </div>
            <div className='col-sm-3 col-md-3 col-lg-3 border border-dark my-2'>
                <p>Fecha</p>
            </div>
        </section>
    );
};

export default InfoExtra;
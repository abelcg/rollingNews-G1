import React from 'react';

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
                <p>Publicidad</p>
            </div>
            <div className='col-sm-3 col-md-3 col-lg-3 border border-dark my-2'>
                <p>Fecha</p>
            </div>
            <hr className='my-2' />
        </section>
    );
};

export default InfoExtra;
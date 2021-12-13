import React from 'react';
import diarior from "../img/diarior.jpg"
import "bootstrap/dist/css/bootstrap.min.css";

const Error404 = () => {
    return (
        <div>
            <img src={diarior} alt="Error 404" class="w-100 vh-100" />
        </div>
    );
};

export default Error404;
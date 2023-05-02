import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Chefs = () => {
    const {id} = useParams();
    const chefNews = useLoaderData();
    return (
        <div>
            <h2>this is chef:{chefNews.length}</h2>
        </div>
    );
};

export default Chefs;
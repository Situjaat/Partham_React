import React from 'react';
import { useFetch } from './hooks/useFetch';
import { Link, useParams } from 'react-router-dom';

function CustomHook() {
    const { category } = useParams();

    const url = category ? `https://dummyjson.com/products/category/${category}` : 'https://dummyjson.com/products'

    const { data, loading, error } = useFetch(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>{category ? category : 'All Products'}</h1>
            {data.products.map(item => (

                <div key={item.id} className='item' style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <img src={item.thumbnail} alt={item.title} />
                    <h2>
                        <Link key={item.id} to={`/product/${item.id}`}>
                            {item.title}
                        </Link>
                        <span>$ {item.price}</span>
                    </h2>
                </div>
            )
            )}
        </div>
    );
}

export default CustomHook;

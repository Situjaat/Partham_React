import { useFetch } from './hooks/useFetch';
import { Link, useLocation } from 'react-router-dom';

function Search() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('q');

    const url = `https://dummyjson.com/products/search?q=${searchTerm}`;

    const { data, loading, error } = useFetch(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>{`Search - ${searchTerm}`}</h1>
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

export default Search;

import React from 'react';
import { useFetch } from './hooks/useFetch';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Rate, Carousel, Image, Breadcrumb, Divider, Tag } from 'antd';


function SingleProduct() {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Breadcrumb
                items={[
                    {
                        title: <Link to='/'>Home</Link>,
                    },
                    {
                        title: <Link to={`/products/${data.category}`}>{data.category}</Link>,
                    },
                    {
                        title: data.title,
                    },
                ]}
            />
            <Divider />
            <Row key={data.id} gutter={24} className='data'>
                <Col span={8}>
                    {/* <img src={data.thumbnail} alt={data.title} /> */}
                    <Carousel autoplay dots={false} arrows>
                        {(data.images).map((item, index) => (<div key={`slider_${index}`}><Image src={item} alt={data.title} /></div>))}
                    </Carousel>
                </Col>
                <Col span={16}>
                    <h2>{data.title}</h2>
                    <Rate allowHalf defaultValue={data.rating} /> ({data.rating}) <br />
                    <h2><strong>$ {data.price}</strong></h2>
                    <p><strong>Brand: </strong>{data.brand}</p>
                    <p><strong>SKU: </strong>{data.sku}</p>
                    <p><strong>Availability: </strong>{data.availabilityStatus}</p>
                    <p>{data.description}</p>
                    {(data.tags).map((item) => (<Link key={`tags_${item}`} to={`/search?q=${item}`}><Tag color="#f50">{item}</Tag></Link>))}
                </Col>
            </Row>

        </>
    );
}

export default SingleProduct;

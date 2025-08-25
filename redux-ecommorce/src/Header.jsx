// NavigationMenu.jsx
import React, { useState } from 'react';
import { Menu, Layout, Input, Col, Row } from 'antd';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from './actions/authActions';

const { Search } = Input;

const Header = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const { data, loading, error } = useFetch('https://dummyjson.com/products/categories');

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate('/');
    //     }
    // }, []);

console.log('data', data);
const categories = data && data.map((item) => {
    return {
        key: `products/${item.slug}`,
        label: item.name
    }
})
console.log('categories', categories);

    const items = [{
        key: 'home',
        label: 'Home'
    }, {
        key: 'shop',
        label: 'Shop',
        children: categories
    }, {
        key: 'contact',
        label: 'Contact'
    }, {
        key: 'reducer',
        label: 'Home2'
    }, {
        key: 'home3',
        label: 'Home3'
    }, {
        key: 'articlelist',
        label: 'Article List'
    }, {
        key: 'faqs',
        label: 'FAQs'
    }, {
        key: 'skins',
        label: 'Skins'
    }]

    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const [searchValue, setSearchValue] = useState(query.get('q'));


    const handleClick = (e) => {
        // e.key is the path you set in Menu.Item's key
        navigate(e.key);
    };

    const logoutSession = () => {
        dispatch(logout());
    }

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value)
        query.set('q', value);
        navigate(`/search?${query.toString()}`);
    };

    return (
        <>
            {isAuthenticated && (<div className='headerTop'>Welcome {user.firstName} {user.lastName} <button onClick={logoutSession}>Logout</button> </div>)}
            {!isAuthenticated && (<div className='headerTop'><Link to={'/'}>Login</Link> </div>)}

            <Layout.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 0 }}>
                <Col span={8}><div className="demo-logo">KnowledgeBase <span>Premium HTML Template</span></div></Col>
                <Col span={16} style={{ textAlign: 'right' }}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['home']}
                        items={items}
                        onClick={handleClick}
                        style={{ display: 'block' }}
                    />
                </Col>
            </Layout.Header>
            <div className='banner'>
                <h1>Have a Question</h1>
                <h3>If you have any question you can ask below or enter what you are looking for!</h3>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onSearch={onSearch}
                />
            </div>
        </>
    );
};

export default Header;

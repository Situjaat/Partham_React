import React from 'react';
import { LikeOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { List, Space, Col, Row } from 'antd';

const data = Array.from({ length: 6 }).map((_, i) => ({
  href: '#',
  title: `ant design part ${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function Home() {

  return (
    <Row>
      <Col span={8}>
      <h2>Featured Article</h2>
      <List
        itemLayout="vertical"
        size="large"

        dataSource={data}

        renderItem={item => (
          <List.Item
            key={item.title}
         
            extra={
              <IconText icon={LikeOutlined} text="156" key="list-vertical-star-o" />
            }
          >
            <List.Item.Meta
              avatar={<CheckSquareOutlined />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      /></Col>
      <Col span={8}>
      <h2>Latest Article</h2>
      <List
        itemLayout="vertical"
        size="large"

        dataSource={data}

        renderItem={item => (
          <List.Item
            key={item.title}
         
            extra={
              <IconText icon={LikeOutlined} text="156" key="list-vertical-star-o" />
            }
          >
            <List.Item.Meta
              avatar={<CheckSquareOutlined />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      /></Col>
      <Col span={8}>col-8</Col>
    </Row>
  );
}

export default Home;
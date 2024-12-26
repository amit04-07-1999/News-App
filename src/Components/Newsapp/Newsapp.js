import { useContext, useState } from "react";
import { Card, Row, Col, List, Button, Space, Spin } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import NewsProvider from "../../provider/NewsProvider";

const { Meta } = Card;

const Newsapp = () => {
  const { newsapi, loading } = useContext(NewsProvider);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const renderGridView = () => (
    <Row gutter={[16, 16]}>
      {newsapi?.map((news, index) => (
        <Col xs={24} sm={12} md={8} lg={6} key={index}>
          <Card
            hoverable
            style={{ height: '450px', overflow: 'hidden' }}
            cover={
              <img 
                alt={news.title} 
                src={news.image} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
            }
            actions={[
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                Read more →
              </a>
            ]}
          >
            <Meta
              title={news.title}
              description={news.description}
              style={{ height: '150px', overflow: 'hidden' }}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );

  const renderListView = () => (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={newsapi || []}
      renderItem={(news) => (
        <List.Item
          key={news.title}
          extra={
            <img
              width={272}
              alt={news.title}
              src={news.image}
            />
          }
          actions={[
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              Read more →
            </a>
          ]}
        >
          <List.Item.Meta
            title={news.title}
            description={news.description}
          />
        </List.Item>
      )}
    />
  );

  if (loading) {
    return (
      <div style={{ padding: "24px", textAlign: "center" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!newsapi) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "24px" }}>
      <Space style={{ marginBottom: 16, width: '100%', justifyContent: 'flex-end' }}>
        <Button
          type={viewMode === 'grid' ? 'primary' : 'default'}
          icon={<AppstoreOutlined />}
          onClick={() => setViewMode('grid')}
        >
        </Button>
        <Button
          type={viewMode === 'list' ? 'primary' : 'default'}
          icon={<UnorderedListOutlined />}
          onClick={() => setViewMode('list')}
        >
        </Button>
      </Space>
      {viewMode === 'grid' ? renderGridView() : renderListView()}
    </div>
  );
};

export default Newsapp;


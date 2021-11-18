import React, { useEffect } from 'react';
import Layout from 'components/layout/Layout';
import { Row, Col, Image } from 'antd';
import { Button, Spin } from 'antd';
import { fetchEventImages, eventImageUpload } from 'store/action/event.action';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';

const EventImageUpload = ({ fetchEventImages, images, eventImageUpload }) => {
  const { id } = useParams();

  useEffect(() => fetchEventImages(id), [fetchEventImages, id]);

  useEffect(() => console.log({ images }), [images]);

  const onRemove = (id) => {};

  const imageOnChangHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const url = reader.result;
        const formData = new FormData();
        formData.append('image', e.target.files[0], e.target.files[0].filename);
        eventImageUpload({ id, url, formData });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Layout>
      <h2>Image upload</h2>
      <Row wrap gutter={25}>
        {images.map((image) => (
          <Col key={Math.random()}>
            <Spin spinning={image.isUploading}>
              <Image
                width={200}
                height={200}
                src={image.url}
                alt='Upload'
                className='event-upload-image'
              />
              <Button
                type='primary'
                style={{
                  background: 'red',
                  display: 'block',
                  width: '100%',
                  marginBottom: 10,
                  border: 'transparent',
                }}
                onClick={() => onRemove(image.id)}
              >
                Remove
              </Button>
            </Spin>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <input type='file' onChange={imageOnChangHandler} />
        </Col>
      </Row>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  const { images } = state.event;
  return { images };
};

export default connect(mapStateToProps, { fetchEventImages, eventImageUpload })(
  EventImageUpload
);

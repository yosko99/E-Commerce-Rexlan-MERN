import productDetailsProperties from '../../resources/default/productDetailsProperties';
import { Col, Row, Image, Button } from 'react-bootstrap';
import ProductSwatches from './ProductSwatches.component';
import ProductSizes from './ProductSizes.component';
import ReactHtmlParser from 'react-html-parser';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ product, productImgState, setProductImgState, sizes, swatches, changeImg }) => {
  const [qty, setQty] = useState(1);

  const { images: defaultThumbnailImages } = product.image_groups[0];
  const [thumbnailImagesState, setThumbnailImagesState] = useState(defaultThumbnailImages);

  const changeThumbnailImages = (e) => {
    const images = product.image_groups.find((group) => group.variation_value === e.target.id);
    setThumbnailImagesState(images);

    if (images === undefined) {
      setThumbnailImagesState(defaultThumbnailImages);
    } else {
      setThumbnailImagesState(images.images);
    }
  };

  const swatchesOnClick = (e) => {
    changeImg(e);
    changeThumbnailImages(e);
  };

  return (
    <>
      <Row className='my-2'>
          <Col lg={8}>
            {/* Thumbnail images */}
              <Row style={{ height: '100%' }} className='flex-lg-row flex-md-column-reverse flex-column-reverse'>
                  <Col lg={2} className='d-flex flex-lg-column flex-md-row justify-content-center'>
                    {thumbnailImagesState.map((image, index) => (
                      <Image
                        style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                        key={'thumbnail' + index + 1} src={'/images/' + image.link}
                        customsrc={image.link}
                        className='my-2 me-2'
                        role="button"
                        onClick={(e) => { setProductImgState(e.target.getAttribute('customsrc')); }}
                        alt={image.alt}/>
                    ))}
                  </Col>
            {/* Thumbnail images */}
            {/* Main image */}
                  <Col lg={10} className='d-flex justify-content-center align-items-center mb-2'>
                      <Image src={'/images/' + productImgState} alt={product.name}/>
                  </Col>
            {/* Main image */}
              </Row>
          </Col>
          {/* Product info */}
          <Col lg={4}>
              <small>{productDetailsProperties.itemNo} {product.id}</small>
              <hr className='mt-0'/>

              <h3 className='text-uppercase'>{product.name}</h3>

              <p className='my-2 fs-5'>{productDetailsProperties.price} {product.price} USD</p>
              <hr/>

              <p className='fs-5 mb-0'>{productDetailsProperties.color}</p>
              {swatches.length > 0
                ? swatches.map((swatch, index) => (<ProductSwatches key={index + 1} swatch={swatch} onClick={(e) => (swatchesOnClick(e))}/>))
                : <Button
                    className='my-2 me-2'
                    variant="outline-dark"
                    disabled>
                      -
                  </Button>}

              <p className='fs-5 mb-0 mt-2'>{productDetailsProperties.size}</p>
              {sizes.map((size, index) => (<ProductSizes key={index + 1} size={size} />))}

              <p className='mt-2 fs-5'>{productDetailsProperties.quantity}</p>
              <div className='d-flex'>
                <Button variant='dark' onClick={() => { if (qty > 1) { setQty(qty - 1); } }}>-</Button>
                <p className='mx-2 my-0 d-flex justify-content-center align-items-center'>{qty}</p>
                <Button variant='dark' onClick={() => setQty(qty + 1)}>+</Button>
                <Button className='ms-4' variant='danger'>{productDetailsProperties.addToCartBtn}</Button>
              </div>
              <hr/>

              <small>{productDetailsProperties.share}</small>
              <div className='d-flex justify-content-between'>
                <div>
                  <i className="fab fa-facebook-f me-2"></i>
                  <i className="fab fa-twitter me-2"></i>
                  <i className="fas fa-plus-square me-2"></i>
                </div>
                <div>
                  <i className="fas fa-heart me-2"></i>
                  <small className="text-uppercase text-muted">{productDetailsProperties.addToWishlist}</small>
                </div>
              </div>
          </Col>
            {/* Product info */}
      </Row>
      {/* Product description */}
      <Row>
        <h3 className='text-uppercase my-3'>{productDetailsProperties.description}</h3>
        <Col lg={8}>
          <p>
            {productDetailsProperties.descriptionCaption}
          </p>
        </Col>
        <Col lg={4}>
          <p>{ReactHtmlParser(product.long_description)}</p>
        </Col>
      </Row>
      {/* Product description */}
    </>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
  productImgState: PropTypes.string.isRequired,
  setProductImgState: PropTypes.func.isRequired,
  changeImg: PropTypes.func.isRequired,
  swatches: PropTypes.array,
  sizes: PropTypes.array
};
export default ProductDetails;

import React, { useEffect, useState } from "react";
import SliderBox from "./SliderBox";
import styles from "../styles/SingleProduct.module.css";
// import MobileViewSlider from "./MobileViewSlider";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addcartdata } from "../Redux/addtocart/action";
import Header from "./header/Header";
import axios from "axios";
import { LowerCont } from "../pages/Homepage/components/lowerCont";
import { OfferSlider } from "../pages/Homepage/components/offerSlider";

// let images = [
//   {
//     id: 1,
//     img:
//       "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2163396_540x.jpg?v=1651787547",
//   },
//   {
//     id: 2,
//     img:
//       "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2097952_a048da9e-b2a7-4a32-9ee2-aed5694dd339_720x.jpg?v=1651787545",
//   },
// ];

const SingleProduct = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [zoomIn, setZoomIn] = useState(true);
  const dispatch = useDispatch();
  const {productsData}=useSelector((state)=>state.products);
  // console.log(productsData, 'products data from signle page')

  useEffect(() => {
    if(productsData[0]){
      const currProd=productsData.filter((item)=>{
        return item._id===id;
      })
      // console.log(currProd,'current product');
      setImages([
        [
          currProd[0].images1?.main,
          currProd[0].images1?.top,
          currProd[0].images1?.bottom,
          currProd[0].images1?.side,
        ],
      ]);
      setProduct(currProd[0]);
    }
    else{
      axios.
         get(`https://bluelybackend.herokuapp.com/Data/filter?id=${id}`)
         .then(({data})=>{
          // console.log(data,'data from api');
        setImages([
          [
            data.images1?.main,
            data.images1?.top,
            data.images1?.bottom,
            data.images1?.side,
          ],
          [
            data.images2?.main,
            data.images2?.top,
            data.images2?.bottom,
            data.images2?.side,
          ],
        ]);
        setProduct(data);
         })
         .catch((err)=>console.log('err',err));
    
    }
 
  }, []);

  const handleZoomInOut = () => {
    setZoomIn(!zoomIn);
  };

  const handleCart = () => {
    dispatch(addcartdata(product));
    alert("Item is Added to Cart");
  };

  return (
    <>
    <Header />
    <OfferSlider margintop={true}/>

    <div className={styles.product_container}>
      <div className={styles.left_side}>
        {zoomIn ? (
          <>
            <div onClick={handleZoomInOut} className={styles.img_wrap}>
              {product.images1?.main != undefined && (
                <img src={product?.images1?.main} alt="" />
              )}
            </div>
            {images.length > 0 && (
              <div className={styles.mobile_view}>
                {/* <MobileViewSlider images={images[0]} /> */}
              </div>
            )}
          </>
        ) : (
          images.length > 0 && (
            <>
              <SliderBox handleZoomInOut={handleZoomInOut} images={images[0]} />
            </>
          )
        )}
      </div>
      <div className={styles.right_side}>
        <div className={styles.brand}>
          <p>{product.brand}</p>
        </div>
        <div className={styles.title}>
          <h1>{product.title}</h1>
        </div>
        <div className={styles.price}>
          <p>
            {/* <del>$ 1,176.00</del> */}$ {product.price}
          </p>
        </div>
        <div className={styles.notice}>
          <p>FREE SHIPPING ON ORDERS OVER $99</p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.size_notice}>
          <p className={styles.size_title}>SIZE</p>
          <p className={styles.size_desc}>
            (Please reference sizing images on a product if available; if
            unavailable please use our size and conversion guide for proper
            sizing. )
          </p>
        </div>
        <div className={styles.size}>
          <div className={`${styles.box} ${styles.active_box}`}>
            {product.sizes}
          </div>
          {/* <div className={`${styles.box} ${styles.active_box}`}>46</div>
          <div className={styles.box}>48</div>
          <div className={styles.box}>50</div>
          <div className={styles.box}>52</div>
          <div className={styles.box}>54</div>
          <div className={styles.box}>56</div> */}
        </div>
        <div className={styles.color}>
          <p>COLOR - {product.color1}</p>
        </div>
        {/* <div className={styles.colors}>
          <div className={`${styles.color_box} ${styles.active_color_box}`}>
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2163396_540x.jpg?v=1651787547"
              alt=""
            />
          </div>
          <div className={styles.color_box}>
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2163396_540x.jpg?v=1651787547"
              alt=""
            />
          </div>
          <div className={styles.color_box}>
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2163396_540x.jpg?v=1651787547"
              alt=""
            />
          </div>
        </div> */}
        <div className={styles.btn_box}>
          <button onClick={handleCart}>Add To Cart</button>
        </div>
        <div className={styles.description}>
          <p>
            Usually ships in 1 to 2 business days Long-sleeved blue denim shirt
            with VLogo Signature maxi print on the front. It features classic
            collar, button closure, buttoned cuffs and two pockets on chest. The
            model is 188cm tall and wears size 48.{" "}
          </p>
        </div>
      </div>
    </div>
    
    <LowerCont />
    </>
  );
};

export default SingleProduct;

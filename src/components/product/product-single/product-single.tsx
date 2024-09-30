"use client";
import React,{ useState , useEffect} from "react";
import Image from "next/image";
import { IProductData } from "@/types/product-d-t";
import { averageRating, discountPercentage, isHot } from "@/utils/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { handleModalProduct, handleOpenModal } from "@/redux/features/utility";

// image style
const imgStyle = {
  width: "300px",
  height: "300px",
};

// prop type
type IProps = {
  product: IProductData;
  progress?: boolean;
  offer_style?: boolean;
  cls?: string;
  price_space?: string;
};

const ProductSingle = ({product,progress,cls,offer_style,price_space}:IProps) => {
  const {image,price,sale_price,title,updated_at,quantity,sold,category,offerDate,reviews} = product || {};

  let discount = 0;
  if (sale_price) {
    discount = discountPercentage(price, sale_price);
  }
  const [isItemAddToCart, setIsItemAddToCart] = useState(false);
  const [isCompareAdd, setIsCompareAdd] = useState(false);
  const [isWishlistAdd, setIsWishlistAdd] = useState(false);
  const { cart_products } = useAppSelector((state) => state.cart);
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const { compare_products } = useAppSelector((state) => state.compare);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsItemAddToCart(cart_products.some((i) => i.id === product.id));
    setIsWishlistAdd(wishlist.some((i) => i.id === product.id));
    setIsCompareAdd(compare_products.some((i) => i.id === product.id));
  }, [cart_products, compare_products, product.id, wishlist]);

  const handleProductModal = (prd: IProductData) => {
    dispatch(handleModalProduct({ product: prd }))
    dispatch(handleOpenModal())
  }

  return (
    <div
      className={`tpproduct p-relative ${cls ? cls : ""} ${progress ? "tpprogress__hover" : ""}`}
    >
      <div className="tpproduct__thumb p-relative text-center">
        <a onClick={() =>handleProductModal(product)} >
          <Image
            src={image.original}
            alt="product-img"
            width={1000}
            height={1000}
            style={imgStyle}
          />
        </a>
        {image.thumbnail && (
          <a onClick={() =>handleProductModal(product)} className="tpproduct__thumb-img" >
            <Image
              src={image.thumbnail}
              alt="product-img"
              width={1000}
              height={1000}
              style={imgStyle}
            />
          </a>
        )}
        {/* <div className="tpproduct__info bage">
          {discount > 0 && (
            <span className="tpproduct__info-discount bage__discount">
              -{discount.toFixed(0)}%
            </span>
          )}
          {isHot(updated_at) && (
            <span className="tpproduct__info-hot bage__hot">HOT</span>
          )}
        </div> */}
        <div className="tpproduct__shopping">
          {/* <a className="tpproduct__shopping-wishlist pointer"
           onClick={() => dispatch(add_to_wishlist(product))}>
            <i className={"icon-heart icons" + (isWishlistAdd ? " active" : "")}></i>
          </a>
          <a className="tpproduct__shopping-wishlist pointer"
           onClick={() => dispatch(add_to_compare(product))}>
            <i className={"icon-layers" + (isCompareAdd ? " active" : "")}></i>
          </a> */}
          <a className="tpproduct__shopping-cart pointer" onClick={() =>handleProductModal(product)}>
            <i className="icon-eye"></i>
          </a>
        </div>
      </div>
      <div className="tpproduct__content align-items-center">
      {product.icon && <div>
      <Image src={product.icon} alt="product" width={62} height={62} />
    </div>}
    <div className="d-flex flex-column justify-content-start">
    <h4 className="tpproduct__title fw-bold ">
          <a onClick={() =>handleProductModal(product)}>{title}</a>
        </h4>
        <span
          className={`tpproduct__content-weight ${offer_style ? "mb-10" : ""}`}
        >
        {category.parent &&  <div  >{category.parent}</div> } 
          {/* <div className="text-center">{category.child}</div> */}
        </span>
      
    </div>
   
      </div>
      {/* <div className="tpproduct__hover-text">
        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
           {isItemAddToCart ? (
            <Link href="/cart" className="tp-btn-2 pointer">
              View Cart
            </Link>
          ) : (
            <a
              onClick={() => dispatch(add_cart_product(product))}
              className="tp-btn-2 pointer"
            >
              Add to Cart
            </a>
          )}
        </div>
        <div className="tpproduct__descrip">
          <ul>
            <li>Category: Organic</li>
            <li>MFG: August 4.2021</li>
            <li>LIFE: 60 days</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default ProductSingle;

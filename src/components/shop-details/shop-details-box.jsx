'use client';
import React from "react";
import Image from "next/image";
import { IProductData } from "@/types/product-d-t";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_cart_product, decrement, increment } from "@/redux/features/cart";
import { usePathname } from "next/navigation";



const ShopDetailsBox = ({ product, navStyle, topThumb }) => {
  const {gallery,image,price,productInfoList,quantity,color,tags,category} = product;
  const [activeImg, setActiveImg] = React.useState(image.original);
  const { orderQuantity } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // handle active image
  const handleActiveImg = (img) => {
    setActiveImg(img);
  };
  const pathname = usePathname(); // Get the current locale
  const activeLocale = pathname.split('/')[1] || "en"; // Default to "en" if no locale is found
  return (
    <>
      <div className="tpdetails__box" >
        <div className="row">
          <div className="col-lg-6">
            {!navStyle && (
              <div className="tpproduct-details__nab p-relative">
                {gallery ? (
                  gallery.map((item, index) => (
                    <div className="tpproduct-details__thumb" key={index}>
                      <Image src={item} alt="image" width={500} height={500} />
                    </div>
                  ))
                ) : (
                  <div className="tpproduct-details__thumb-img mb-10">
                    <Image
                      src={image.original}
                      alt="image"
                      width={500}
                      height={500}
                    />
                  </div>
                )}
              </div>
            )}
            {navStyle && (
              <div className="tpproduct-details__nab p-relative">
                {!topThumb && (
                  <div className="w-img mb-2">
                    <Image
                      src={activeImg}
                      alt="prd-image"
                      width={500}
                      className="mb-2"
                      height={500}
                      style={{ height: "auto" }}
                    />
                    {/* <div className="tpproduct__info bage">
                      <span className="tpproduct__info-hot bage__hot">HOT</span>
                    </div> */}
                  </div>
                )}

                <nav>
                  <div className="nav nav-tabs justify-content-center">
                    {gallery &&
                      gallery.map((img, index) => (
                        <button
                          className={`nav-link ${
                            img === activeImg ? "active" : ""
                          }`}
                          key={index}
                          onClick={() => handleActiveImg(img)}
                        >
                          <Image
                            src={img}
                            alt="nav-img"
                            width={60}
                            height={60}
                          />
                        </button>
                      ))}
                  </div>
                </nav>

                {topThumb && (
                  <div className="w-img">
                    <Image
                      src={activeImg}
                      alt="prd-image"
                      width={500}
                      className=" mb-2"
                      height={500}
                      style={{ height: "auto" }}
                    />
                    {/* <div className="tpproduct__info bage">
                      <span className="tpproduct__info-hot bage__hot">HOT</span>
                    </div> */}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="col-lg-6">
  <div className="product__details product__sticky">
    <div className="product__details-price-box">
      {/* <h5 className="product__details-price">${price.toFixed(2)}</h5> */}
      {productInfoList && (
        <div className="product__details-info-list" style={activeLocale === 'ar' ? { direction: "rtl" } : { direction: "ltr" }}>
          {productInfoList.map((item, index) => (
            <div key={index}>
              <strong>
                {activeLocale === "ar" ? item.title.ar : item.title.en}
              </strong>
              <ul>
                {(activeLocale === "ar" ? item.infoArray?.ar : item.infoArray?.en)?.map((info, idx) => (
        <li style={activeLocale ==='ar' ? {direction:"rtl"} : {direction:"ltr"}} key={idx} dangerouslySetInnerHTML={{ __html: `* ${info}` }}></li>
                )) || <li>No information available</li>}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="product__details-payment text-center">
    <span className="text-primary">{activeLocale ==='en' ? "For further information" : "للمزيد من المعلومات"}</span>
               <div>
               +962 77 523 00 11
               </div>
               <div>
               +962 6 523 00 11
               </div>
               
              </div>
    {/* Other parts of your component */}
  </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default ShopDetailsBox;

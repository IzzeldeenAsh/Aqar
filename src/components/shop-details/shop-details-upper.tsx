import React from "react";
import ShopDetailsBox from "./shop-details-box";
import { IProductData } from "@/types/product-d-t";
import { usePathname } from "next/navigation";


// prop type
type IProps = {
  product: IProductData;
  navStyle?: boolean;
  topThumb?: boolean;
  onClose: () => void;  // New prop for close functionality
};

const ShopDetailsUpper = ({ product, navStyle, topThumb, onClose }: IProps) => {
  const pathname = usePathname();
  const activeLocale = pathname.split('/')[1] || "en"; // Default to "en" if no locale is found

  return (
    <div className="tpdetails__product mb-30 relative">
      {/* Close button */}
      <button 
      style={{position : "absolute", top:"30px" , right : "30px"}}
        onClick={onClose} 
        className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Close"
      >
       X
      </button>

      <div className="tpdetails__title-box">
        <h3 className="tpdetails__title">{product.title}</h3>
        <span className="tpproduct__content-weight">
          {product.category.parent && <div>{product.category.parent}</div>}
        </span>
      </div>
      
      <ShopDetailsBox
        product={product}
        navStyle={navStyle}
        topThumb={topThumb}
      />
    </div>
  );
};

export default ShopDetailsUpper;
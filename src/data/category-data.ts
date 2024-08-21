import { ICategoryData } from "@/types/category-d-t";

const category_data = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1724007653/2151401444_kjfsf7.jpg",
    name: {
      ar : "مستحضرات التجميل", 
      en :"Cosmetics"
    } ,
    slug: "vegetables",
    parent: "Vegetables",
    children: [
     
    ],
    product_id: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1724227044/view-healthy-food-incased-pill-shaped-container_nmveuy.webp",
    name: {
      ar : "المكملات الغذائية ", 
      en :"Supplements"
    },
    slug: "supplements",
    parent: "supplements",
    children: [
     
    ],
    product_id: [8, 9, 10],
  }
];

export default category_data;

export interface ICategoryData {
  id: number;
  img: string;
  name: {
    en : string,
    ar : string
  };
  slug: string;
  parent: string;
  children: string[];
  product_id: number[];
}
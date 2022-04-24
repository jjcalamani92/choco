export interface IProduct {
  _id:string;
  title: string;
  mark: string;
  image: string[];
  description: string;
  use: string;
  inStock: number;
  slug: string;
  line: string,
  category: 'poliuretano'|'poliester'|'duko'|'barniz'|'masilla'|'primer'|'lijas'|'abrillantadores'|'removedor'|'bedacakapo'|'selladores'|'anticorrosivos',
  subCategory: ISubCategory;
  price: number;
  oldPrice: number;
  tags: string[];

  createdAt: string;
  updatedAt: string;
}

export type ISubCategory = 'chamarras'|'pantalones'|'poleras'|'camisas';

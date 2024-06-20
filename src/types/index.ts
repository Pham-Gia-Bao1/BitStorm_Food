type PropductProps = {
  params: {
    productId: string;
  };
};

interface Product {
  id: number;
  name: string;
  price: number | string;
  description: string;
  type: string;
  picture: string;
}

type FieldType = {
  username?: string;
  password?: string;
};

type DataProductType = {
  name: string;
  price: number;
  description: string;
  type: string;
  picture: string;
};
interface BoxCardProps {
  cards: Product[];
}
interface ProductCardProps {
    params: Product;
    getData: () => void;

  }

type DataType = {
  name: string;
  price: number;
  description: string;
  type: string;
  picture: string;
};
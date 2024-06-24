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
type SkeletonsType = {
  variant: "circular" | "rectangular" | "text" | string;
  animation: "wave" | "pulse" | string;
  width: number;
  height: number;
};
type IntroduceCardType = {
  content: string
}
interface SearchBarProps {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
interface ProductFormProps {
  id: number;
  open: boolean;
  onFinish: (values: any) => void;
  onFinishFailed: (errorInfo: any) => void;
  handleCancel: () => void;
  form: any; // Form instance type can be more specific if needed
  imageUrl: string;
  fileList: any[];
  handleChange: (info: any) => void;
  loading: boolean;
}

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
interface Post {
  id : number;
  title: string;
  created_at : string;
  updated_at : string;
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
interface SearchBarProps {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
interface FormSoftProps {
  open: boolean;
  handleCancel: () => void;
  onFinish: (values: any) => void;
  loading: boolean;
}
interface ProductFormProps {
  id: number;
  open: boolean;
  handleCancel: () => void;
  onFinish: (values: any) => void;
  onFinishFailed: (errorInfo: any) => void;
  form: any; // Form instance type can be more specific if needed
  imageUrl: string;
  fileList: any[];
  handleChange: (info: any) => void;
  loading: boolean;
}
interface HomePageCardSecondLevelProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// src/types/index.ts
 interface OrderCardProps {
  id: string | number;
  name: string;
  picture: string;
  price: number | string;
  onRemove: (id: string | number | any) => void;
}
interface CartItem {
  id: string | number;
  name: string;
  picture: string;
  price: number | string;
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
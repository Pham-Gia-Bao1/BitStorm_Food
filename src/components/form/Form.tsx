import React from "react";
import { Modal, Form, Input, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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

const ProductForm: React.FC<ProductFormProps> = ({
  open,
  onFinish,
  onFinishFailed,
  handleCancel,
  form,
  imageUrl,
  fileList,
  handleChange,
  loading,
}) => {
  return (
    <Modal
      footer={null}
      title="Product Form"
      visible={open}
      onCancel={handleCancel}
      >
      <Form
        className="p-3"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        {/* Existing Form Items */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input product name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input product price!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input product description!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: "Please select product type!" }]}
        >
          <Input />
        </Form.Item>

        {/* New Form Item for Image Upload */}
        <Form.Item
          label="Upload picture"
          name="upload"
          rules={[{ required: true, message: "Please upload your file!" }]}
          >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={() => false}
            className="bg-gray-300"
            >
            {fileList.length < 1 && (
              <div>
                <PlusOutlined />
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductForm;

"use client";
import React, { useEffect, useState } from "react";
import { fetchFoodsData } from "@/api";

import { Button, Form, FormProps, message } from "antd";
import ProductForm from "@/components/form/Form";
import ProductCard from "@/components/card/ProductCard";
import axios from "axios";
import { API_URL } from "@/utils";

const Settings: React.FC = () => {
  const [foods, setFoods] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [fileList, setFileList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const fetchedFoods = await fetchFoodsData();
      setFoods(fetchedFoods);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [data, setData] = useState<DataType>({
    name: "",
    price: 0,
    description: "",
    type: "",
    picture: "",
  });

  const onFinish: FormProps["onFinish"] = async (values) => {
    setLoading(true);
    try {
      const uploadedImageUrl = await getUrlUpdateUserImg(
        fileList[0].originFileObj
      );
      console.log("Uploaded Image URL:", uploadedImageUrl);
      const newData: DataType = {
        name: values.name,
        price: values.price,
        description: values.description,
        type: values.type,
        picture: uploadedImageUrl, // Use the uploaded image URL
      };
      createNewFood(newData);
      setData(newData);
      setIsModalOpen(false);
    } catch (error) {
      message.error("Image upload failed. Please try again.");
      setLoading(false);
    }
  };

  const createNewFood = async (data: DataType) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price.toString());
      formData.append("description", data.description);
      formData.append("type", data.type);
      formData.append("picture", data.picture);
      const response = await axios.post(API_URL + "/foods", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      message.success("Food item created successfully!");
      getData();
      setLoading(false);
    } catch (error) {
      message.error("Failed to create food item.");
    }
  };
  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    message.error("Failed to submit form!.");
  };

  // Function to handle file upload changes
  const handleChange = (info: any) => {
    let updatedFileList = [...info.fileList];
    updatedFileList = updatedFileList.slice(-1); // Keep only the latest file
    setFileList(updatedFileList);

    if (info.file.status === "done") {
      setImageUrl(info.file.originFileObj);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const getUrlUpdateUserImg = async (file: File) => {
    const CLOUD_NAME = "dugeyusti";
    const PRESET_NAME = "expert_upload";
    const FOLDER_NAME = "BitStorm";
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);
    formData.append("file", file);

    const options = {
      method: "POST",
      body: formData,
    };

    try {
      const res = await fetch(api, options);
      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  };

  return (
    <main className="flex flex-col items-center justify-betwee bg-white h-full">
      <div className="flex-1 p-6 bg-gray-800 text-white w-full h-full">
        <h1 className="text-2xl mb-4">Settings</h1>
        <div className="flex">
          <div className="flex-1 ml-4 bg-gray-700 p-4 rounded-lg">
            <h2 className="text-xl mb-4">Products Management</h2>
            <Button onClick={showModal}>Add Product</Button>
            <div className="grid grid-cols-3 gap-4">
              {foods.length === 0 ? (
                <div>Loading...</div>
              ) : (
                foods.map((food) => (
                  <>
                    <ProductForm
                      id={food.id}
                      open={isModalOpen}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      handleCancel={handleCancel}
                      form={form}
                      imageUrl={imageUrl}
                      fileList={fileList}
                      handleChange={handleChange}
                    />
                    <ProductCard
                      key={food.id}
                      getData={getData}
                      params={food}
                    />
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;

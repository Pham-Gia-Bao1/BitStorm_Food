"use client";
import React, { useEffect, useState } from "react";
import { fetchFoodsData } from "@/api";
import { Button, Form, FormProps, message } from "antd";
import ProductForm from "@/components/form/Form";
import ProductCard from "@/components/card/ProductCard";
import axios from "axios";
import { API_URL } from "@/utils";
import { Fab, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Loading from "@/components/loading/Loading";

import SkeletonCard from "@/components/skeleton/Skeleton";

const Settings: React.FC = () => {
  const [foods, setFoods] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [fileList, setFileList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [data, setData] = useState<DataType>({
    name: "",
    price: 0,
    description: "",
    type: "",
    picture: "",
  });

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

  const showModal = async (id: number) => {
    console.log(id + "id form");
    setIsModalOpen(true);
    setCurrentId(id);
    if (id !== 0) {
      try {
        const foodDetails = await axios.get(`${API_URL}/foods/${id}`);
        console.log(foodDetails);
        form.setFieldsValue(foodDetails.data);
        setImageUrl(foodDetails.data.picture);
        setFileList([{ url: foodDetails.data.picture }]);
      } catch (error) {
        console.error("Failed to fetch food details:", error);
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

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
        picture: uploadedImageUrl,
      };
      createOrUpdateFood(newData);
      setData(newData);
      setIsModalOpen(false);
    } catch (error) {
      message.error("Image upload failed. Please try again.");
      setLoading(false);
    }
  };

  const createOrUpdateFood = async (data: DataType) => {
    console.log(currentId + "id hiện tại");
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price.toString());
      formData.append("description", data.description);
      formData.append("type", data.type);
      formData.append("picture", data.picture);

      if (currentId === 0) {
        await axios.post(API_URL + "/foods", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        message.success("Food item created successfully!");
      } else {
        await axios.put(`${API_URL}/foods/${currentId}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        message.success("Food item updated successfully!");
      }

      getData();
      setLoading(false);
    } catch (error: any) {
      message.error("Failed to create or update food item.");
      console.log(error.message);
      setLoading(false);
    }
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    message.error("Failed to submit form!.");
  };

  const handleChange = (info: any) => {
    let updatedFileList = [...info.fileList];
    updatedFileList = updatedFileList.slice(-1);
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
            {foods.length === 0 ? (
              <>
                <Loading />
                <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width="30%" />
              </>
            ) : (
              <h2 className="text-xl mb-4">Products Management</h2>
            )}

            <div className="flex justify-between mb-4">
              {foods.length === 0 ? (
                <div className="flex space-x-4">
                  <Skeleton
                    variant="circular"
                    animation="wave"
                    width={60}
                    height={60}
                  />
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={110}
                    height={60}
                  />
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={110}
                    height={60}
                  />
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={110}
                    height={60}
                  />
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={110}
                    height={60}
                  />
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={110}
                    height={60}
                  />
                </div>
              ) : (
                <div className="flex space-x-4">
                  <Fab
                    onClick={() => showModal(0)}
                    color="primary"
                    className="z-10"
                    aria-label="add"
                  >
                    <AddIcon />
                  </Fab>

                  <button className="px-4 py-2 bg-red-500 rounded">
                    Hot Dishes
                  </button>
                  <button className="px-4 py-2 active:bg-red-500 bg-gray-600 hover:bg-gray-800 rounded">
                    Cold Dishes
                  </button>
                  <button className="px-4 py-2 active:bg-red-500 bg-gray-600 hover:bg-gray-800 rounded">
                    Soup
                  </button>
                  <button className="px-4 py-2 active:bg-red-500 bg-gray-600 hover:bg-gray-800 rounded">
                    Grill
                  </button>
                  <button className="px-4 py-2 active:bg-red-500 bg-gray-600 hover:bg-gray-800 rounded">
                    Appetizer
                  </button>
                  <button className="px-4 py-2 active:bg-red-500 bg-gray-600 hover:bg-gray-800 rounded">
                    Dessert
                  </button>
                </div>
              )}

              {foods.length === 0 ? (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={110}
                  height={60}
                />
              ) : (
                <button className="px-4 py-2 active:bg-red-500 bg-gray-600 hover:bg-gray-800 rounded">
                  Manage Categories
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {foods.length === 0
                ? [...Array(5)].map((_, index) => <SkeletonCard key={index} />)
                : foods.map((food) => (
                    <React.Fragment key={food.id}>
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
                        loading={loading}
                      />
                      <ProductCard
                        openModal={() => showModal(food.id)}
                        key={food.id}
                        getData={getData}
                        params={food}
                      />
                    </React.Fragment>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;

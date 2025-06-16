import {Avatar, Button, Form, Input, InputNumber, Modal, Space, Table, Typography, Select, message} from "antd";
import { useEffect, useState } from "react";
import productApiAll from "../../../api/productApiAll";
import inventory from "./index";

function Inventory() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [addForm] = Form.useForm();
    const [editForm] = Form.useForm();
    const [editingProduct, setEditingProduct] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        productApiAll.getAllCategories().then((res) => {
            setCategories(res.data);
        });
    }, []);
    // Fetch all products on load
    useEffect(() => {
        fetchInventory();
    }, []);

    const fetchInventory = () => {
        setLoading(true);
        productApiAll.getAll().then((res) => {
            setDataSource(res.data);
            setLoading(false);
        });
    };

    // Thêm sản phẩm
    const handleAdd = () => {
        setIsAddModalOpen(true);
    };

    const handleAddOk = () => {
        addForm.validateFields().then((values) => {
            const dataToSend = {
                ...values,
                category: {
                    id: values.category, // Gửi ID, không phải name
                },
            };

            fetch("http://localhost:8080/api/productss", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),

            })
                .then((res) => res.json())
                .then((newProduct) => {
                    setDataSource((prev) => [...prev, newProduct]);
                    setIsAddModalOpen(false);
                    addForm.resetFields();
                    message.success("Thêm sản phẩm thành công");
                });
        });
    };

    // Sửa sản phẩm
    const handleEdit = (record) => {
        setEditingProduct(record);
        editForm.setFieldsValue({
            ...record,
            category: record.category?.id,
        });
        setIsEditModalOpen(true);
    };
    const handleEditOk = () => {
        editForm.validateFields().then((values) => {
            const updated = {
                ...editingProduct,
                ...values,
                category: {
                    id: values.category, // chỉ cần ID
                },
            };

            fetch(`http://localhost:8080/api/productss/${editingProduct.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updated),

            })

                .then((res) => res.json())
                .then((result) => {
                    setDataSource((prev) =>
                        prev.map((item) => (item.id === result.id ? result : item))
                    );
                    setIsEditModalOpen(false);
                    setEditingProduct(null);
                    message.success("Sửa sản phẩm thành công");
                });
        });
    };

    // Xoá sản phẩm
    const handleDelete = (record) => {
        fetch(`http://localhost:8080/api/productss/${record.id}`, {
            method: "DELETE",
        }).then(() => {
            setDataSource((prev) => prev.filter((item) => item.id !== record.id));
        });
    };

    return (
        <div  style={{ padding: 24 }}>
            <Typography.Title level={3}>Quản lý sản phẩm</Typography.Title>

            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={handleAdd}>Thêm sản phẩm</Button>
            </div>

            <Table
                className="fixed-font-table"
                loading={loading}
                dataSource={dataSource}
                rowKey="id"
                pagination={{ pageSize: 5 }}
                columns={[
                    {
                        title: "Ảnh",
                        dataIndex: "imageUrl",
                        render: (link) => <Avatar src={link} size={64} />,
                    },
                    {
                        title: "Tên sản phẩm",
                        dataIndex: "productName",
                    },
                    {
                        title: "Giá gốc",
                        dataIndex: "price",
                        render: (price) => price?.toLocaleString() + ' đ' || 'N/A',
                    },
                    {
                        title: "Giá KM",
                        dataIndex: "discountedPrice",
                        render: (price) => price?.toLocaleString() + ' đ' || 'N/A',
                    },
                    {
                        title: "Tồn kho",
                        dataIndex: "quantity",
                    },
                    {
                        title: "Hãng",
                        dataIndex: "brand",
                    },
                    {
                        title: "",
                        render: (record) => (
                            <Space>
                                <Button onClick={() => handleEdit(record)}>Sửa</Button>
                                <Button danger onClick={() => handleDelete(record)}>Xoá</Button>
                            </Space>
                        ),
                    },
                ]}
            />

            {/* Modal Thêm */}
            <Modal
                title="Thêm sản phẩm"
                open={isAddModalOpen}
                onCancel={() => setIsAddModalOpen(false)}
                onOk={handleAddOk}
            >
                <Form layout="vertical" form={addForm}>
                    <Form.Item name="productName" label="Tên sản phẩm" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="price" label="Giá gốc" rules={[{ required: true }]}>
                        <InputNumber style={{ width: '100%' }} min={0} />
                    </Form.Item>
                    <Form.Item name="discountedPrice" label="Giá KM">
                        <InputNumber style={{ width: '100%' }} min={0} />
                    </Form.Item>
                    <Form.Item name="imageUrl" label="URL ảnh">
                        <Input />
                    </Form.Item>
                    <Form.Item name="quantity" label="Tồn kho">
                        <InputNumber style={{ width: '100%' }} min={0} />
                    </Form.Item>
                    <Form.Item name="brand" label="Hãng">
                        <Input />
                    </Form.Item>
                    <Form.Item name="category" label="Danh mục" rules={[{ required: true }]}>
                        <Select
                            placeholder="Chọn danh mục"
                            options={categories.map((cat) => ({
                                label: cat.name,
                                value: cat.id,
                            }))}
                        />
                    </Form.Item>
                </Form>
            </Modal>

            {/* Modal Sửa */}
            <Modal
                title="Sửa sản phẩm"
                open={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                onOk={handleEditOk}
            >
                <Form layout="vertical" form={editForm}>
                    <Form.Item name="productName" label="Tên sản phẩm" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="price" label="Giá gốc" rules={[{ required: true }]}>
                        <InputNumber style={{ width: '100%' }} min={0} />
                    </Form.Item>
                    <Form.Item name="discountedPrice" label="Giá KM">
                        <InputNumber style={{ width: '100%' }} min={0} />
                    </Form.Item>
                    <Form.Item name="imageUrl" label="URL ảnh">
                        <Input />
                    </Form.Item>
                    <Form.Item name="quantity" label="Tồn kho">
                        <InputNumber style={{ width: '100%' }} min={0} />
                    </Form.Item>
                    <Form.Item name="brand" label="Hãng">
                        <Input />
                    </Form.Item>
                    <Form.Item name="category" label="Danh mục" rules={[{ required: true }]}>
                        <Select
                            placeholder="Chọn danh mục"
                            options={categories.map((cat) => ({
                                label: cat.name,
                                value: cat.id,
                            }))}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default Inventory;

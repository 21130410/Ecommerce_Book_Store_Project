import {
    Table,
    Typography,
    Space,
    Button,
    Modal,
    Form,
    Input,
    message,
    Select,
} from "antd";
import { useEffect, useState } from "react";
import userApi from "../../../api/useradminapi";

function Customers() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [roles, setRoles] = useState([]);
    const [form] = Form.useForm();

    useEffect(() => {
        fetchCustomers();
        fetchRoles();
    }, []);

    const fetchCustomers = async () => {
        setLoading(true);
        try {
            const res = await userApi.getAllUsers();
            const users = res.data;
            setDataSource(Array.isArray(users) ? users : []);
        } catch (err) {
            message.error("Không thể tải danh sách người dùng");
        } finally {
            setLoading(false);
        }
    };

    const fetchRoles = async () => {
        try {
            const res = await userApi.getRoles();
            const roleList = res.data;
            if (Array.isArray(roleList)) setRoles(roleList);
        } catch (err) {
            message.error("Không thể tải danh sách vai trò");
        }
    };

    const handleEdit = (record) => {
        setEditingUser(record);
        form.setFieldsValue(record);
        setIsEditModalOpen(true);
    };

    const handleEditOk = async () => {
        try {
            const values = await form.validateFields();
            const updatedUser = { ...editingUser, ...values };

            // Nếu có API cập nhật backend, gọi ở đây
            // await userApi.updateUser(updatedUser.id, updatedUser);

            setDataSource((prev) =>
                prev.map((item) => (item.id === updatedUser.id ? updatedUser : item))
            );
            message.success("Cập nhật người dùng thành công");
            setIsEditModalOpen(false);
        } catch (error) {
            message.error("Cập nhật thất bại");
        }
    };

    const handleDelete = async (id) => {
        try {
            await userApi.deleteUser(id);
            setDataSource((prev) => prev.filter((user) => user.id !== id));
            message.success("Đã xóa người dùng");
        } catch (err) {
            message.error("Xóa thất bại");
        }
    };

    return (
        <div style={{ padding: 24 }}>
            <Space direction="vertical" size={24} style={{ width: "100%" }}>
                <Typography.Title level={3}>Quản lý người dùng</Typography.Title>
                <Table
                    className="fixed-font-table"
                    size="large"
                    loading={loading}
                    dataSource={dataSource}
                    rowKey="id"
                    pagination={{ pageSize: 5 }}
                    columns={[
                        {
                            title: "ID",
                            dataIndex: "id",
                        },
                        {
                            title: "Email",
                            dataIndex: "email",
                        },
                        {
                            title: "Số điện thoại",
                            dataIndex: "mobile",
                        },
                        {
                            title: "Tài khoản",
                            dataIndex: "userName",
                        },
                        {
                            title: "Vai trò",
                            dataIndex: "role",
                            render: (role) =>
                                role === "ROLE_ADMIN" ? "Quản trị viên" : "Người dùng",
                        },
                        {
                            title: "Hành động",
                            render: (record) => (
                                <Space>
                                    <Button
                                        onClick={() => handleEdit(record)}
                                        style={{
                                            borderColor: "gold",
                                            color: "gold",
                                            backgroundColor: "white",
                                        }}
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(record.id)}
                                        style={{
                                            borderColor: "red",
                                            color: "red",
                                            backgroundColor: "white",
                                        }}
                                    >
                                        Xóa
                                    </Button>
                                </Space>
                            ),
                        },
                    ]}
                />
            </Space>

            <Modal
                title="Chỉnh sửa người dùng"
                open={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                onOk={handleEditOk}
                okText="Lưu"
                cancelText="Hủy"
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="fullName"
                        label="Họ tên"
                        rules={[{ required: true, message: "Nhập họ tên" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="mobile" label="Số điện thoại">
                        <Input />
                    </Form.Item>
                    <Form.Item name="userName" label="Tài khoản">
                        <Input />
                    </Form.Item>
                    <Form.Item name="role" label="Vai trò" rules={[{ required: true }]}>
                        <Select>
                            {roles.map((role) => (
                                <Select.Option key={role} value={role}>
                                    {role === "ROLE_ADMIN" ? "Quản trị viên" : "Người dùng"}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item name="password" label="Mật khẩu">
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default Customers;

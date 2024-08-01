import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaSearch, FaBell, FaChartBar, FaBox, FaTags, FaShoppingCart, FaUser } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Users = () => {
    const orders = [
        {
            orderId: '#9292',
            date: '06/07/2022',
            customer: 'Abdou Yakhya',
            salesChannel: 'Woodside',
            destination: 'Mbao',
            items: 7,
            status: 'Completed',
        },
        {
            orderId: '#7676',
            date: '05/06/2022',
            customer: 'King Yakhassane',
            salesChannel: 'Shell',
            destination: 'Tivouaone',
            items: 3,
            status: 'Completed',
        },
        {
            orderId: '#5689',
            date: '04/06/2022',
            customer: 'Adiouma Traore',
            salesChannel: 'Total',
            destination: 'Pikine',
            items: 1,
            status: 'Completed',
        },
        {
            orderId: '#3465',
            date: '03/05/2022',
            customer: 'Fallou Ngom',
            salesChannel: 'BP',
            destination: 'Mbour',
            items: 4,
            status: 'Completed',
        },
        {
            orderId: '#5467',
            date: '02/03/2022',
            customer: 'Ibrahima Seye',
            salesChannel: 'Omega Petroleum',
            destination: 'Point E',
            items: 3,
            status: 'Pending',
        },

        {
            orderId: '#1325',
            date: '29/02/2022',
            customer: 'Georges',
            salesChannel: 'PetroChina',
            destination: 'Thies',
            items: 3,
            status: 'Pending',
        },
        // Ajoutez d'autres données ici
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-200 text-green-800';
            case 'Pending':
                return 'bg-yellow-200 text-yellow-800';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen flex flex-col mt-20">
            <div className="flex flex-row">
                <aside className="w-64 bg-blue-900 text-white">
                    <nav className="flex flex-col p-4 space-y-4">
                    <Link to="/dashboard" >
                        <a href="/users" className="flex items-center space-x-2">
                            <span>Dashboard</span>
                        </a>
                        </Link>
                    <Link to="/instock" >

                        <a href="/in-stock" className="flex items-center space-x-2">
                            <span>In Stock</span>
                        </a>
                        </Link>
                        <a href="/products" className="flex items-center space-x-2">
                            <span>Products</span>
                        </a>
                        <a href="/sales" className="flex items-center space-x-2">
                            <span>Sales</span>
                        </a>
                        <a href="/orders" className="flex items-center space-x-2">
                            <span>Orders</span>
                        </a>
                        <a href="/users" className="flex items-center space-x-2">
                            <span>Users</span>
                        </a>
                    </nav>
                </aside>
                <main className="flex-1 bg-gray-100">
                    <div className="flex justify-between items-center p-4 bg-white shadow">
                        <h1 className="text-2xl font-bold">Users</h1>
                        <div className="flex items-center space-x-4">
                        <img src="path/to/avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
                        <span>Yakhya</span>
                            <FaSearch />
                            <FaBell />
                            <div className="flex items-center space-x-2">
                                <Link to="/login"> <button className='bg-blue-600 p-1 rounded shadow' >Sign out</button> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    placeholder="Search order ID"
                                    className="px-4 py-2 border rounded"
                                />
                                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                                    Search
                                </button>
                            </div>
                            <div className="flex space-x-2">
                                <button className="px-4 py-2 bg-purple-500 text-white rounded">
                                    Import Users
                                </button>
                                <button className="px-4 py-2 bg-purple-500 text-white rounded">
                                    + New User
                                </button>
                            </div>
                        </div>
                        <table className="min-w-full bg-white rounded">
                            <thead>
                                <tr className="w-full bg-gray-200 text-left">
                                    <th className="px-4 py-2">order ID</th>
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Customer</th>
                                    <th className="px-4 py-2">Sales channel</th>
                                    <th className="px-4 py-2">Destination</th>
                                    <th className="px-4 py-2">Items</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-4 py-2">{order.orderId}</td>
                                        <td className="px-4 py-2">{order.date}</td>
                                        <td className="px-4 py-2">{order.customer}</td>
                                        <td className="px-4 py-2">{order.salesChannel}</td>
                                        <td className="px-4 py-2">{order.destination}</td>
                                        <td className="px-4 py-2">{order.items}</td>
                                        <td className="px-4 py-2">
                                            <span className={`px-2 py-1 rounded ${getStatusClass(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Users;
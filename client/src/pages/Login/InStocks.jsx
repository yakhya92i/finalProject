import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaSearch, FaBell, FaChartBar, FaBox, FaTags, FaShoppingCart, FaUser } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const InStock = () => {
    const stocks = [
        { orderId: '#7676', product: 'Inverter', category: 'cat1', salesChannel: 'Store name', instruction: 'Stock adjustment', items: '80/100', status: 'Completed' },
        { orderId: '#7676', product: 'Battery', category: 'cat1', salesChannel: 'Store name', instruction: 'Stock adjustment', items: '80/100', status: 'Pending' },
        { orderId: '#7676', product: 'Generator', category: 'cat1', salesChannel: 'Store name', instruction: 'Stock adjustment', items: '80/100', status: 'Completed' },
        { orderId: '#7676', product: 'Charger', category: 'cat1', salesChannel: 'Store name', instruction: 'Stock adjustment', items: '80/100', status: 'Completed' },
        { orderId: '#7676', product: 'Power', category: 'cat1', salesChannel: 'Store name', instruction: 'Stock adjustment', items: '80/100', status: 'Completed' },
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
        <div className="min-h-screen flex mt-10 ">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-900 text-white flex flex-col">
                <nav className="flex flex-col p-4 space-y-4">
                <Link to="/dashboard" >
                    <a href="/dashboard" className="flex items-center space-x-2">
                        <span>Dashboard</span>
                    </a>
                    </Link>
                    <a href="/in-stock" className="flex items-center space-x-2">
                        <span>In Stock</span>
                    </a>
                <Link to="/products" >
                    <a href="/products" className="flex items-center space-x-2">
                        <span>Products</span>
                    </a>
                    </Link>
                <Link to="/sales" >
                    <a href="/sales" className="flex items-center space-x-2">
                        <span>Sales</span>
                    </a>
                    </Link>
                <Link to="/orders" >
                    <a href="/orders" className="flex items-center space-x-2">
                        <span>Orders</span>
                    </a>
                    </Link>
                <Link to="/users" >
                    <a href="/users" className="flex items-center space-x-2">
                        <span>Users</span>
                    </a>
                    </Link>
                </nav>
            </aside>
            {/* Main content */}
            <main className="flex-1 bg-gray-100">
                {/* Header */}
                <div className="flex justify-between items-center p-4 bg-white shadow">
                    <h1 className="text-2xl font-bold">In stock</h1>
                    {/* <img src="path/to/avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" /> */}
                            <span>Yakhya</span>
                    <div className="flex items-center space-x-4">
                        <FaSearch />
                        <FaBell />
                        <div className="flex items-center space-x-2">
                            
                            <Link to="/login"> <button className='bg-blue-600 p-1 rounded shadow' >Sign out</button> </Link>
                        </div>
                    </div>
                </div>
                {/* Categories */}
                <div className="p-4">
                    <div className="flex space-x-4 mb-4">
                        <button className="px-4 py-2 bg-yellow-500 text-white rounded">Category 1</button>
                        <button className="px-4 py-2 bg-yellow-500 text-white rounded">Category 2</button>
                        <button className="px-4 py-2 bg-yellow-500 text-white rounded">Category 3</button>
                    </div>
                    {/* Quick search and actions */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Quick search"
                                className="px-4 py-2 border rounded"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded">
                                + New Stock
                            </button>
                        </div>
                    </div>
                    {/* Stock table */}
                    <table className="min-w-full bg-white rounded">
                        <thead>
                            <tr className="w-full bg-gray-200 text-left">
                                <th className="px-4 py-2">order ID</th>
                                <th className="px-4 py-2">Product</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Sales channel</th>
                                <th className="px-4 py-2">Instruction</th>
                                <th className="px-4 py-2">Items</th>
                                <th className="px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stocks.map((stock, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-2">{stock.orderId}</td>
                                    <td className="px-4 py-2">{stock.product}</td>
                                    <td className="px-4 py-2">{stock.category}</td>
                                    <td className="px-4 py-2">{stock.salesChannel}</td>
                                    <td className="px-4 py-2">{stock.instruction}</td>
                                    <td className="px-4 py-2">{stock.items}</td>
                                    <td className="px-4 py-2">
                                        <span className={`px-2 py-1 rounded ${getStatusClass(stock.status)}`}>
                                            {stock.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default InStock;
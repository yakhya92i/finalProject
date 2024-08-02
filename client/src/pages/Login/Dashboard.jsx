import SignIn from './SignIn';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaSearch, FaBell, FaChartBar, FaBox, FaTags, FaShoppingCart, FaUser } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
    { name: 'May', uv: 1890, pv: 4800 },
    { name: 'Jun', uv: 2390, pv: 3800 },
    { name: 'Jul', uv: 3490, pv: 4300 },
];

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100 mt-10">
            {/* Sidebar */}
            <div className="w-1/6 bg-blue-900 text-white">
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    <a href="#" className="flex items-center space-x-2">
                        <FaChartBar />
                        <span>Dashboard</span>
                    </a>
                    <Link to="/instock" >
                        <a href="#" className="flex items-center space-x-2">
                            <FaBox />
                            <span>In Stock</span>
                        </a>
                    </Link>
                    <Link to="/products" >
                    <a href="#" className="flex items-center space-x-2">
                        <FaTags />
                        <span>Products</span>
                    </a>
                    </Link>
                    <Link to="/sales" >
                    <a href="#" className="flex items-center space-x-2">
                        <FaShoppingCart />
                        <span>Sales</span>
                    </a>
                    </Link>
                    <Link to="/orders" >
                    <a href="#" className="flex items-center space-x-2">
                        <FaShoppingCart />
                        <span>Orders</span>
                    </a>
                    </Link>
                    <Link to="/users" >
                        <a href="#" className="flex items-center space-x-2">
                            <FaUser />
                            <span>Users</span>
                        </a>
                    </Link>
                </nav>
            </div>
            {/* Main Content */}
            <div className="w-5/6 p-6 space-y-6">
                {/* Top Bar */}
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                    <div className="flex items-center space-x-4">
                        {/* <img src="./public/mySticker.png" alt="User Avatar" className="h-8 w-8 rounded-full" /> */}
                        <span>Yakhya</span>
                        <FaSearch />
                        <FaBell />
                        <div className="flex items-center space-x-2">
                        </div>
                        <Link to="/login"> <button className='bg-blue-600 p-1 rounded shadow' >Sign out</button> </Link>
                    </div>
                </div>
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-bold">Revenue</h3>
                        <div className="flex items-center">
                            <FaRegUser className="text-2xl" />
                            <p className="text-green-500 ml-2">+ 30,000</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-bold">Sales Return</h3>
                        <div className="flex items-center">
                            <FaRegUser className="text-2xl" />
                            <p className="text-green-500 ml-2">+ 30,000</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-bold">Purchase</h3>
                        <div className="flex items-center">
                            <FaRegUser className="text-2xl" />
                            <p className="text-green-500 ml-2">+ 30,000</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-bold">Income</h3>
                        <div className="flex items-center">
                            <FaRegUser className="text-2xl" />
                            <p className="text-green-500 ml-2">+ 30,000</p>
                        </div>
                    </div>
                </div>
                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow col-span-2">
                        <BarChart width={600} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-bold">Top Selling Products</h3>
                        {/* Replace with your chart */}
                        <div className="h-32 w-full bg-blue-800 rounded"></div>
                    </div>
                </div>
                {/* Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-bold">Stock Alert</h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alert amt.</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-6 py-4">order ID</td>
                                    <td className="px-6 py-4">Date</td>
                                    <td className="px-6 py-4">Quantity</td>
                                    <td className="px-6 py-4">Alert amt.</td>
                                    <td className="px-6 py-4">Status</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-lg font-bold">Top Selling Products</h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alert amt.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-6 py-4">order ID</td>
                                    <td className="px-6 py-4">Quantity</td>
                                    <td className="px-6 py-4">Alert amt.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">order ID</td>
                                    <td className="px-6 py-4">Quantity</td>
                                    <td className="px-6 py-4">Alert amt.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Dashboard;
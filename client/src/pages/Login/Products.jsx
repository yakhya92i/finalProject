import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaSearch, FaBell, FaChartBar, FaBox, FaTags, FaShoppingCart, FaUser } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Product = () => {
    return (
        <div className="flex min-h-screen mt-10 bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/6 bg-blue-900 text-white">
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Products</h1>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    <Link to="/dashboard" >
                        <a href="#" className="flex items-center space-x-2">
                            <FaChartBar />
                            <span>Dashboard</span>
                        </a>
                    </Link>
                    <Link to="/instock">
                        <a href="#" className="flex items-center space-x-2">
                            <FaBox />
                            <span>In Stock</span>
                        </a>
                    </Link>
                    <a href="#" className="flex items-center space-x-2">
                        <FaTags />
                        <span>Products</span>
                    </a>
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
                        <Link to="/users">
                            <a href="#" className="flex items-center space-x-2">
                                <FaUser />
                                <span>Users</span>
                            </a>
                        </Link>
                    </Link>
                </nav>
            </div>
            {/* Main content */}
            <div className="flex-1 p-6">
                {/* <header className="flex justify-between items-center pb-6">
                    <h1 className="text-2xl font-semibold">Product - Pétrole</h1>
                    <div className="flex items-center space-x-4">
                        <span>Yakhya</span>
                    </div>
                </header> */}
                <div className="flex items-center justify-end space-x-4 pb-6">
                    <h1 className="text-2xl font-semibold">Product - Pétrole</h1>
                    {/* <img src="path/to/avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" /> */}
                    <div className="flex justify-end items-center space-x-4">
                        <span>Yakhya</span>
                    </div>
                    <FaSearch />
                    <FaBell />
                    <div className="flex items-center space-x-2">
                        <Link to="/login"> <button className='bg-blue-600 p-1 rounded shadow' >Sign out</button> </Link>
                    </div>
                </div>
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold">30,000</h2>
                            <p>Today's sales</p>
                        </div>
                        <span className="text-green-500">⬆ 10%</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold">270</h2>
                            <p>Today's total orders</p>
                        </div>
                        <span className="text-green-500">⬆ 8%</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold">1,000</h2>
                            <p>Today's revenue</p>
                        </div>
                        <span className="text-green-500">⬆ 5%</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold">100</h2>
                            <p>Today's customers</p>
                        </div>
                        <span className="text-green-500">⬆ 3%</span>
                    </div>
                </div>
                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Today's Stats</h2>
                        <div className="h-64 bg-gray-200 rounded">
                            {/* Placeholder for bar chart */}
                            <div className="h-full flex justify-around items-end pb-2">
                                <div className="w-1/6 bg-yellow-500 h-1/3"></div>
                                <div className="w-1/6 bg-blue-500 h-1/2"></div>
                                <div className="w-1/6 bg-yellow-500 h-2/3"></div>
                                <div className="w-1/6 bg-blue-500 h-3/4"></div>
                                <div className="w-1/6 bg-yellow-500 h-1/2"></div>
                                <div className="w-1/6 bg-blue-500 h-2/3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
                        <div className="h-64 bg-gray-200 rounded flex justify-center items-center">
                            {/* Placeholder for pie chart */}
                            <div className="w-40 h-40 bg-blue-900 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
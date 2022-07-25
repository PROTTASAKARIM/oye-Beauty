import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <div>
            <div class="navbar bg-zinc-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Blog</a></li>
                            <li><a>Career</a></li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    My Account
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><ShoppingCartIcon className="h-5 w-5 text-gray-500"></ShoppingCartIcon></li>
                        </ul>

                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Oye Beauty</a>
                    <p><small>1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</small></p>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Blog</a></li>
                        <li><a>Career</a></li>
                        <li tabindex="0">
                            <a>
                                My Account
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>


                    </ul>
                    <ShoppingCartIcon className="h-5 w-5 text-gray-500"></ShoppingCartIcon>
                </div>
                <div class="navbar-end">
                    <a class="btn btn-ghost border-black">Download</a>
                </div>
            </div>
        </div >
    );
};

export default Header;
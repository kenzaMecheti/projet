import React from "react";
import logo from "../ReplyPal.svg";
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

import {
  FaEnvelope,
  FaMailBulk,
  FaArrowCircleRight,
  FaTrash,
  FaComments,
  FaAddressBook,
  FaPlus,
  FaSave,
  FaUser,
  FaUserAlt
} from "react-icons/fa";

import { IconContext } from "react-icons";

function Layout() {

  const logout = async () => {
    axios.post("http://localhost:5000/auth/logout",  { withCredentials: true }).then((res) => {
      // Sauvegarder les données de connexion
      console.log(res);
      window.location.href = "/register"
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div class="app" >

      <div clas="w-full bg-transparent" >
        <div>
          <div class=" flex bg-white">
            <div class="col w-1/6">
              <img class="w-full" src={logo} className="p-3 logo" />
            </div>
            <div class=" col w-4/6 pt-1">
              <input
                class="my-2 w-full shadow appearance-none border border-slate-400 rounded py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline bg-slate-50"
                id="password"
                type="Text"
                placeholder="Rechercher un contact"
              >
              </input>
            </div>
            <div class=" bg-white flex flex-col float-right ml-auto">
              <div class="flex items-center justify-center float-right">
                <div class=" relative inline-block text-left dropdown  float-right">
                  <span class="rounded-md shadow-sm"
                  >
                    <a href="#" class="text-slate-700 text-4xl p-1 mt-2 float-right" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                      <FaUserAlt className="float-left mx-2 font-bold rounded-full bg-slate-200 p-2" />
                    </a>
                  </span>
                  <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 mr-20">
                    <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                      <div class="px-4 py-3">
                        <p class="text-sm leading-5">Signed in as</p>
                        <p class="text-sm font-medium leading-5 text-gray-900 truncate">{localStorage["email"]}</p>
                      </div>
                      <div class="py-1">
                      <a href="/account" tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Account</a>
                        <a href={"/profile/" + localStorage['user_id']} tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Profile</a>
                        <a href="/settings" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Account settings</a>
                        <a href="javascript:void(0)" tabindex="2" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Profile picture</a></div>
                      <div class="py-1">
                        <a onClick={() => logout()} href="javascript:void(0)" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Sign out</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <IconContext.Provider value={{ className: "icon-size text-gray-800" }}>
          <div class="flex h-screen bg-gray-200 home-nav-remove">
            <div class="bg-white w-80 flex flex-row justify-between col-span-8">
              <div class="p-2 bg-slate-100 rounded-lg">
              <ul class="mt-0 text-start rounded-sm ">
                  <li class="relative px-2 py-4">
                    <a href="/">
                      <span class="text-gray-800 text-small">
                        <FaEnvelope className="float-left mx-2 font-bold" />
                      </span>
                    </a>
                  </li>
                  <li class="relative px-2 py-4">
                  <a href="/messenger">
                    <span class="text-gray-800">
                      <FaComments className="float-left mx-2" />
                    </span>
                  </a>
                  </li>
                  <li class="relative px-2 py-4">
                    <a href="/profile">
                      <span class="text-gray-800">
                        <FaUser className="float-left mx-2" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div class="px-0">
                  <a href="/compose" className=" hover:bg-slate-200 text-white font-bold py-3 px-4 rounded bg-gray-100 bg-btn-messenger mx-4 block">
                    Compose     <FaPlus className="float-left font-bold mx-1 text-white" />
                  </a>
                  <ul class="mt-8 text-start w-full">
                    <li class="relative px-6 py-2">
                      <a href="/inbox">
                        <span class="text-gray-800 text-small">
                          <FaEnvelope className="float-left mx-2 font-bold" /> Inbox
                        </span>
                      </a>
                    </li>
                    <li class="relative px-6 py-2">
                      <a href="/sent">
                        <span class="text-gray-800">
                          <FaArrowCircleRight className="float-left mx-2" /> Sent
                        </span>
                      </a>
                    </li>
                    <li class="relative px-6 py-2">
                      <span class="text-gray-800">
                        <FaSave className="float-left mx-2" /> Drafts
                      </span>
                    </li>
                    <li class="relative px-6 py-2">
                      <span class="text-gray-800">
                        <FaMailBulk className="float-left mx-2 " /> Spams
                      </span>
                    </li>
                    <li class="relative px-6 py-2">
                      <span class="text-gray-800 text-small">
                        <FaTrash className="float-left mx-2 font-bold" /> Trash
                      </span>
                    </li>
                  </ul>
                  <hr className="mt-4" />
                  <ul class="mt-4 text-start">
                    <IconContext.Provider
                      value={{ className: "icon-size text-gray-800" }}
                    >
                      <li class="relative px-6 py-2">
                        <span class="text-gray-800">
                          <FaComments className="float-left mx-2" /> Messenger
                        </span>
                      </li>
                      <li class="relative px-6 py-2">
                        <span class="text-gray-800">
                          <FaAddressBook className="float-left mx-2 " /> Contacts
                        </span>
                      </li>
                    </IconContext.Provider>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col overflow-hidden col-span-8">
              <main class="flex-1 bg-white border">
                <div class="container mx-auto p-2">
                  <Outlet />
                </div>
              </main>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Layout;





























// import{Outlet } from "react-router-dom";

// const Layout = () => {
// return(
//     <><div> <p> inserez les menus ici </p>
//      </div><div>
//         <Outlet />
//     </div></>
// )
//  }
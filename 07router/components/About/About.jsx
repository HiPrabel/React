import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div>
                  <NavLink
                          className={({isActive}) =>
                            `${isActive ? "text-orange-700 bg-white " : "text-white bg-orange-700"} inline-flex  items-center mx-4 px-6 py-3 font-medium  rounded-lg hover:opacity-75`}
                          to="/about/one"
                      > One </NavLink>
                  <NavLink
                          className={({isActive}) =>
                            `${isActive ? "text-orange-700 bg-white " : "text-white bg-orange-700"} inline-flex  items-center m,y-4 px-6 py-3 font-medium  rounded-lg hover:opacity-75`}
                          to="/about/two"
                      > Two </NavLink>
                  </div>
                  <Outlet />
              </div>
          </div>
      </div>
  );
}
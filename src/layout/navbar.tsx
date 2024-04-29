import { useState } from 'react'


const menuItems = [
  { label: "Dashboard", key: "Dashboard", path: "/dashboard" },
  { label: "Processes", key: "Processes", path: "/processes" },
];

const allmenu: JSX.Element[] = menuItems.map((menu) => {
  return (
    <div >
      <a href={menu.path} className="block py-2 md:hover:bg-neutral-700 md:p-2 md:px-5 text-neutral-300 md:hover:text-neutral-100 md:hover:bg-transparent">
        {menu.label}
      </a>
    </div>
  );
});

    


function Navbar() {

  return (
    <>
    <nav className=" border-gray-200 bg-neutral-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-1">
  <div className="" id="navbar-user">
    <ul className="flex font-normal ">

    <div >
      <a className="block py-2 md:p-2 mr-5 text-neutral-300 md:hover:bg-transparent">
        OPERATE-CLONE
      </a>
    </div>
      {allmenu}
    </ul>
  </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

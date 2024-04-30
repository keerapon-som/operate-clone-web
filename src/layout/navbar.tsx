import { useState } from 'react'


const menuItems = [
  { label: "Dashboard", key: "Dashboard", path: "/dashboard" },
  { label: "Processes", key: "Processes", path: "/processes" },
];

const allmenu: JSX.Element[] = menuItems.map((menu) => {
  return (
    <div >
      <a href={menu.path} className="block py-2 hover:bg-neutral-700 p-2 px-5 text-neutral-300 hover:text-neutral-100 hover:bg-transparent">
        {menu.label}
      </a>
    </div>
  );
});

    


function Navbar() {

  return (
    <>
    <nav className=" border-gray-200 bg-neutral-900">
  <div className="items-center justify-between py-1">
  <div className="">
    <ul className="flex font-normal ">

    <div >
      <a className="block py-2 p-2 mr-5 text-neutral-300 hover:bg-transparent">
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

import React, { useState } from "react";

import MenuCard from "../MenuCard/MenuCard";
import Data from './Data'
import "./Menu.css";

const Menu = () => {
  const [active, setActive] = useState("FirstCard")

  return (
    <main id="menu" className="Menu-bg relative w-[100%] h-[100vh] mt-[-3.5rem] px-2">
      {/* <img loading='lazy' src={MenuBg} className="Menu-bg" /> */}
      <div>
        <div className="flex items-center justify-center mt-14">
          {active === 'FirstCard' && <MenuCard data={Data} cardIndex={0} title='Our Special Menu' />}
          {active === 'SecondCard' && <MenuCard data={Data} cardIndex={1} title='Our Vegan Menu' />}
          {active === 'ThirdCard' && <MenuCard data={Data} cardIndex={2} title='Our Non-Vegan Menu' />}
          
        </div>
        <div className="flex justify-center gap-4 mt-5">
          <button className="Button-menu" onClick={() => setActive('FirstCard')} >Special Menu</button>
          <button className="Button-menu" onClick={() => setActive('SecondCard')} >Vegan Menu</button>
          <button className="Button-menu" onClick={() => setActive('ThirdCard')} >Non-Vegan Menu</button>
        </div>
      </div>
    </main>
  );
};

export default Menu;

import { Outlet, useLoaderData } from "react-router-dom";
import Navbar2 from "./Pages/Navbar/Navbar2";
import Navbar1 from "./Pages/Navbar/Navbar1";
import Navbar3 from "./Pages/Navbar/Navbar3";
import Search from "./Pages/Navbar/Search";
import Footer from "./Pages/Footer/Footer";
import MarqueeNavar from "./Pages/Home/marqueeNavbar/MarqueeNavbar";
import { createContext, useEffect, useState } from "react";
import ScrollToTop from "./components/Shared/ScrollToTop";
import { getStrdCart } from "./utilities/functions";

export const GroupsContext = createContext([]);
export const WebContext = createContext([]);
export const ItemContext = createContext([]);
export const CartContext = createContext(null);
// export const UserContext = createContext();

const Root = () => {
  const { groups, webItems, items } = useLoaderData();

  const [cartItems, setCartItems] = useState(0);
  // const [userData, setUserData] = useState([]);
  // const [user, setUser] = useState("");

  useEffect(() => {
    let cart = getStrdCart("cart");
    // console.log(cart);
    setCartItems(cart?.length ? cart?.length : 0);
  }, [cartItems]);


// \

  return (
    <div>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <GroupsContext.Provider value={groups}>
          <WebContext.Provider value={webItems}>
            <ItemContext.Provider value={items}>
              <ScrollToTop />
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <MarqueeNavar />
              <Search />
              <Outlet />
              <Footer />
            </ItemContext.Provider>
          </WebContext.Provider>
        </GroupsContext.Provider>
      </CartContext.Provider>
    </div>
  );
};

export default Root;

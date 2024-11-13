import Banner from "./Banner";
import Card2 from "./Card2";
import Category from "./Category";
import OpenClose from "./OpenClose";
import Delivery from "./Delivery";
import Gallery from "./Gallery";
import { Helmet } from "react-helmet-async";
import { GroupsContext, ItemContext, WebContext } from "../../Root";
import { useContext } from "react";

const Home = () => {
  const grpData = useContext(GroupsContext);
  const webItmData = useContext(WebContext);
  const itemData = useContext(ItemContext);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Grain Pastry & Bakery</title>
      </Helmet>

      <Banner />
      <Category grpData={grpData} webItmData={webItmData} itemData={itemData} />
      {/* <Card /> */}
      <OpenClose />
      <Card2 />
      <Delivery />
      <Gallery />
    </div>
  );
};

export default Home;

import Banner from "./Banner";
import Card from "./Card";
import Card2 from "./Card2";
import Category from "./Category";
import OpenClose from "./OpenClose";
import Delivery from "./Delivery";
import Gallery from "./Gallery";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
               <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Grain Pastry & Bakery</title>
              </Helmet>


            <Banner />
            <Category />
            <Card />
            <OpenClose />
            <Card2 />
            <Delivery />
            <Gallery />
        </div>
    );
};

export default Home;
import Banner from "./Banner";
import Card from "./Card";
import Card2 from "./Card2";
import Category from "./Category";
import OpenClose from "./OpenClose";
import Delivery from "./Delivery";
import Gallery from "./Gallery";

const Home = () => {
    return (
        <div>
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
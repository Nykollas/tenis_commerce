import React from 'react';
import {
    Profile,
    Categories,
    Sex,
    Products,
    TabBottomMenu
} from '../../components';

const data = {
    categories: [
        { imgSrc: require("../../assets/images/categories/bag.png"), title: 'Bags' },
        { imgSrc: require("../../assets/images/categories/watches.png"), title: 'Watches' },
        { imgSrc: require("../../assets/images/categories/shoes.png"), title: 'Shoes' },
        { imgSrc: require("../../assets/images/categories/glasses.png"), title: 'Glasses' },
        { imgSrc: require("../../assets/images/categories/headphones.png"), title: 'Audio' },
        { imgSrc: require("../../assets/images/categories/earrings.png"), title: 'Earrings' }
    ]
}

export interface IHomeProps {

}

const Home: React.FC<IHomeProps> = ({ }) => {
    return (
        <div>
            <div className={"header"}>
                <p className={"header__title"}>Explore</p>
                <Profile imgSrc={require("../../assets/images/user/avatar.png")}></Profile>
            </div>
            <Categories categoriesData={data.categories}></Categories>
            <Sex></Sex>
            <Products bgColors={["var(--green-gradient)", "var(--red-gradient"]}
                productImages={[
                    require("../../assets/images/products/adidas.png"),
                    require("../../assets/images/products/nike.png")
                ]}
                productTitles={["Urban Nike", "Reebok Red Run"]}
                categorie={"Sports"}></Products>
            <Products bgColors={["var(--blue-gradient)", "var(--purple-gradient"]}
                productImages={[
                    require("../../assets/images/products/boot.png"),
                    require("../../assets/images/products/casual.png")
                ]}
                productTitles={["Casual", "Casual 2"]}
                categorie={"Sports"}></Products>
            <TabBottomMenu></TabBottomMenu>
        </div>
    );
}

export default Home;
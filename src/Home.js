import React from 'react';
import './Home.css';
import Product from './Product';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Home() {

    const [{basket, user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }


    return (
        <div className="home">
            <div className="footerTwo">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">
                            Hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className="header_optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                {/* <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div> */}
                <div className="header_basket">
                    <Link to="/checkout">
                        <ShoppingBasketIcon classname= "shopping_cart" />
                    </Link>
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
            </div>
            <div className="home_container">
                <Carousel infiniteLoop autoPlay autoFocus className="home_image">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/GWUnrec/PFS/D39822856_WLA_BAU_GW-Unrec-heroes_DesktopTallHero_3000x1200._CB634361564_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/April-22/DesktopTallhero_3000x1200_2._CB623843558_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/PFS_Unrechero/D50756151_WLA_GW_Heroes_Unrec__Tall_Hero_3000x1200._CB632954420_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/July2022GW/New_FST_Icons/Apay_ICICI/Shoes/s-pc-3000x._CB632756220_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/SmallAppliances-22/Herotator-22/3000x1200-unrec-stashfin._CB633084564_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SamratPrithviraj-PD/3000x1200_Hero-Tall_NP._CB632351883_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/jun22/eoss/apay/WA_3000._CB633632198_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheTerminalList-PD/3000x1200_Hero-Tall_NP._CB632329526_.jpg" alt="" />
                </Carousel>

                <div className="gridContainer">
                    <div className="home_row">
                        <Product title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)" image="https://images-eu.ssl-images-amazon.com/images/I/51HDBvxKyDL._SY445_SX342_QL70_FMwebp_.jpg" rating={4} price={13787} id="1" />
                    </div>

                    <div className="home_row">
                        <Product title="Godrej 236 L 2 Star Inverter Frost Free Double Door Refrigerator" image="https://images-eu.ssl-images-amazon.com/images/I/31PDbhLAxmL._SY445_SX342_QL70_FMwebp_.jpg" rating={3} price={20490} id="2" />
                    </div>

                    <div className="home_row">
                        <Product title="IFB 1.5 Ton 4 Star Gold Series Inverter Split AC (Copper, Convertible Flexi 8-in-1)" image="https://images-eu.ssl-images-amazon.com/images/I/41N2ayodSZL._SY445_SX342_QL70_FMwebp_.jpg" rating={4} price={35490} id="3" />
                    </div>

                    <div className="home_row">
                        <Product title="Long Neck Desk Lamp Compatible with 0W-100W Bulb/LED, Long Wire and On/Off Switch" image="https://m.media-amazon.com/images/I/615wHJHcFfL._SX569_.jpg" rating={4} price={500} id="4" />
                    </div>

                    <div className="home_row">
                        <Product title="BenQ MOBIUZ EX2710S 27 inch IPS Gaming Monitor, 165Hz, 1ms, AMD FreeSync Premium" image="https://images-eu.ssl-images-amazon.com/images/I/41ER9696ibL._SX300_SY300_QL70_FMwebp_.jpg" rating={4} price={21671} id="5" />
                    </div>

                    <div className="home_row">
                        <Product title="Samsung 9 Kg 5 Star Fully-Automatic Front Loading Washing Machine (WW90T504DAN1TL, Inox)" image="https://m.media-amazon.com/images/I/71hX5UrjYzL._SY879_.jpg" rating={5} price={43999} id="6" />
                    </div>

                    <div className="home_row">
                        <Product title="OPPO A54 Crystal Black 4GB RAM, 64GB Storage" image="https://m.media-amazon.com/images/I/31N1+dTRa1S._SY300_SX300_.jpg" rating={5} price={10990} id="7" />
                    </div>

                    <div className="home_row">
                        <Product title="A10SHOP Alpha Bookshelf/Storage Cabinet, Home Decor Display with 4 Shelves, 54 high (Frosty White)" image="https://images-eu.ssl-images-amazon.com/images/I/51szfxqgN1L._SX300_SY300_QL70_FMwebp_.jpg" rating={5} price={10990} id="8" />
                    </div>

                    <div className="home_row">
                        <Product title="Blaupunkt SBA10 10W Bluetooth Soundbar Speaker for TV" image="https://m.media-amazon.com/images/I/61mFFH9W5SS._SX679_.jpg" rating={4} price={999} id="9" />
                    </div>

                    <div className="home_row">
                        <Product title="Groeien AC 110V 60-Watts Metal Cube Ceiling Light (Black, Pack of 2)" image="https://m.media-amazon.com/images/I/617Sv7YxZiL._SX679_.jpg" rating={5} price={475} id="10" />
                    </div>

                    <div className="home_row">
                        <Product title="Himalaya Protein Shampoo-Gentle daily care, 400ml" image="https://m.media-amazon.com/images/I/51FXMtTl4nL._SX679_.jpg" rating={4} price={199} id="11" />
                    </div>

                    <div className="home_row">
                        <Product title="Amazon Brand - Solimo Plastic Compact Vegetable Chopper (350 ml, Green)" image="https://m.media-amazon.com/images/I/81ZNqotTQTL._SX679_.jpg" rating={2} price={169} id="12" />
                    </div>
                    
                    <div className="home_row">
                        <Product title="Amazon Brand - Solimo Stainless Steel Insulated 24 Hours Hot or Cold Bottle" image="https://m.media-amazon.com/images/I/41jXz+dId5S._SY300_SX300_.jpg" rating={5} price={649} id="13" />
                    </div>

                    <div className="home_row">
                        <Product title="SafariPolycarbonate 65 cms Midnight Blue Hardsided Check-in Luggage" image="https://m.media-amazon.com/images/I/91ZW6yUsj3L._SY879_.jpg" rating={4} price={2499} id="14" />
                    </div>

                    <div className="home_row">
                        <Product title="Acer Nitro VG240YB 60.45 cm (23.8 inch) Full HD IPS Monitor I AMD Radeon" image="https://m.media-amazon.com/images/I/71JPEEGxpWL._SX679_.jpg" rating={5} price={12540} id="15" />
                    </div>

                    <div className="home_row">
                        <Product title="Fossil Machine Analog Black Dial Men's Watch-FS4656" image="https://m.media-amazon.com/images/I/71pdv1BE0+L._UY679_.jpg" rating={4} price={10795} id="16"/>
                    </div>

                    <div className="home_row">
                        <Product title="Aparios Decorative Hexagonal Mdf Floating Wall Shelves/Wall Shelf" image="https://images-eu.ssl-images-amazon.com/images/I/61J1dxBBZ0L._SX300_SY300_QL70_FMwebp_.jpg" rating={4} price={1899} id="17" />
                    </div>

                    <div className="home_row">
                        <Product title="Cortina Leaf Design Window Curtain | Drapes for Home, Bedroom |" image="https://m.media-amazon.com/images/I/71uXg9yStWL._SY879_.jpg" rating={4} price={349} id="18" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
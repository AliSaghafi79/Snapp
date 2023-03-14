import '../Stayle/Main.css';
import Logo from '../Images/intro_desktop.jpg';
import GooglePlay from '../Images/google-play-badge.png';
import Bazar from '../Images/bazaar.png';
import IApps from '../Images/iApps.png';
import SibApp from '../Images/sibapp-badge-white.png';
import SnappPwa from '../Images/snapp-pwa.png';
import { BsFillCircleFill } from "react-icons/bs";

const Main = () => {
    return (

        <div className='Main'>

            <div className='MainBox'>

                <div className='MainLogin'>

                    <div className='Login'>
                        <div className='paragraph'>

                            <p className='p1_login'>

                                تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!

                            </p>
                            <p className='p2_login'>

                                از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید.
                            </p>


                        </div>

                        <div className='InputLogin'>
                            <button className='InterBtn'>
                                ارسال لینک

                            </button>

                            <div className='InterInput'>

                                <input type="text" placeholder='6789×××××09' />
                                <BsFillCircleFill className='IconInput' />

                            </div>

                        </div>

                        <div className='DivLoginBtn'>

                            <button className='LoginBtn'>
                                ورود به وب اپلیکیشن اسنپ

                            </button>

                        </div>


                    </div>
                </div>

                <div className='MainImage'>

                    <img src={Logo} alt="intro_desktop" />

                </div>

            </div>

            <div className='BoxApp'>

                <div className='InstallApp'>

                    <div className='Apps'>
                        <img src={GooglePlay} alt="GooglePlay" />
                    </div>
                    
                    <div className='Apps'>
                        <img src={Bazar} alt="Bazar" />
                    </div>

                    <div className='Apps'>
                        <img src={SnappPwa} alt="SnappPwa" />
                    </div>

                    <div className='Apps'>
                        <img src={SibApp} alt="SibApp" />
                    </div>

                    <div className='Apps'>
                        <img src={IApps} alt="IApps" />
                    </div>


                </div>

            </div>


        </div>
    )
}


export default Main;
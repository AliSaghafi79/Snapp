import "../Stayle/Advertising.css";
import { BsFillCircleFill } from "react-icons/bs";
import PicNiaz from "../Images/niaz.png";
import Easy from "../Images/easy.png";
import Fast from "../Images/fast.png";
import Eco from "../Images/eco.png";






const Advertising = () => {

    const Pic = [{ cls: "pic1" }, { cls: "pic2" }, { cls: "pic3" }, { cls: "pic4" }];
    const databox = [
        {
            images: Easy,
            name: "آسان",
            dec: "برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید."
        },
        {
            images: Fast,
            name: "سریع",
            dec: "قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست."
        },
        {
            images: Eco,
            name: "به صرفه",
            dec: "سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید."
        }

    ];

    let indexCircle = 1;


    const currentSlide = (n) => {
        indexCircle = n;
        SlideShow(n)
    }


    function SlideShow(n) {

        let dots = [];
        let slides = [];
        dots = document.getElementsByClassName('Circle');
        slides = document.getElementsByClassName("AllPic");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }


        for (let i = 0; i < dots.length; i++) {
            dots[i].className.baseVal = dots[i].className.baseVal.replace(" CircleWhite", " ");
        }

        slides[indexCircle - 1].style.display = "block";
        dots[indexCircle - 1].className.baseVal += " CircleWhite";



    }




    return (
        <div className="Advertising">


            <div className="BoxLogoAd">

                <div className="BoxPic">

                    <div className="BoxNexPre">

                        <div className="NexPre">


                            <BsFillCircleFill onClick={() => currentSlide(1)} className='Circle CircleWhite' />
                            <BsFillCircleFill onClick={() => currentSlide(2)} className='Circle' />
                            <BsFillCircleFill onClick={() => currentSlide(3)} className='Circle' />
                            <BsFillCircleFill onClick={() => currentSlide(4)} className='Circle' />


                        </div>

                    </div>


                    {Pic.map(items => (

                        <a href="#" className={`AllPic ${items.cls}`}>


                        </a>


                    ))}

                </div>




            </div>


            <div className="BoxAdvertising">
                <div className="Niaz">
                    <img src={PicNiaz} alt="PicNiaz" />

                    <span className="span1">
                        <span className="span2">

                            <h2 className="spanP1">سوپر اپ اسنپ؛ پاسخی به تمام نیازها </h2>

                            <p className="spanP2">

                                اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.
                            </p>

                        </span>

                    </span>
                </div>


                <div className="easy">


                    <div className="easyfast">
                        {databox.map(it => (


                            <div className="easybox">
                                <span className="imgEasy">
                                    <img src={it.images} alt="imags" />

                                </span>
                                <p className="P1Easy">{it.name}</p>
                                <p className="P2Easy">{it.dec}</p>

                            </div>

                        ))}
                    </div>


                </div>




            </div>

        </div>
    );
}



export default Advertising;
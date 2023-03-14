import "../Stayle/DriverReg.css";
import VideoDriver from '../Images/video.mp4';
import Coin from "../Images/Coin.png";
import Clock from "../Images/Clock.png";
import Benefits from "../Images/benefits.png";
import Carfix from "../Images/carfix.png"



const DriverReg = () => {

    const AdDriver = [
        {
            logo: Coin
            ,
            name: " درآمد تضمینی + پاداش‌های ماهانه و هفتگی"
            ,
            dec: "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید."
        },
        {
            logo: Clock
            ,
            name: "ساعت کاری دلخواه"
            ,
            dec: "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید."
        },
        {
            logo: Benefits
            ,
            name: "مزایا و خدمات باشگاه رانندگان"
            ,
            dec: "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید."
        },
        {
            logo: Carfix
            ,
            name: "کار‌فیکس"
            ,
            dec: "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است."
        },
    ]

    return (

        <div className="DriverReg">
            <div className="DriverBox">

                <h2>در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</h2>
                <p className="P_Driver">بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید</p>
                <button className="RegBtn">ثبت نام رانندگان</button>


                <video controls>

                    <source src={VideoDriver} type="video/mp4" />


                </video>


                <div className="AdDriverReg">
                    {AdDriver.map(item => (
                        <div className="AdDrivBox">

                            <img src={item.logo} alt={`${item.name}`} />

                            <div className="PDriver">

                                <p className="P1Driver">{item.name}</p>
                                <p className="P2Driver">{item.dec}</p>

                            </div>


                        </div>
                    ))}


                </div>


            </div>

        </div>
    )

}

export default DriverReg;
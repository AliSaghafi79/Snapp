import "../Stayle/Footer.css";
import { TbBrandTelegram, TbBrandTwitter } from "react-icons/tb";
import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {

    const Items = [
        {
            name: 'فرصت های شغلی'
        },
        {
            name: 'بلاگ'
        },
        {
            name: 'باشگاه رانندگان'
        },
        {
            name: 'ثبت نام راننده اسنپ'
        },
        {
            name: 'پنل سازمانی'
        },
        {
            name: 'درباره ما '
        },
        {
            name: 'تماس با ما'
        },
    ]

    return (

        <div className="Footer">

            <div className="FooterBox">


                <div className="FooterItem">

                    {Items.map(item => (


                        <a href="#">{item.name}</a>




                    ))





                    }


                </div>
                <div className="FooterTel">

                    <TbBrandTwitter className="social" />
                    <SlSocialInstagram className="social" />
                    <SlSocialYoutube className="social" />
                    <CiLinkedin className="social" />
                    <TbBrandTelegram className="social" />

                </div>


            </div>


        </div>
    );
}

export default Footer;
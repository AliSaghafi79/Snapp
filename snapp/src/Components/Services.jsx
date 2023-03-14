import "../Stayle/Services.css";
import AppServic from "./AppServic";
import Data from "../Util";
import { useState } from "react";

const Services = () => {

    const [info] = useState(Data());


    return (

        <div className="Services">

            <div className="ServiceBox">

                <div className="P_Servic">
                    <p>یک اپلیکیشن، برای تمام نیاز‌ها</p>
                </div>
                <div className="AppServicBox">
                    {info.map(item => (

                        <AppServic
                            imge={item.imge}
                            name={item.name}
                            subname={item.subName}

                        />
                    ))}
                </div>

            </div>

        </div>
    )
}


export default Services;
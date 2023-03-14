const AppServic = ({ imge, name, subname }) => {
    return (

        <div className="AppServic">
            <img src={imge} alt="" width="62" height="62" />
            <h3 className="nameP">{name}</h3>
            <p className="subNameP">{subname}</p>


        </div>
    );
}

export default AppServic;
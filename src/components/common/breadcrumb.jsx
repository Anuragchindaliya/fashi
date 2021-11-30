import { Link, useLocation } from "react-router-dom"

const Breadcrumb = () => {
    const { pathname } = useLocation();

    const menus = pathname.substring(1).split("/");
    // console.log("breadcrumb menu", menu);
    return (
        <>
            {/* Breadcrumb Section Begin */}
            <div className="breacrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <Link to="/"><i className="fa fa-home" /> Home</Link>
                                {/* {menus.map((menu) => (<span>{menu}</span>))} */}
                                <span style={{textTransform:"capitalize"}}>{menus[menus.length - 1]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section Begin */}
        </>
    )
}

export default Breadcrumb

import { Link } from "react-router-dom"

const Breadcrumb = () => {
    
    return (
        <>
            {/* Breadcrumb Section Begin */}
            <div className="breacrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <Link to="/"><i className="fa fa-home" /> Home</Link>
                                <span>Shop</span>
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

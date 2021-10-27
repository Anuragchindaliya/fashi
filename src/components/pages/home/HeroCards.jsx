const HeroCards = () => {
    return (
        <>
            {/* Banner Section Begin */}
            <div className="banner-section spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="./assets/img/banner-1.jpg" alt="" />
                                <div className="inner-text">
                                    <h4>Men’s</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="./assets/img/banner-2.jpg" alt="" />
                                <div className="inner-text">
                                    <h4>Women’s</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="./assets/img/banner-3.jpg" alt="" />
                                <div className="inner-text">
                                    <h4>Kid’s</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Section End */}
        </>
    );
}
export default HeroCards;
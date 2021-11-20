import { Link } from "react-router-dom";
const CounterSection = () => {
    return (
        <>
            {/* Deal Of The Week Section Begin*/}
            <section className="deal-of-week set-bg spad" style={{backgroundImage:'url("./assets/img/time-bg.jpg")'}} data-setbg="./assets/img/time-bg.jpg">
                <div className="container">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h2>Deal Of The Week</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                                consectetur adipisicing elit </p>
                            <div className="product-price">
                                $35.00
                                <span>/ HanBag</span>
                            </div>
                        </div>
                        <div className="countdown-timer" id="countdown">
                            <div className="cd-item">
                                <span>56</span>
                                <p>Days</p>
                            </div>
                            <div className="cd-item">
                                <span>12</span>
                                <p>Hrs</p>
                            </div>
                            <div className="cd-item">
                                <span>40</span>
                                <p>Mins</p>
                            </div>
                            <div className="cd-item">
                                <span>52</span>
                                <p>Secs</p>
                            </div>
                        </div>
                        <Link to="/shop" className="primary-btn">Shop Now</Link>
                    </div>
                </div>
            </section>
            {/* Deal Of The Week Section End */}
        </>
    );
}
export default CounterSection;
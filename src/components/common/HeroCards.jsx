const HeroCards = () => {
    const cards = [
        {
            title: "Men’s",
            imgsrc: "./assets/img/banner-1.jpg"
        },
        {
            title: "Women’s",
            imgsrc: "./assets/img/banner-2.jpg"
        },
        {
            title: "Kid’s",
            imgsrc: "./assets/img/banner-3.jpg"
        },
        {
            title: "Others",
            imgsrc: "./assets/img/banner-1.jpg"
        }

    ]
    return (
        <div className="banner-section spad">
            <div className="container-fluid">
                <div className="row scrollable">
                    {cards.map((card,index) => (<div key={index} className="col-lg-4 col-8">
                        <div className="single-banner">
                            <img src={`${card.imgsrc}`} alt="" />
                            <div className="inner-text">
                                <h4>{card.title}</h4>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
}
export default HeroCards;
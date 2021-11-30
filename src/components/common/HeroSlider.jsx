import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
const HeroSlider = () => {
  const slides = [
    {
      title: "Black Friday",
      categories: ["bag", "kids", "man"],
      description: "Anurag Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      bgimg: "./assets/img/hero-1.jpg",
      targetLink: "shop",
      offerCard: {
        title: "sale",
        percent: "50%"
      }
    },
    {
      title: "Black Friday",
      categories: ["bag", "kids"],
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      bgimg: "./assets/img/hero-2.jpg",
      targetLink: "shop",
      offerCard: {
        title: "sale",
        percent: "50%"
      }
    }
  ];
  const owlSetting = {
    dots: false,
    items: 1,
    loop: true,
    dragClass: "owl-drag hero-items",
    smartSpeed: 1000,
    nav: true,
    navText: [
      '<i class="ti-angle-left"></i>',
      '<i class="ti-angle-right"></i>'
    ]
  }
  return (
    <>
      {/* Hero Section Begin */}
      <section className="hero-section">
        <OwlCarousel
          className="owl-theme"
          {...owlSetting}
        >
          {slides.map((slide, index) => (
            <div key={index}
              className="single-hero-items set-bg"
              style={{ backgroundImage: `url(${slide.bgimg})` }}
              data-setbg="./assets/img/hero-1.jpg"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <span>{slide.categories.join(",")}</span>
                    <h1>{slide.title}</h1>
                    <p>
                      {slide.description}
                    </p>
                    <Link to={`/${slide.targetLink}`} className="primary-btn">
                      Shop Now
                    </Link>
                  </div>
                </div>
                <div className="off-card">
                  <h2>
                    {slide.offerCard.title} <span>{slide.offerCard.percent}</span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </section>
      {/* Hero Section End */}
    </>
  );
}
export default HeroSlider;
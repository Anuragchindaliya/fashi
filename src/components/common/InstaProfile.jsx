const InstaProfile = () => {
  const instaProfiles = [
    {
      title: "colorlib_Collection1",
      bgimg: "./assets/img/insta-1.jpg"
    },
    {
      title: "colorlib_Collection2",
      bgimg: "./assets/img/insta-2.jpg"
    },
    {
      title: "colorlib_Collection3",
      bgimg: "./assets/img/insta-3.jpg"
    },
    {
      title: "colorlib_Collection4",
      bgimg: "./assets/img/insta-4.jpg"
    },
    {
      title: "colorlib_Collection5",
      bgimg: "./assets/img/insta-5.jpg"
    },
    {
      title: "colorlib_Collection6",
      bgimg: "./assets/img/insta-6.jpg"
    }
  ]
  return (
    <>
      {/* Instagram Section Begin */}
      <div className="instagram-photo">
        {instaProfiles.map((profile) => (
          <div className="insta-item set-bg" style={{ backgroundImage: `url(${profile.bgimg})` }} data-setbg="img/insta-1.jpg">
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5><a href="/#" target="_blank">{profile.title}</a></h5>
            </div>
          </div>
        ))}
      </div>
      {/* Instagram Section End */}
    </>
  );
}
export default InstaProfile;
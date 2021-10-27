import CounterSection from "./home/CounterSection";
import HeroSlider from "./home/HeroSlider";
import InstaProfile from "./home/InstaProfile";
import HeroCards from "./home/HeroCards";
import CategoriesSlider from "./home/CategoriesSlider";


const Home = ({ products,categories:{data,loading,error} }) => {
  console.log(data, loading, error);
  
  return (  
    <>
      <HeroSlider />

      <HeroCards />
      {loading && <p>Loading...</p>}
      {error.length>0 && <p>{error}</p>}
      {
        !loading && data && data.length>3 &&
        <CategoriesSlider products={products} cats={[data[0], data[1], data[2], data[3]]} />
      }
      <CounterSection />
      {loading&& <p>Loading...</p>}
      {
        !loading && data && data.length>6 &&
        <CategoriesSlider products={products} right cats={[data[4], data[5], data[6]]}/>
      }
      

      <InstaProfile />
    </>
  );
};
export default Home;

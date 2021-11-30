import CounterSection from "components/common/CounterSection";
import HeroSlider from "components/common/HeroSlider";
import InstaProfile from "components/common/InstaProfile";
import HeroCards from "components/common/HeroCards";
import CategoriesSlider from "components/common/CategoriesSlider";


const Home = ({ products, categories: { data, loading, error } }) => {
  return (
    <>
      <HeroSlider />

      <HeroCards />
      {loading && <p>Loading...</p>}
      {error.length > 0 && <p>{error}</p>}
      {
        !loading && data?.length > 3 &&
        <CategoriesSlider products={products} cats={data.filter(c => c.parent === 0).slice(0, 4)} />
      }
      <CounterSection />
      {loading && <p>Loading...</p>}
      {
        !loading && data && data.length > 6 &&
        <CategoriesSlider products={products} right cats={data.filter(c => c.parent === 0).slice(4, 7)} />
      }


      <InstaProfile />
    </>
  );
};
export default Home;

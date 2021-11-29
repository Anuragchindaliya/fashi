import BrandsFilter from "./brandsFilter";
import CategoriesFilter from "./categoriesFilter";
import ColorFilter from "./colorFilter";
import PriceFilter from "./priceFilter";
import SizeFilter from "./sizeFilter";
import TagsFilter from "./tagsFilter";
const Sidebar = ({ categories: { data: categories } }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
        <CategoriesFilter categories={categories} />
        <BrandsFilter />
        <PriceFilter />
        <ColorFilter />
        <SizeFilter />
        <TagsFilter />
      </div>
    </>
  );
};
export default Sidebar;

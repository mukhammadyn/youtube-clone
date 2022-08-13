import hoc from "../../../utils/hoc";
import { FilterBadges } from "../../molecules/filter-badges/filter-badges.component";
import { useCategoriesFIlterProps } from "./categories-filter.props";
import { CategoriesFilterWrapper } from "./categories-filter.style";

export const CategoriesFilter = hoc(useCategoriesFIlterProps, ({categories}) => {
  return (
    <CategoriesFilterWrapper>
      <FilterBadges categories={categories} />
    </CategoriesFilterWrapper>
  );
});

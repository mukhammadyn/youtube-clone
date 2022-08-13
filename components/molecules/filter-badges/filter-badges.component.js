import { nanoid } from "@reduxjs/toolkit";
import hoc from "../../../utils/hoc";
import { BadgeBtn } from "../../atoms/badge-btn/badge-btn.component";
import { useFilterBadgesProps } from "./filter-badges.props";
import { FilterBadgesWrapper } from "./filter-badges.style";

export const FilterBadges = hoc(
  useFilterBadgesProps,
  ({ active, categories, handleCategoriesClick, }) => {
    return (
      <FilterBadgesWrapper onClick={handleCategoriesClick}>
        {categories?.length > 0 &&
          categories.map((category) => (
            <BadgeBtn
              key={nanoid()}
              active={active.id === category.id}
              id={category.id}
            >
              {category.title}
            </BadgeBtn>
          ))}
      </FilterBadgesWrapper>
    );
  }
);

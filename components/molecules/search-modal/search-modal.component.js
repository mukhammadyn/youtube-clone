import { Button } from "../../atoms/button";
import { SearchForm } from "../search-form";

import { SearchFormModalWrapper } from "./search-modal.style";

import BackIcon from "../../../assets/img/icon-back-arrow.svg";

export const SearchFormModal = ({ isOpen, setOpen }) => {
  const handleBackClick = () => setOpen(false);

  return (
    <>
      {isOpen && (
        <SearchFormModalWrapper>
          <Button onClick={handleBackClick}>
            <BackIcon />
          </Button>
          <SearchForm isVisible={true} />
        </SearchFormModalWrapper>
      )}
    </>
  );
};

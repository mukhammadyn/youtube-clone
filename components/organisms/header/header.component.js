import hoc from "../../../utils/hoc";
import { HeaderButtons } from "../../molecules/header-buttons";
import { LogoNavBtn } from "../../molecules/logo-navbtn";
import { SearchForm } from "../../molecules/search-form";
import { SearchFormModal } from "../../molecules/search-modal/search-modal.component";
import { useHeaderProps } from "./header.props";
import { HeaderWrapper } from "./header.style";

export const Header = hoc(useHeaderProps, ({isOpen, setOpen, themeColor}) => {
  return (
    <HeaderWrapper themeColor={themeColor}>
      <LogoNavBtn />
      <SearchForm />
      <HeaderButtons setOpen={setOpen} />
      <SearchFormModal isOpen={isOpen} setOpen={setOpen} />
    </HeaderWrapper>
  );
});

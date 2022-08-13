import hoc from "../../../utils/hoc";
import { Field } from "../../atoms/field";
import { FieldBtn } from "../../atoms/field-btn";
import { SearchFormVoiceBtn, SearchFormWrapper } from "./search-form.style";
import { useSearchFormProps } from "./search-form.props";

import SearchIcon from "../../../assets/img/icon-search.svg";
import Microphone from "../../../assets/img/icon-microphone.svg";

export const SearchForm = hoc(
  useSearchFormProps,
  ({ fieldRef, handleFormSubmit, isVisible=false }) => {
    return (
      <SearchFormWrapper isVisible={isVisible} action="#" method="GET" onSubmit={handleFormSubmit}>
        <Field
          ref={fieldRef}
          type="search"
          name="search_video"
          label="Search"
          placeholder="Search"
        />
        <FieldBtn>
          <SearchIcon />
        </FieldBtn>
        <SearchFormVoiceBtn>
          <FieldBtn round>
            <Microphone />
          </FieldBtn>
        </SearchFormVoiceBtn>
      </SearchFormWrapper>
    );
  }
);

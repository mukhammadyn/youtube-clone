import { useCallback, useEffect, useRef, useState } from "react";

export const useSearchFormProps = () => {
  const fieldRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(fieldRef.current.value);
  };

  return {
    fieldRef,
    handleFormSubmit,
  };
};

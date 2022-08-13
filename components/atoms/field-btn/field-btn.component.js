import { FieldBtnWrapper } from "./field-btn.style"

export const FieldBtn = ({themeColor, children, round}) => {
  return <FieldBtnWrapper round={round} themeColor={themeColor}>
    {children}
  </FieldBtnWrapper>
}

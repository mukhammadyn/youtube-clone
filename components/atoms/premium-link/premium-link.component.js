import { PremiumLinkWrapper } from "./premium-link.style"

export const PremiumLink = ({children}) => {
  return <PremiumLinkWrapper href="https://youtube.com" target="_blank">
    {children}
  </PremiumLinkWrapper>
}

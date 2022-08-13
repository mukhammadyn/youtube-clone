import Image from "next/image"
import { Wrapper } from "./profile-image.style"

export const ProfileImage = ({src, title=""}) => {
  return <Wrapper>
    <Image src={src} alt={title} width="30" height="30" layout="responsive" objectFit="cover" />
  </Wrapper>
}

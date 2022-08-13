import Image from "next/image";
import { VideoPosterWrapper } from "./video-poster.style";

export const VideoPoster = ({ src, title = "" }) => {
  return (
    <VideoPosterWrapper>
      <Image src={src} alt={title} width="290" height="162" layout="fixed" />
    </VideoPosterWrapper>
  );
};

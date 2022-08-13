import Image from "next/image";
import { Button } from "../../atoms/button/button.component";
import { PremiumLink } from "../../atoms/premium-link";

import CloseIcon from "../../../assets/img/icon-close.svg";
import YoutubeLogo from "../../../assets/img/logo-youtube-premium.svg";
import adBackgroundImage from "../../../assets/img/bg-ad.jpg";

import {
  PremiumAdContent,
  PremiumAdDesc,
  PremiumAdBg,
  PremiumAdWrapper,
} from "./premium-ad.style";
import { useState } from "react";

export const PremiumAd = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <PremiumAdWrapper>
          <PremiumAdContent>
            <YoutubeLogo />
            <PremiumAdDesc>Tu contenido favorito, sin publicidad</PremiumAdDesc>
            <PremiumLink>Prueba de 1 mes</PremiumLink>
          </PremiumAdContent>
          <Button onClick={() => setOpen(false)}>
            <CloseIcon />
          </Button>
          <PremiumAdBg>
            <Image
              src={adBackgroundImage}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </PremiumAdBg>
        </PremiumAdWrapper>
      )}
    </>
  );
};

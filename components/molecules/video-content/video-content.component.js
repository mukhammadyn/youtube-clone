import Link from "next/link";
import { ProfileImage } from "../../atoms/profile-image";
import { Subtitle } from "../../atoms/subtitle/subtitle.component";
import { Title } from "../../atoms/title/title.component";
import { VideoDuration } from "../../atoms/video-duration";
import { VideoPoster } from "../../atoms/video-poster";

import {
  VideoContentHeading,
  VideoContentLink,
  VideoContentPoster,
  VideoContentTitle,
  VideoContentWrapper,
} from "./video-content.style";

export const VideoContent = ({
  title,
  src,
  views,
  duration,
  modified,
  profileImg,
}) => {
  return (
    <VideoContentWrapper>
      <VideoContentPoster>
        <VideoPoster src={src} title={title} />
        <VideoDuration duration={duration} />
      </VideoContentPoster>
      <VideoContentHeading>
        <ProfileImage src={profileImg} title={title} />
        <VideoContentTitle>
          <Title><Link href='/' passHref><VideoContentLink>{title}</VideoContentLink></Link></Title>
          <Subtitle check>Name profile</Subtitle>
          <Subtitle>27K views • 1 day ago</Subtitle>
        </VideoContentTitle>
      </VideoContentHeading>
    </VideoContentWrapper>
  );
};

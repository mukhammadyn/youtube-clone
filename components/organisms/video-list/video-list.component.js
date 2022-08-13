import lionImg from "../../../assets/img/lion.jpg";
import userImg from "../../../assets/img/user-avatar.png";
import { VideoContent } from "../../molecules/video-content";
import { VideoListWrapper } from "./video-list.style";

export const VideoList = () => {
  return (
    <VideoListWrapper>
      <VideoContent
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        src={lionImg}
        duration="29:58"
        profileImg={userImg}
      />
      <VideoContent
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        src={lionImg}
        duration="29:58"
        profileImg={userImg}
      />
      <VideoContent
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        src={lionImg}
        duration="29:58"
        profileImg={userImg}
      />
      <VideoContent
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        src={lionImg}
        duration="29:58"
        profileImg={userImg}
      />
      <VideoContent
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        src={lionImg}
        duration="29:58"
        profileImg={userImg}
      />
    </VideoListWrapper>
  );
};

import { Button } from "../../atoms/button";

import CameraIcon from "../../../assets/img/icon-camera-plus.svg";
import GroupIcon from "../../../assets/img/icon-group.svg";
import BellIcon from "../../../assets/img/icon-bell.svg";
import SearchIcon from "../../../assets/img/icon-search.svg";
import userAvatar from "../../../assets/img/user-avatar.png";

import {
  HeaderButtonsItem,
  HeaderButtonsWrapper,
} from "./header-buttons.style";
import Image from "next/image";

export const HeaderButtons = ({ isVisible = true, setOpen }) => {
  return (
    <HeaderButtonsWrapper>
      <Button>
        <CameraIcon />
      </Button>
      <Button>
        <GroupIcon />
      </Button>
      <Button>
        <BellIcon />
      </Button>
      <HeaderButtonsItem isVisible={isVisible}>
        <Button onClick={() => setOpen(true)}>
          <SearchIcon />
        </Button>
      </HeaderButtonsItem>
      <Button round>
        <Image src={userAvatar} alt="User avatar" width="27" height="27" />
      </Button>
    </HeaderButtonsWrapper>
  );
};

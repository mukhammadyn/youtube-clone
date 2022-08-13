import Image from "next/image";
import hoc from "../../../utils/hoc";

import { BarNav } from "../../atoms/bar-nav";
import { NavbarComponent } from "../../molecules/navbar-component";
import { NavbarWrapper } from "./navbar.style";
import { useNavbarProps } from "./navbar.props";

import HomeIcon from "../../../assets/img/icon-home.svg";
import CompassIcon from "../../../assets/img/icon-compass.svg";
import SubIcon from "../../../assets/img/icon-subscriptions.svg";
import LibIcon from "../../../assets/img/icon-library.svg";
import HistoryIcon from "../../../assets/img/icon-history.svg";
import YourVideosIcon from "../../../assets/img/icon-your-videos.svg";
import WatchLaterIcon from "../../../assets/img/icon-watch-later.svg";
import LikedIcon from "../../../assets/img/icon-liked.svg";
import PremiumIcon from "../../../assets/img/icon-premium.svg";
import GamingIcon from "../../../assets/img/icon-gaming.svg";
import LiveIcon from "../../../assets/img/icon-live.svg";
import GroupIcon from "../../../assets/img/icon-apps.svg";
import SportsIcon from "../../../assets/img/icon-sports.svg";
import SettingsIcon from "../../../assets/img/icon-settings.svg";
import ReportIcon from "../../../assets/img/icon-report.svg";
import HelpIcon from "../../../assets/img/icon-help.svg";

import alexNewsImg from "../../../assets/img/alex-news.png";
import jacobImg from "../../../assets/img/jacob-music.png";
import unityImg from "../../../assets/img/unity.png";
import guitarImg from "../../../assets/img/guitar-lessons.png";
import rallyImg from "../../../assets/img/cicruit-rally.png";
import travelImg from "../../../assets/img/travellers.png";
import machinesImg from "../../../assets/img/machines.png";

export const Navbar = hoc(
  useNavbarProps,
  ({ active, handleOnClick, openBar, themeColor }) => {
    return (
      <>
        {openBar && (
          <NavbarWrapper themeColor={themeColor} onClick={handleOnClick}>
            <NavbarComponent>
              <BarNav active={active} id="1">
                <HomeIcon />
                Home
              </BarNav>
              <BarNav active={active} id="2">
                <CompassIcon />
                Explore
              </BarNav>
              <BarNav active={active} id="3">
                <SubIcon />
                Subscriptions
              </BarNav>
            </NavbarComponent>
            <NavbarComponent>
              <BarNav active={active} id="4">
                <LibIcon />
                Library
              </BarNav>
              <BarNav active={active} id="5">
                <HistoryIcon />
                History
              </BarNav>
              <BarNav active={active} id="6">
                <YourVideosIcon />
                Your Videos
              </BarNav>
              <BarNav active={active} id="7">
                <WatchLaterIcon />
                Watch Later
              </BarNav>
              <BarNav active={active} id="8">
                <LikedIcon />
                Liked Videos
              </BarNav>
            </NavbarComponent>
            <NavbarComponent title="Subscriptions">
              <BarNav active={active} id="9">
                <Image
                  src={jacobImg}
                  width="24"
                  height="24"
                  alt="Jacob Music"
                />
                Jacob Music
              </BarNav>
              <BarNav active={active} id="10">
                <Image src={unityImg} width="24" height="24" alt="Unity" />
                Unity
              </BarNav>
              <BarNav active={active} id="11">
                <Image
                  src={guitarImg}
                  width="24"
                  height="24"
                  alt="Guitar Lessons"
                />
                Guitar Lessons
              </BarNav>
              <BarNav active={active} id="12">
                <Image
                  src={alexNewsImg}
                  width="24"
                  height="24"
                  alt="Alex News"
                />
                Alex News
              </BarNav>
              <BarNav active={active} id="13">
                <Image
                  src={rallyImg}
                  width="24"
                  height="24"
                  alt="Circuit Rally"
                />
                Circuit Rally
              </BarNav>
              <BarNav active={active} id="14">
                <Image
                  src={travelImg}
                  width="24"
                  height="24"
                  alt="Travellers"
                />
                Travellers
              </BarNav>
              <BarNav active={active} id="15">
                <Image
                  src={machinesImg}
                  width="24"
                  height="24"
                  alt="Machines"
                />
                Machines
              </BarNav>
            </NavbarComponent>
            <NavbarComponent title="More from youtube">
              <BarNav active={active} id="16">
                <PremiumIcon />
                YouTube Premium
              </BarNav>
              <BarNav active={active} id="17">
                <GamingIcon />
                Gaming
              </BarNav>
              <BarNav active={active} id="18">
                <LiveIcon />
                Live
              </BarNav>
              <BarNav active={active} id="19">
                <GroupIcon />
                Learning
              </BarNav>
              <BarNav active={active} id="20">
                <SportsIcon />
                Sports
              </BarNav>
            </NavbarComponent>
            <NavbarComponent>
              <BarNav active={active} id="21">
                <SettingsIcon />
                Settings
              </BarNav>
              <BarNav active={active} id="22">
                <ReportIcon />
                Report history
              </BarNav>
              <BarNav active={active} id="23">
                <HelpIcon />
                Help
              </BarNav>
            </NavbarComponent>
          </NavbarWrapper>
        )}
      </>
    );
  }
);

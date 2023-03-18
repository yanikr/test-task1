import styled from 'styled-components';
import bgImage from '../../assets/images/bg.png';
export const Container = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const LogoWrap = styled.div`
  height: 22px;
  width: 76px;
  position: absolute;
  left: 20px;
  top: 20px;
`;
export const CardWrap = styled.div`
  height: 460px;
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
  position: relative;
`;
export const BgImage = styled.div`
  height: 168px;
  width: 308px;
  background-image: url(${bgImage});
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
`;
export const AvatarLineLeft = styled.div`
  height: 8px;
  z-index: 1;

  width: 150px;
  position: absolute;
  left: 0px;
  top: 220px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const AvatarLineRight = styled.div`
  height: 8px;
  z-index: 1;

  width: 150px;
  position: absolute;
  right: 0px;
  top: 220px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarFrame = styled.div`
  position: relative;
  width: 71px;
  height: 71px;
  left: 38.3%;
  top: -4%;
  border: 9px solid #ebd8ff;

  &:before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: -9px;
    left: -9px;
    width: 125.5%;
    height: 125.5%;
    border-radius: 50%;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }
  z-index: 2;
  border-radius: 50%;
`;
export const AvatarBox = styled.div`
  width: 62px;
  height: 62px;
  border-radius: inherit;
  position: absolute;
  top: -2%;
  overflow: hidden;
  width: 72.5px;
  height: 72.5px;
  background: inherit;
  left: -2%;
`;
export const UserAvatar = styled.div`
  width: 80px;
  height: 80px;
  background-size: cover;
`;

export const StatsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TweetStats = styled.p`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const FollowerStats = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 26px;
  color: #ebd8ff;
`;

export const FollowButton = styled.button`
  height: 50px;
  width: 196px;
  color: #373737;

  background: #ebd8ff;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;
export const Unfollow = styled.button`
  height: 50px;
  width: 196px;
  color: #373737;

  background: #5cd3a8;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;

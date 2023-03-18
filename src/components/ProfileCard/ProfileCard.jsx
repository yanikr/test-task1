import { useEffect, useState } from 'react';
import LogoIcon from '../../assets/svg/logo.svg';
import userAvatar from '../../assets/images/user_avatar.png';
import {
  AvatarBox,
  AvatarFrame,
  AvatarLineLeft,
  BgImage,
  CardWrap,
  Container,
  AvatarLineRight,
  UserAvatar,
  TweetStats,
  StatsWrap,
  FollowerStats,
  FollowButton,
  Unfollow,
  LogoWrap,
} from './ProfileCard.styled';

export const ProfileCard = () => {
  const [followStatus, setFollowStatus] = useState(
    localStorage.getItem('followStatus') === 'true'
  );
  const [followersCount, setFollowersCount] = useState(() => {
    const count = parseInt(localStorage.getItem('followersCount'));
    return count ? count : 100500;
  });
  const handleFollowButtonAction = () => {
    setFollowStatus(true);
    setFollowersCount(prevstate => prevstate + 1);
  };
  const handleUnfollowButtonAction = () => {
    setFollowersCount(prevstate => prevstate - 1);
    setFollowStatus(false);
  };
  useEffect(() => {
    localStorage.setItem('followStatus', followStatus);
    localStorage.setItem('followersCount', followersCount);
  }, [followStatus, followersCount]);

  return (
    <Container>
      <CardWrap>
        <LogoWrap>
          <img src={LogoIcon} alt="" />
        </LogoWrap>
        <BgImage />
        <AvatarLineLeft />
        <AvatarFrame>
          <AvatarBox>
            <UserAvatar>
              <img src={userAvatar} alt="avatar" />
            </UserAvatar>
          </AvatarBox>
        </AvatarFrame>
        <AvatarLineRight />
        <StatsWrap>
          <TweetStats>777 TWEETS</TweetStats>
          <FollowerStats>{`${followersCount.toLocaleString(
            'en-US'
          )} Followers`}</FollowerStats>
          {!followStatus ? (
            <FollowButton type="button" onClick={handleFollowButtonAction}>
              Follow
            </FollowButton>
          ) : (
            <Unfollow type="button" onClick={handleUnfollowButtonAction}>
              Following
            </Unfollow>
          )}
        </StatsWrap>
      </CardWrap>
    </Container>
  );
};

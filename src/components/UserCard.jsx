import { spring } from 'framer-motion';
import { useState } from 'react';
import { Avatar, Card, CardBody, CardMedia, CardText, MoreInfo, User, UsernameInfo,Username,UsernameText, CityInfo, City, CityText,MetaOtherInfoList,MetaOtherInfoListItem } from './UserCardStyled';


const UserCard = ({user}) => {

  const [isHovered, setIsHovered] = useState(false);

  const animatedCardMedia = isHovered ? {height:"170px"} : {height:"auto"};
  const showOtherInfo = {opacity:1,height:"auto"};
  const hideOtherInfo = {opacity:0, height:0};
  const animatedOther = isHovered ? hideOtherInfo : showOtherInfo;

  const animatedMetaList = isHovered ? showOtherInfo : hideOtherInfo;

  const transition = {
    duration:0.25,
    type:'spring',
    bounce:0.2,
    ease: 'easeIn',
  };
  
  return (
    <Card onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)} key={user.login.uuid}>
      <CardMedia animate={animatedCardMedia} transition{...transition}>
        <img src={user?.picture.large} alt={user?.name.first}/>
      
      </CardMedia>
      <CardBody>
        <CardText>
            <span>Hello my name is</span>
            <h3>{`${user?.name.first} ${user.name.last}`}</h3>
        </CardText>
        {!isHovered && (
          <MoreInfo animate={animatedOther}>
          <User>
            <Avatar>
            <img src={user?.picture.medium} />
            </Avatar>
            <UsernameInfo>
            <span>Username: </span>
              <Username>
                <UsernameText>{user?.login.username}</UsernameText>
              </Username>
            </UsernameInfo>
          </User>
          <CityInfo>
            <span>City: </span>
            <City>
              <CityText>{user?.location.city}</CityText>
            </City>
          </CityInfo>
        </MoreInfo>)}

        <MetaOtherInfoList animate={animatedMetaList}>
          <MetaOtherInfoListItem>
            <div>Gender: </div>
            <div>{user?.gender}</div>
          </MetaOtherInfoListItem>
          <MetaOtherInfoListItem>
            <div>Email: </div>
            <div>{user.email}</div>
          </MetaOtherInfoListItem>
          <MetaOtherInfoListItem>
            <div>Phone#: </div>
            <div>{user.phone}</div>
          </MetaOtherInfoListItem>
        </MetaOtherInfoList>
      </CardBody>
    </Card>
   
  )
}

export default UserCard

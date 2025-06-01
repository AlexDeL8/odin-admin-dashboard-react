import Icon from '@mdi/react';
import { mdiStarPlusOutline } from '@mdi/js';
import { mdiEyePlusOutline } from '@mdi/js';
import { mdiShareVariantOutline } from '@mdi/js';
import ProfilePic from './generic/ProfilePic';
import defaultProfilePic from '../assets/avatar_default_02_A5A4A4.png'

import type { Annoucement } from "../announcements"
import type { Project } from "../projects"
import type { TrendingUser } from "./ContentSection"

type ContentCardProps = {
  data: Project | Annoucement[] | TrendingUser[];
  divider?: boolean;
}

const ContentCard = (props: ContentCardProps) => {
  function isTrendingUserArray(data: Annoucement | TrendingUser): data is TrendingUser {
    return "handle" in data
  }

  function isAnnoucement(data: Annoucement | TrendingUser): data is Annoucement {
    return "title" in data && "description" in data
  }

  let card = null
  if(Array.isArray(props.data)) {
    card =
    <>
      {props.data.map((data) => {
        if(isTrendingUserArray(data)) {
          return (
            <div className='trendingUserContainer'>
              <ProfilePic image={data.profilePic ?? defaultProfilePic} />
              <div className='trendingUserInfo'>
                <div className='cardTitle'>@{data.handle}</div>
                <div className='cardDescription'>{data.title}</div>
              </div>
              {props.divider ? <hr /> : null}
            </div>
          )
        } else if(isAnnoucement(data)) {
          return (
            <div className='annoucementContainer'>
              <div className='cardTitle'>{data.title}</div>
              <div className='cardDescription'>{data.description}</div>
              {props.divider ? <hr /> : null}
            </div>
          )
        }
      })}
    </>
  } else {
    card = 
    <>
      <div className='cardTextContainer'>
        <div className='cardTitle'>{props.data.name}</div>
        <div className='cardDescription'>{props.data.description}</div>
      </div>
      <div className='cardIconContainer'>
        <Icon path={mdiStarPlusOutline} size={1} />
        <Icon path={mdiEyePlusOutline} size={1} />
        <Icon path={mdiShareVariantOutline} size={1} />
      </div>
    </>
  }
  return (
    <>
      {card}
    </>
  )
}

export default ContentCard
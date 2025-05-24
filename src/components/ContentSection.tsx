import type { Annoucement } from "../announcements";
import type { Project } from "../projects";
import type { User } from "../users";
import ContentCard from "./ContentCard";

export type TrendingUser = Pick<Partial<User>, 'profilePic' | 'handle' | 'title'>
type ContentSectionProps = {
  title?: string;
  cardData?: Project[] | Annoucement[] | TrendingUser[];
}

const ContentSection = (props: ContentSectionProps) => {
  const title = props.title ? <div className='sectionTitle'>{props.title}</div> : null
  return (
    <>
      {title}
      <div className='contentCardContainer'>
        {props.cardData?.map((data) => {
          return (
            <div className='contentCard'>
              <ContentCard data={data} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ContentSection
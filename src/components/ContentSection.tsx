import type { Annoucement } from "../announcements";
import type { Project } from "../projects";
import type { User } from "../users";
import ContentCard from "./ContentCard";

export type TrendingUser = Pick<Partial<User>, 'profilePic' | 'handle' | 'title'>
export type SingleCardData = {
  type: "single";
  data: Project[];
}
export type ArrayCardData = {
  type: "array";
  data: TrendingUser[];
}
export type ArrayCardDivData = {
  type: "arrayDiv";
  data: Annoucement[]
}

type ContentSectionProps = {
  title?: string;
  cardData?: SingleCardData | ArrayCardData | ArrayCardDivData;
}

const ContentSection = (props: ContentSectionProps) => {
  const title = props.title ? <div className='sectionTitle'>{props.title}</div> : null
  let sectionContent = null
  switch (props.cardData?.type) {
    case "single":
      sectionContent = 
        props.cardData?.data.map((data) => {
          return (
            <div className={`contentCard ${data.priority}Priority`}>
              <ContentCard data={data} />
            </div>
          )
        })
        break;
    case "array":
      sectionContent = 
        <div className='contentCard trendingUsersContentCard'>
          <ContentCard data={props.cardData.data} />
        </div>
        break;
    case "arrayDiv":
      sectionContent =
        <div className='contentCard annoucementContentCard'>
          <ContentCard data={props.cardData.data} divider={true} />
        </div>
      break;
    default:
      console.error("Unknown ContentSection.tsx type")
      break;
  }
  return (
    <>
      {title}
      <div className='sectionCardContainer'>
        {sectionContent}
      </div>
    </>
  )
}

export default ContentSection
import type { Annoucement } from "../announcements"
import type { Project } from "../projects"
import type { TrendingUser } from "./ContentSection"

type ContentCardProps = {
  data: Project | Annoucement | TrendingUser
}

const ContentCard = (props: ContentCardProps) => {
  return (
      <p>Card Placeholder</p>
  )
}

export default ContentCard
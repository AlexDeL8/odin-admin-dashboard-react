import type { Annoucement } from "../announcements"
import type { Project } from "../projects"
import type { User } from "../users"

type ContentCardProps = {
  data: Project | Annoucement | User
}

const ContentCard = (props: ContentCardProps) => {
  return (
      <p>Card Placeholder</p>
  )
}

export default ContentCard
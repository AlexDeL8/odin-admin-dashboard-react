import { useEffect, useState } from "react"

import ContentSection from "./ContentSection"
import "./DashboardContent.css"
import type { Annoucement } from "../announcements";
import type { Project } from "../projects";
import type { User } from "../users";

const DashboardContent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [annoucements, setAnnoucements] = useState<Annoucement[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    const getImports = async () => {
      const { projectList } = await import("../projects");
      const { annoucementList } = await import("../announcements");
      const { userList } = await import("../users");
      setProjects(projectList);
      setAnnoucements(annoucementList);
      setUsers(userList);
    }

    getImports();
  }, [])

  return (
    <>
        <div className='contentContainer mainContentContainer'>
            <ContentSection title="Your Projects" cardData={{type: "single", data: projects}} />
        </div>

        <div className='contentContainer secondaryContentContainer'>
            <ContentSection title="Annoucements" cardData={{type: "arrayDiv", data: annoucements}} />
            <ContentSection title="Trending" cardData={{type: "array", data: users}} />
        </div>
    </>
  )
}

export default DashboardContent
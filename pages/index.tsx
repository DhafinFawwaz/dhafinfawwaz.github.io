import Head from "next/head";
import ProfilePage from "@/components/profile";
import SkillPage from "@/components/skills";
import Qualification from "@/components/qualification";
import AchievementPage from "@/components/achievement";
import ProjectPage from "@/components/projects";
import ContactPage from "@/components/contact";

export default function Home() {
  return (<>
    <Head>
      <title>Dhafin Fawwaz Ikramullah</title>
      <meta name="keywords" content="Dhafin Fawwaz"/>
      <meta name="author" content="Dhafin Fawwaz Ikramullah"></meta>
      <meta name="description" content="Portfolio which consist of projects about Mobile Development, Game Development, and Web Development"/>
    </Head>
    <main className="w-full flex justify-center">
      <div className="max-w-4xl">
        <ProfilePage/>
        <SkillPage></SkillPage>
        <Qualification></Qualification>
        <AchievementPage></AchievementPage>
        <ProjectPage></ProjectPage>
        <ContactPage></ContactPage>
      </div>
    </main>
  </>  
  );
}

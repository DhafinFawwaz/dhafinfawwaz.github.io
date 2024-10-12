import Head from "next/head";
import ProfilePage from "@/components/Profile";
import SkillPage from "@/components/Skills";
import Qualification from "@/components/Qualification";
import AchievementPage from "@/components/Achievement";
import ProjectPage from "@/components/Projects";
import ContactPage from "@/components/Contact";
import NavbarPage from "@/components/Navbar";

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
        <NavbarPage></NavbarPage>
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

import Head from "next/head";
import ProfilePage from "@/components/profile";
import SkillPage from "@/components/skills";
import Qualification from "@/components/qualification";
import AchievementPage from "@/components/achievement";
import ProjectPage from "@/components/projects";
import ContactPage from "@/components/contact";
import { useEffect, useRef } from "react";

export default function Home() {

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            window.history.replaceState(null, null!, `#${id}`);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);


  return (<>
    <Head>
      <title>Dhafin Fawwaz Ikramullah</title>
      <meta name="keywords" content="Dhafin Fawwaz"/>
      <meta name="author" content="Dhafin Fawwaz Ikramullah"></meta>
      <meta name="description" content="Portfolio which consist of projects about Mobile Development, Game Development, and Web Development"/>
    </Head>
    <main className="w-full flex justify-center">
      <div className="max-w-4xl">
        <ProfilePage ref={(el) => (sectionRefs.current[0] = el)}/>
        <SkillPage></SkillPage>
        <Qualification ref={(el) => (sectionRefs.current[1] = el)} ></Qualification>
        <AchievementPage ref={(el) => (sectionRefs.current[2] = el)} ></AchievementPage>
        <ProjectPage ref={(el) => (sectionRefs.current[3] = el)} ></ProjectPage>
        <ContactPage ref={(el) => (sectionRefs.current[4] = el)} ></ContactPage>
      </div>
    </main>
  </>  
  );
}

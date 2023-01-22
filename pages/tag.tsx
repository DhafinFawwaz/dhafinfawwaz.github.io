import styles from '../styles/tag.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Projects from '../components/projects'
import { tags, ActiveTags } from '../json/tags'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function ProjectByTag() {
  const router = useRouter();
  const selectedTagSlug = router.query.tag; //selecting tag from projects
  
  
  let initialActive:ActiveTags[] = []
  tags.forEach(tag => initialActive.push({isActive:false, id:tag.id}))
  const [active, setActive] = useState<ActiveTags[]>(initialActive);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    
    setActive(active.map((activeTag: ActiveTags) => 
      (tags.find(tag => tag.slug === selectedTagSlug)?.id === activeTag.id) ? 
        {isActive:true, id:activeTag.id}
        : {isActive:activeTag.isActive, id:activeTag.id}
    ));

  }, [router.query.tag]);
  
  

  function onTagClick(clickedId: number){
    router.replace('/tag', undefined, { shallow: true });
    setActive(active.map((activeTag: ActiveTags) => 
      (clickedId === activeTag.id) ? 
        {isActive:!activeTag.isActive, id:activeTag.id}
        : {isActive:activeTag.isActive, id:activeTag.id}
    ));
  }

  
  
  const selectedTagTitle: string | undefined = tags.find(tag => tag.slug === selectedTagSlug)?.title;
  const pageTitle = selectedTagTitle ? selectedTagTitle : "Tags";
  const pageDescription = selectedTagTitle ? `Project with tag ${selectedTagTitle}` : "Filter projects with tags"; 
  return (
    <>
      <Head>
        <title>{`Dhafin Fawwaz | ${pageTitle}`}</title>
        <meta name="keywords" content="tag"/>
        <meta name="description" content={`${pageDescription}`}/>
      </Head>

      <section className={`section`}>
        <h1 className="section__title">Projects</h1>
        <span className="section__subtitle">Filter projects by tag</span>

        <div className="container">

          <div className={styles.container}>
            {tags.map((tag) => (
              <div key={tag.id}
              
              style={{backgroundColor: tag.bgColor, color: tag.textColor}} 
              
              className={`${styles.tag} ${(active.find(child => child.id===tag.id)?.isActive) ? (styles.active):(styles.inactive)}`} onClick={() => onTagClick(tag.id)}>

                  <div className={styles.tag__icon} style={{backgroundColor: tag.bgColor}}>
                    {active.find(child => child.id===tag.id)?.isActive ? (
                      <i className="uil uil-check"></i>   
                    ):(
                      <i className="uil uil-times"></i>
                    )}
                  </div>
                  <div className={styles.tag__title__container}>
                    <div className={styles.tag__title}>
                      {tag.title}
                    </div>
                  </div>
                
              </div>)

            )}
          </div>

        </div>

        <Projects activeTags={active}/>
      </section>

    </>
  )
}

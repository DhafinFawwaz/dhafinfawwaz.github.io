import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import menus from "../json/navbar.json"
import { useState } from 'react'
import { useEffect } from 'react'


export default function Navbar() {
  const [active, setActive] = useState<string>(styles.inactive);
  const [darkTheme, setDarkTheme] = useState<string>("sun");
  const [showScroll, setShowScroll] = useState<string>(styles.scroll__hidden);

  function onMenuClick(){
    setActive((isActive: string) => {
      if(isActive === styles.inactive)return styles.active;
      return styles.inactive;
    })
  }

  function onThemeClick(){
    setDarkTheme((isDarkTheme: string) => {
      if(isDarkTheme === "moon")
      {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        return "sun";
      }
      else
      {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        return "moon";
      }
    })
  }

  useEffect(function onFirstMount() {
    let isHidden:Boolean = false;
    function onScroll(){
      if(window.scrollY >= 80){
        if(isHidden)return;
        isHidden = true;
        setShowScroll(styles.scroll__hidden);
      }
      else{
        if(!isHidden)return;
        isHidden = false;
        setShowScroll(styles.scroll__show);
      }
    }
    window.addEventListener("scroll", onScroll);
  }, []);


  return (
  <>
    <header className={styles.header} id="header">
      <nav className={`${styles.nav} container`}>
        <Link scroll={false} href="/#home" className={styles.logo}>
          <div className={styles.link}>
            Dhafin
          </div>
        </Link>

        <div className={`${styles.menu} ${active}`} id="nav-menu">
          <div className={`${styles.list} grid`}>
            {menus.map((menu, index) => (
                <Link scroll={false} href={menu.href} className={styles.item} key={index}>
                  <div className={styles.link}>
                    <i className={`${menu.icon} ${styles.icon}`}></i>
                    <div className={styles.icon__title}>{menu.title}</div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>

        <div className={styles.btns}>

          <div className={styles.theme} onClick={onThemeClick}>
            <div>
              <i className={`uil uil-${darkTheme} change-theme`} id="theme-button"></i>
            </div>
          </div>


          <div className={styles.toggle} id="nav-toggle" onClick={onMenuClick}>
            <div>
              <i className={`uil uil-apps`}></i>
            </div>
          </div>

        </div>

      </nav>

    </header>

    <div className={`${styles.scroll} ${showScroll}`}>
      <a href="#qualification" className={`${styles.scroll__button} button--flex`}>
        <i className="uil uil-mouse"></i>
        <span className={styles.scroll__title}>&nbsp;Scroll down</span>
        <i className={`uil uil-arrow-down ${styles.scroll__arrow}`}></i>
      </a>
    </div>
  </>
  )
}

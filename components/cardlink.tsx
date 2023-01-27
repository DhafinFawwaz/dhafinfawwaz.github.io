import styles from '../styles/cardlink.module.css'
import Link from 'next/link'
import React, { ReactElement, useState } from 'react'


type CardLinkType = {
  scroll: boolean;
  as: string;
  href: string;
  className: string;
  onClick: Function;
}
class Ripple {
  left: number;
  top: number;
  radius: number;
  state: number; //0 none, 1 instant, 2 down, 3 up

  constructor(_left: number, _top: number, _radius: number, _state: number) {
    this.left = _left;
    this.top = _top;
    this.radius = _radius;
    this.state = _state;
  }
}



export default function CardLink({ scroll, as, href, className, onClick }:CardLinkType) {
  const [ripples, setRipples] = useState<Ripple[]>([new Ripple(125, 150, 500, 1)]);

  // const [elLeft, setElLeft] = useState<number>(0);
  // const [elTop, setElTop] = useState<number>(0);
  
  let elLeft:number;
  let elTop:number;
  let elWidth:number;
  let elHeight:number;
  
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  const [state, SetState] = useState<number>(0); //0 up, 1 instant, 2 down, 3 up

  async function onCardLinkDown(e: any) //React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  {
    e.preventDefault();
    const posX = (e.clientX ? e.clientX : e.touches[0].clientX) - elLeft;
    const posY = (e.clientY ? e.clientY : e.touches[0].clientY) - elTop;
    const w = Math.max(posX, Math.abs(posX-elWidth));
    const h = Math.max(posY, Math.abs(posY-elHeight));
    // const radius = Math.sqrt(w*w + h*h);
    const radius = Math.sqrt(w*w + h*h) * 2;

    setRipples(
      [new Ripple(posX, posY, radius, 1), ...ripples]
    );
    await wait(0); //Move instantly

    
    setRipples(
      ripples.map((ripple, i) => (
          i === 0 ? new Ripple(posX, posY, radius, 2) : ripple
        )
      )
    );
  }

  async function onCardLinkUp(e: any) //React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  {
    e.preventDefault();

    setRipples(
      ripples.map((ripple, i) => (
          i === 0 ? new Ripple(ripple.left, ripple.top, ripple.radius, 3) : ripple
        )
      )
    );
  }

  function wait(ms: number){
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
<>
  <Link scroll={scroll} as={as} href={href} className={className} onClick={() => {}} 
  
  onMouseDown={e => onCardLinkDown(e)}
  onTouchStart={e => onCardLinkDown(e)}
  ref={el => {
    if (!el) return;
    elLeft = el.getBoundingClientRect().left;
    elTop = el.getBoundingClientRect().top;
    elWidth = el.getBoundingClientRect().width;
    elHeight = el.getBoundingClientRect().height;

  }}
  onMouseUp={e => onCardLinkUp(e)}
  onTouchEnd={e => onCardLinkUp(e)}
  >

  {ripples?.map((ripple, i) => {
    return (
      <div style={{left: `${ripple.left}px`, top: `${ripple.top}px`, width: `${ripple.radius}px`, height: `${ripple.radius}px`}} key={i}
      className={`${styles.ripple} 
      ${ripple.state === 0 ? styles.none : ripple.state === 1 ? styles.instant : ripple.state === 2 ? styles.down : styles.up}`}>

      </div>
    );
  })}


    <div style={{left: `${left}px`, top: `${top}px`}} 
    className={`${styles.ripple} 
    ${state === 0 ? styles.none : state === 1 ? styles.instant : state === 2 ? styles.down : styles.up}`}>

    </div>
  </Link>
</>
  )
}

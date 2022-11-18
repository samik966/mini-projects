import { useState } from 'react'
import style from './Carousel.module.css'
import CarouselActions from './CarouselActions'
import CarouselDots from './CarouselDots'
import CarouselSlide from './CarouselSlide'
import slides from './slides.json'

const Carousel = () => {
  const [active, setActive] = useState(1)

  return (
    <div className={style.carouselContainer}>
      <div className={style.carouselSlides}>
        {slides.map((slide) => (
          <CarouselSlide active={active} slide={slide} key={slide.id} />
        ))}
      </div>
      <CarouselActions
        slidesLength={slides.length}
        active={active}
        setActive={setActive}
      />
      <CarouselDots slides={slides} active={active} setActive={setActive} />
    </div>
  )
}

export default Carousel

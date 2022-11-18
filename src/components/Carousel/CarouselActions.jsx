import style from './CarouselActions.module.css'

const CarouselActions = ({ active, setActive, slidesLength }) => {
  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      const newActive = active === 1 ? slidesLength : active - 1
      setActive(newActive)
    } else {
      const newActive = active === slidesLength ? 1 : active + 1
      setActive(newActive)
    }
  }

  return (
    <div className={style.actions}>
      <div
        className={style.actionButton}
        onClick={() => handleArrowClick('left')}
      >
        {'<'}
      </div>
      <div
        className={style.actionButton}
        onClick={() => handleArrowClick('right')}
      >
        {'>'}
      </div>
    </div>
  )
}

export default CarouselActions

import { useState } from 'react'
import { clx } from 'utils/clx'
import style from './Carousel.module.css'

const slides = [
	{
		id: 1,
		slide: 'https://via.placeholder.com/1200x400/FBDF07?text=Slide 1'
	},
	{
		id: 2,
		slide: 'https://via.placeholder.com/1200x400/FFC090?text=Slide 2'
	},
	{
		id: 3,
		slide: 'https://via.placeholder.com/1200x400/F94892?text=Slide 3'
	}
]
const Carousel = () => {
	const [active, setActive] = useState(1)
	const getItemClass = (id) =>
		active === id ? clx(style.slide, style.activeSlide) : style.slide
	const getDotClass = (id) =>
		active === id ? clx(style.dot, style.activeDot) : style.dot

	const handleDotClick = (id) => setActive(id)

	const handleArrowClick = (direction) => {
		if (direction === 'left') {
			const newActive = active === 1 ? slides.length : active - 1
			setActive(newActive)
		} else {
			const newActive = active === slides.length ? 1 : active + 1
			setActive(newActive)
		}
	}
	return (
		<div className={style.carouselContainer}>
			<div className={style.carouselSlides}>
				{slides.map((slide) => (
					<div key={slide.id} className={getItemClass(slide.id)}>
						<img src={slide.slide} alt='carousel item' />
					</div>
				))}
			</div>
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
			<div className={style.dots}>
				{slides.map((slide) => (
					<span
						key={slide.id}
						className={getDotClass(slide.id)}
						onClick={() => handleDotClick(slide.id)}
					/>
				))}
			</div>
		</div>
	)
}

export default Carousel

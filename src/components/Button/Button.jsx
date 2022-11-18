import style from './Button.module.css'

const Button = ({ onClick, children, disabled = false }) => {
	return (
		<button className={style.button} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	)
}

export default Button

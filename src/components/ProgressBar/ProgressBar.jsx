import { useLayoutEffect, useRef, useState } from 'react'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0)
  const containerRef = useRef(null)
  const style = {
    container: {
      backgroundColor: 'gray',
      width: '95%',
      height: 500,
      margin: '1rem auto'
    },
    progress: {
      width: `${progress}px`,
      height: '20px',
      backgroundColor: 'red'
    }
  }
  useLayoutEffect(() => {
    let interval
    if (progress < containerRef.current.offsetWidth) {
      interval = setInterval(() => {
        setProgress(progress + 1)
      }, 10)
    } else {
      clearInterval(interval)
      window.alert('Progress is complete')
    }

    return () => clearInterval(interval)
  })
  return (
    <div ref={containerRef} style={style.container}>
      <div style={style.progress} />
    </div>
  )
}

export default ProgressBar

import { Routes, Route } from 'react-router-dom'
import { Carousel, MindPuzzle, PhotoGallery, ProgressBar, StopWatch, Swipe } from 'components'
export const ROUTE_PATHS = [
  { path: '/progress-bar', title: 'Progress Bar', element: ProgressBar },
  { path: '/stop-watch', title: 'Stop Watch', element: StopWatch },
  { path: '/swipe', title: 'Swipe', element: Swipe },
  { path: '/carousel', title: 'Carousel', element: Carousel },
  { path: '/photo-gallery', title: 'Photo Gallery', element: PhotoGallery },
  { path: '/mind-puzzle', title: 'Mind Puzzle', element: MindPuzzle }
]

export const Router = () => {
  return (
    <div className='container'>
      <Routes>
        {ROUTE_PATHS.map((route) => {
          const { path, element } = route
          const Component = element
          return <Route key={path} path={path} element={<Component />} />
        })}
      </Routes>
    </div>
  )
}

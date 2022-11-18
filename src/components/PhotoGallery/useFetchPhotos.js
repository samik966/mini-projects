import { useCallback, useEffect, useState } from "react"
import { createApi } from "unsplash-js"

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
})
export const useFetchPhotos = (page) => {
  const [ photos, setPhotos ] = useState([])
  const [ loading, setLoading ] = useState(true)


  const fetchPhotos = useCallback(async () => {
    const { response } = await unsplash.photos.list({ page, perPage: 10 })
    const data = response.results
    setPhotos(photos => [...new Set([...photos, ...data])])
    setLoading(false)
  }, [page]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchPhotos()
  }, [page]) // eslint-disable-line react-hooks/exhaustive-deps

  return { photos, loading }

}
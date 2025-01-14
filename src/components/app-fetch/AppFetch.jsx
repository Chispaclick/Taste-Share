import useFectch from '@/hooks/useFetch'

const url = 'https//api.example.com/data'

function AppFetch() {
  const { data, loading, error} = useFectch(url)
   
  if(loading) {
    return <div>Cargando...</div>
  }

  if(error) {
    return <div>Ups! Hay un error: {error.message}</div>
  }





  return (
    <div>
      
    </div>
  )
}

export default AppFetch

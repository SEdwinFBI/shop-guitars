import { useEffect, useState } from "react"
import Card from "../cards/Card"
import { fetchGuittars, guitarr } from "../../Context/fetchGuittars";



const Container = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<guitarr[] | null>(null);

  const getData =  () => {
    setIsLoading(true);
    setData( fetchGuittars());
    setIsLoading(false);
      
    
  }

  useEffect(()=>{
    getData();
  },[])

  if(isLoading) return <p className="h-full">
    cargando.....
  </p>
  return (
    <main className="container flex flex-col justify-center items-center  xl:px-40 lg:px-30 md:px-20 sm:px-10 px-10  w-full mt-5 mb-15">
      <h1 className="text-3xl font-extrabold text-amber-500">Nuestra Coleccion</h1>
      <div className="grid  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 gap-5 mt-5 justify-items-center">
        {
          data && data.map((guitarr)=>(
            <Card key={guitarr.id} guitarr={guitarr}/>
          ))
        }
      </div>
    </main>
  )
}

export default Container

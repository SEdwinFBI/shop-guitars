import { useEffect, useState } from "react"
import Card from "../cards/Card"
import { fetchGuittars, guitar } from "../../Context/fetchGuittars";
import ArticleSkeleton from "../skeleton/ArticleSkeleton";



const Container = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<guitar[] | null>(null);



  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setData(fetchGuittars())
      setIsLoading(false);
    }, 2000);

  }, [])


  return (
    <main className="container flex flex-col justify-center items-center  xl:px-40 lg:px-30 md:px-20 sm:px-10 px-10  w-full mt-5 mb-15">
      <h1 className="text-3xl font-extrabold text-amber-500">Nuestra Coleccion</h1>
      <div className="grid  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 gap-5 mt-5 justify-items-center">
        {
          data && data.map((guitarr) => (
            <Card key={guitarr.id} guitarr={guitarr} />
          ))
        }
        {
          isLoading &&
          Array(6).fill(undefined).map((_, index) => (
            <ArticleSkeleton key={index} />
          ))
        }
      </div>
    </main>
  )
}

export default Container

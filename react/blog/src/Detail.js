import { useParams } from "react-router-dom"

export default function Detail(){
  const params = useParams()
  console.log(params)
  return (
    <div>
    <h1>detail page</h1>
    </div>
  )
}
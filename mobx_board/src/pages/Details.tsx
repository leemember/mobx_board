import { useParams } from "react-router-dom"

const Details = () => {  
  let {id} = useParams();

    return (
      <div className="board">
        {id}  
      </div>
    )
}

export default Details
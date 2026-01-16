import { useParams, useSearchParams } from "react-router";

const KidsDitails = () => {

  const {id} = useParams();   // ?id=123
//   const name = searchParams.get("name"); // ?name=abc

//   console.log(id);

    return <div className="pt-16">
        <h3>Didails {id}</h3>
    </div>
}

export default KidsDitails;
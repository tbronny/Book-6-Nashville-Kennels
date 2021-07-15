import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useHistory, useParams } from "react-router-dom"

export const AnimalDetail = () => {
    const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({})

    const { animalId } = useParams()

    const history = useHistory()

    const handleRelease = () => {
        releaseAnimal(animal.id).then(() => {
            history.push("/animals")
        })
    }

    useEffect(() => {
        console.log("useEffect", animalId)
        getAnimalById(animalId).then((response) => {
            setAnimal(response)
        })
    }, [])

    return (
        <>
            <section className="animal">
                <h3 className="animal__name">{animal.name}</h3>
                <div className="animal__breed">Breed: {animal.breed}</div>
                {/* What's up with the question mark???? See below.*/}
                <div className="animal__location">
                    Location: {animal.location?.name}
                </div>
                <div className="animal__owner">
                    Customer: {animal.customer?.name}
                </div>
                <button onClick={handleRelease}>Release Animal</button>
                <button
                    onClick={() => {
                        history.push(`/animals/edit/${animal.id}`)
                    }}
                >
                    Edit
                </button>
            </section>
        </>
    )
}

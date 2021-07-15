import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const { getLocationById } = useContext(LocationContext)

    const [location, setLocation] = useState({})

    const { locationId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getLocationById(locationId).then((response) => {
            setLocation(response)
        })
    }, [])

    return (
        <>
            <section className="location">
                <h2 className="location__name">{location.name}</h2>
                <div className="location__address">{location.address}</div>
                <h4>Employees</h4>
                <div className="location__employees">
                    {location.employees
                        ?.map((employee) => {
                            return employee.name
                        })
                        .join(", ")}
                </div>
                <h4>Current Residents</h4>
                <div className="location__animals">
                    {location.animals
                        ?.map((animal) => {
                            return animal.name
                        })
                        .join(", ")}
                </div>
                <button
                    onClick={() => {
                        history.push(`/locations/edit/${location.id}`)
                    }}
                >
                    Edit
                </button>
            </section>
        </>
    )
}

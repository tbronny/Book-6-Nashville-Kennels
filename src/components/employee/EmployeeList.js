import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const history = useHistory()

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()
    }, [])

    return (
        <>
            <h2>Employees</h2>
            <button
                onClick={() => {
                    history.push("/employees/create")
                }}
            >
                New Employee
            </button>
            <div className="employees">
                {console.log("EmployeeList: Render", employees)}
                {employees.map((employee) => {
                    return (
                        <EmployeeCard key={employee.id} employee={employee} />
                    )
                })}
            </div>
        </>
    )
}

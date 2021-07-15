import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployeeById = (id) => {
        return fetch(
            `http://localhost:8088/employees/${id}?_expand=location`
        ).then((res) => res.json()) // note we don't set anything on state here. Why?
    }

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
            .then((res) => res.json())
            .then(setEmployees)
    }
    const addEmployee = (employeeObj) => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(employeeObj),
        }).then((response) => response.json())
    }

    const updateEmployee = (employee) => {
        return fetch(`http://localhost:8088/employees/${employee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(employee),
        }).then(getEmployees)
    }

    return (
        <EmployeeContext.Provider
            value={{
                employees,
                getEmployees,
                addEmployee,
                getEmployeeById,
                updateEmployee,
            }}
        >
            {props.children}
        </EmployeeContext.Provider>
    )
}

import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalSearch } from "./animal/AnimalSearch"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"
import { LocationDetail } from "./location/LocationDetail"

export const ApplicationViews = () => {
    return (
        <>
            <CustomerProvider>
                <Route exact path="/">
                    <Home />
                </Route>
            </CustomerProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalSearch />
                            <AnimalList />
                        </Route>
                        <Route exact path="/animals/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>
                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/employees">
                            <EmployeeList />
                        </Route>

                        <Route path="/employees/create">
                            <EmployeeForm />
                        </Route>

                        <Route path="/employees/edit/:employeeId(\d+)">
                            <EmployeeForm />
                        </Route>

                        <Route exact path="/employees/detail/:employeeId(\d+)">
                            <EmployeeDetail />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </EmployeeProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>

                <Route path="/locations/create">
                    <LocationForm />
                </Route>

                <Route path="/locations/edit/:locationId(\d+)">
                    <LocationForm />
                </Route>

                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
            </LocationProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}

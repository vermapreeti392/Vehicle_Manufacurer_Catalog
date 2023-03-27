import React, { useEffect, useState } from 'react'
import ManufacturerDetail from './ManufacturerDetail';
import './Vehicle.css'
export default function Home() {
    const [blur, setBlur] = useState(false);
    const [data, setData] = useState([]);
    
    const val = "Truck"
    useEffect(() => {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json")
            .then(res => res.json())
            .then(data => {
                console.log(data.Results)
                setData(data.Results)
            })
    }, [])
    
    const handleData = (res) => {
        setBlur(true);
        localStorage.setItem('item', JSON.stringify(res))        
    }
    return (
        <>
            {
                blur ? <div className="detail-M">
                    <ManufacturerDetail setBlur={setBlur} />
                </div> : null
            }

            <div className='main'>
                <>
                    <div className="heading"><h1>VEHICLE MANUFACTURERES</h1></div>
                    <div className="container">
                        <div className='input-div'>
                            <div className="search-div">
                                <label htmlFor="search">search :</label>
                                <input type="search" name="" id="" />
                            </div>
                            <div className="filter-div">
                                <select >
                                    <option value="">All</option>
                                    <option value="Passenger Car">Passenger Car</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Motorcycle">Motorcycle</option>
                                    <option value="Trailer">Trailer</option>
                                    <option value="Bus">Bus</option>
                                </select>
                            </div>
                        </div>
                        <div className="table-div mt-3">
                            <table class="table table-striped">
                                <thead className='head-table'>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map(res => {
                                            return (
                                                <tr onClick={() => { handleData(res) }}>
                                                    <th scope="row">{res.Mfr_Name}</th>
                                                    <td>{res.Country}</td>
                                                    <td>{res.VehicleTypes[0] ? res.VehicleTypes[0].Name : val}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            </div>
        </>

    )
}


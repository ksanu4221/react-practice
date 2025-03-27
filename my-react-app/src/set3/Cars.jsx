import React from 'react'

const Cars = () => {
    const cars = [
        { id: 1, name: 'supra', price: 500000, category: 'sports', }, {
            id: 2, name: 'A5', price: 700000, category: 'luxury',
        }, {
            id: 3, name: 'huyara', price: 1500000, category: 'sports',
        }, {
            id: 4, name: 'agera R', price: 3500000, category: 'sports',
        },
    ]
    const studentData = [
        {     id: 1,     name: 'Nitin',     marks: 78,
        },   {     id: 2,     name: 'Mehak',     marks: 95,
        },   {     id: 3,     name: 'Mehul',     marks: 65,
        },   {     id: 4,     name: 'Nina',     marks: 86,
        },
      ]
      
    const numberOfLuxaryCars = cars.filter((car) => car.category === 'luxury').length
    const numberOfSportsCars = cars.filter((car) => car.category === 'sports').length
      const totalMarks=  studentData.reduce((acc,curr)=>acc+curr.marks,0)

     const mean= totalMarks/studentData.length
     

    return (
        <>
        <div>Luxary : {numberOfLuxaryCars}</div>
        <div>Sports : {numberOfSportsCars}</div>
        <div>mean : {mean>80?"certification passed":"certification failed"}</div>
        </>)
}

export default Cars
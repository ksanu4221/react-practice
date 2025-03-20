import React from 'react'

const StudentDetails = ({student:{name,english,maths,computers}}) => {
    return (
        <>
            <div>StudentDetails</div>
            {/* <div>Name : {student.name}</div>
    <div>English : {student.english}</div>
    <div>Maths : {student.maths}</div>  
    <div>Computer :{student.computers}</div>
    <div>Total marks :{student.english + student.maths + student.computers}</div>
    <div>Grade :{(student.english + student.maths + student.computers)>=225?'A':
        
        (student.english + student.maths + student.computers)>=180?'B':
        
        (student.english + student.maths + student.computers)>=150?'C':"D"
        
        }</div> */}
            <div>Name : {name}</div>
            <div>English : {english}</div>
            <div>Maths : {maths}</div>
            <div>Computer :{computers}</div>
            <div>Total marks :{english + maths + computers}</div>
            <div>Grade :{(english + maths + computers) >= 225 ? 'A' :

                (english + maths + computers) >= 180 ? 'B' :

                    (english + maths + computers) >= 150 ? 'C' : "D"

            }</div>




        </>
    )
}

export default StudentDetails

import './App.css'
import Button from './set1/Button'
import EmployeeCard from './set1/EmployeeCard'
import Stationary from './set1/Stationary'
import StudentDetails from './set1/StudentDetails'

function App() {

// const backgroundColor = 'lightgreen'
//  const color = 'darkgreen' 
//  const borderRadius = '5px'
//   const padding = '10px'
  // const items = ['pen', 'pencil', 'ruler', 'eraser']
  const student = {   name: 'John Doe',
    english: 30,   maths: 10,   computers: 70, }
  
  return (
    <>
    {/* <EmployeeCard name="sanu" designation="se" experience={3}/>
    <Button backgroundColor={backgroundColor} color={color} borderRadius={borderRadius} padding={padding}/>
    <Stationary items={items}  Header="stationary items"/> */}
    <StudentDetails student={student}/>
   
    </>
  )
}

export default App

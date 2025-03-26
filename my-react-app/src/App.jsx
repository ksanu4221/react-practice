
import './App.css'
import Form from './basics/Form'
import Button from './set1/Button'
import EmployeeCard from './set1/EmployeeCard'
import EmployeeDetails from './set1/EmployeeDetails'
import Stationary from './set1/Stationary'
import StudentDetails from './set1/StudentDetails'
import Article from './set2/Article'
import Fetchdata from './set2/Fetchdata'
import FetchProduct from './set2/FetchProduct'
import Gadgets from './set2/Gadgets'
import UserProfile from './set2/UserProfile'
import UseState from './set2/UseState'
import Donation from './set3/Donation'

function App() {

// const backgroundColor = 'lightgreen'
//  const color = 'darkgreen' 
//  const borderRadius = '5px'
//   const padding = '10px'
  // const items = ['pen', 'pencil', 'ruler', 'eraser']
  // const student = {   name: 'John Doe',
  //   english: 30,   maths: 10,   computers: 70, }
  // const products = [
  //   {
  //     id: 1,     name: 'keyboard',
  //     description: 'Logitech Mechanical Keyboard',     price: 2000,
  //   },
  //   { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  //   {     id: 3,     name: 'monitor',
  //     description: 'Lenovo 32-inch display Monitor',     price: 10000,
  //   },
  //   { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  //   {     id: 5,     name: 'speakers',
  //     description: 'Creative Desktop Speakers',     price: 5000,
  //   },   {     id: 6,
  //     name: 'headphones',
  //     description: 'Sony over-the-ear wired Headphones with mic',     price: 1500,
  //   },
  //   { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 }, ]
  // const title = 'React is awesome'
  // const content = 'React is a JavaScript library for building user interfaces.'
  const DonationData = [
    {
      id: 1,     name: 'Nitin',     Donation: 7800,
    },   {     id: 2,     name: 'Mehak',     Donation: 9500,
    },   {     id: 3,     name: 'Mehul',     Donation: 65000,
    },   {     id: 4,     name: 'Nina',     Donation: 560,
    },
  ]
  
  return (
  <>
    {/* <EmployeeCard name="sanu" designation="se" experience={3}/>
    <Button backgroundColor={backgroundColor} color={color} borderRadius={borderRadius} padding={padding}/>
    <Stationary items={items}  Header="stationary items"/> */}
    {/* <StudentDetails student={student}/> */}
    {/* <EmployeeDetails/> */}
    {/* <UseState/> */}
   {/* <Fetchdata/> */}
   {/* <FetchProduct/> */}
   <UserProfile heading="User Profile" height="300px" width="300px"/>
   {/* <Form/> */}
   {/* <Gadgets products={products}/> */}
   {/* <Article title={title} content={content}/> */}
   {/* <Form/> */}
   <Donation DonationData={DonationData}/>
  </>
  )
}

export default App

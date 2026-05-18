import React from 'react'
import Destructuring from './Destructuring'

export default function App() {
  const user1 ="User 1"
  const name1="Ramkumar"
  const age1="23"
  const city1="Pondy"
  const degree1="B.tech"
  const contact1="8967986871"

  const user2 ="User 2"
  const name2="Suriya"
  const age2="22"
  const city2="Chennai"
  const degree2="B.E"
  const contact2="9998776544"

  const user3 ="User 3"
  const name3="Venkat"
  const age3=25
  const city3="Bangalore"
  const degree3="B.tech"
  const contact3="7708645547"


  const user4 ="User 4"
  const name4="Swedha"
  const age4="23"
  const city4="Madurai"
  const degree4="B.tech"
  const contact4="6385554677"


  const user5 ="User 5"
  const name5="Ganesh"
  const age5="26"
  const city5="Puducherry"
  const degree5="B.Sc"
  const contact5="9344255766"


  return (
    <div>
      <Destructuring  user={user1} name={name1} age={age1} city={city1} degree={degree1}  contact={contact1}/>
      <Destructuring  user={user2} name={name2} age={age2} city={city2} degree={degree2}  contact={contact2}/>
      <Destructuring  user={user3} name={name3} age={age3} city={city3} degree={degree3}  contact={contact3}/>
      <Destructuring  user={user4} name={name4} age={age4} city={city4} degree={degree4}  contact={contact4}/>
      <Destructuring  user={user5} name={name5} age={age5} city={city5} degree={degree5}  contact={contact5}/>
      
    </div>
  )
}

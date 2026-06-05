import React, { createContext, useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Destructuring from './Destructuring'
import Conditionalrendering from './Conditionalrendering'
import Modulesstyle from './Modulesstyle'
import ObjectStyle from './ObjectStyle'
import Countertheme from './Countertheme'
import ConditonalForm from './ConditonalForm'
import Useeffect from './Useeffect'
import Useref from './Useref'
import First from './First'
import Caption from './Caption'
import ContextForm from './ContextForm'
import Usereduce from './Usereduce'
import Minichat from './Minichat'
import Chat from './Chat'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Team from './Team'
import Contact from './Contact'
import Account from './Account'
import Solutions from './Solutions'
import CloudService from './CloudService'
import CyberSecurity from './CyberSecurity'
import AIService from './AIService'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
// import Contact from './component/Contact'
import Appservices from './component/Appservices'
import Webservice from './component/Webservice'
import Idname from './Idname'
import Blog from './component/Blog'
import UserList from './component/UserList'
import UserDetails from './component/UserDetails'
import TaskTwele from './TaskTwele'
import UseSerachParam from './UseSerachParam'
import Pagenation from './Pagenation'
import Apifetch from './Apifetch'
import Useexecute from './Useexecute'
import Axios from "./Axios"
import UserTable from "./UserTable"
import Crud from './Crud'
import ApiCrud from './ApiCrud'
export const Pass = createContext();

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
   
 
  const [mode,setmode]= useState("light");

  const [form,setform] =useState({
    name :"",
    email:"",
    phone:"",
    password: "",
    address: "",

  })

  const handler = (e)=>{
    setform({...form,
      [e.target.name]:e.target.value,})

  }


  return (
    <div>
      {/* <Destructuring  user={user1} name={name1} age={age1} city={city1} degree={degree1}  contact={contact1}/>
      <Destructuring  user={user2} name={name2} age={age2} city={city2} degree={degree2}  contact={contact2}/>
      <Destructuring  user={user3} name={name3} age={age3} city={city3} degree={degree3}  contact={contact3}/>
      <Destructuring  user={user4} name={name4} age={age4} city={city4} degree={degree4}  contact={contact4}/>
      <Destructuring  user={user5} name={name5} age={age5} city={city5} degree={degree5}  contact={contact5}/> */}
      {/* <Conditionalrendering /> */}
      {/* <Modulesstyle /> */}
      {/* <ObjectStyle /> */}
      {/* <Countertheme /> */}
      {/* <ConditonalForm /> */}
      {/* <Useeffect /> */}
      {/* < Useref/> */}
      {/* <div style={{ padding: "20px", border: "2px solid #333" }}>
        <h2>Main component {user1}</h2>
        <First user1 ={user1}/></div> */}
        {/* <Caption /> */}
        {/* <div>
          <Pass.Provider value={{mode,setmode,form,setform,handler}}>
            <ContextForm />
            </Pass.Provider>
          </div> */}
          {/* <Usereduce /> */}
          {/* <Minichat /> */}
          {/* <Chat /> */}
           {/* <Navbar /> */}

      {/* <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />

        {/* Nested Routing */}

        {/* <Route path="/solutions" element={<Solutions />}>
          <Route path="cloud" element={<CloudService />} />
          <Route path="cybersecurity" element={<CyberSecurity />} />
          <Route path="ai" element={<AIService />} />
        </Route>

      </Routes> */} 
      <BrowserRouter>

  {/* <div className="header">
    <Link to={"/Home"}>Home</Link>
    <Link to={"/About"}>About</Link>
    <Link to={"/Services"}>Service</Link>
    <Link to={"/Contact"}>Contact</Link>
    
  </div> */}

  <Routes>
    {/* <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/Services' element={<Services />} />
    <Route path='/App' element={<Appservices />} />
    <Route path='/Web' element={<Webservice />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/blog/:id' element={<Blog />}/> */}
 

   {/* <Route path="/" element={<UserList />} />

   <Route path="/Home" element={<UserList />} />

   <Route path="/user/:id" element={<UserDetails />} /> */}


  </Routes>
  {/* <UseSerachParam /> */}
  {/* <Apifetch/> */}
  {/* <Useexecute/> */}
 {/* <Axios /> */}
  {/* <UserTable /> */}
  {/* <Crud/> */}
  <ApiCrud />
  {/* <Pagenation /> */}

</BrowserRouter>
{/* <Idname />
<Idname /> */}
{/* <TaskTwele /> */}


          
    </div>
  )
}

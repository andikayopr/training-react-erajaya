import React, {useState} from 'react'
import Button from './components/Button'
import Card from './components/Card'

function App() {

  const [name, setName] = useState("joshua")
  const [doThings, setDoThings] = useState(() => {})
  const [isError, setIsError] = useState(false)

  const [person, setPerson] = useState({
    name: "jojo",
    phone : "08383888888"
  })

  const [friends, setFriends] = useState(["dina", "savir", "mega"])

  const updateName = () => {
    setName("Joshua Suherman")
    setIsError(true)
  }

  const rubahPerson = () => {
    // ...person

    setPerson({
      ...person,
      name: "Bina Bila"
    })
    // setPerson({...person})


    // setPerson(() => {
    //   return {
    //     ...person
    //   }
    // })

  }

  const rubahFriends = () => {
    friends[0] = "Rega"
    setFriends({
      ...friends
    })
  }


  return (
    <>
      <h1>{name}</h1>
      <span>Error : {isError}</span>
      <span>{person.name}</span>
      <span>{friends[0]}</span>
      <br/>
      <button onClick={updateName}>Click Me</button>
      {/* <button onClick={doThings}>Click Do Things</button> */}
      <button onClick={rubahPerson}>Click Person</button>

      <button onClick={rubahFriends}>Click friends</button>
      <Button title="Prop Button" color="#CCC"/>
      <Card title={name}>
        {/* dianggap punya props.children => hanya khusus tag children*/}
        <h2>Tes children</h2>
      </Card>
    </>
  );
}

export default App;

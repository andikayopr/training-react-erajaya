import Button from './components/button'
import React, {useEffect, useState, useMemo, useCallback} from 'react'

const friend = {
  "name" : "JAJA",
  "age": 19
}

function App() {

  // const [name, age] = friend

  const [title, setTitle] = useState("")
  const [age, setAge] = useState(30)
  // const [friend, setFriend] =
  const [posts, setPosts] = useState(Array)
  const [currentTime, setCurrentTime] = useState('pagi')


  // useEffect(() => {
  //   console.log("running")
  //   setCurrentTime('evening')
  // })

  // useEffect(() => {
  //   console.log("running")
  //   setCurrentTime('evening')
  // }, [isClicked, name]) // jika ada salah satu yang berubah maka kondisi dijalankan

  // useEffect(() => {
  //   const newFriend = {
  //     "name" : "mein",
  //     "age" : 29
  //   }

  //   setFriend(newFriend)
  // }, [name, age])

    // useEffect(() => {
    //   return 'button unmount'
    // }, [])

  const sumMyValue = useMemo(() => {
    console.log("running")
    for (let i = 10; i < 100; i++) {
      console.log("loop")
    }
    return 20 + age;
  }, [age])

  const sumMyValue2 = useCallback(() => {
    console.log('running')
    setAge(age + 11);
  }, [age])

  const fetchData = useCallback(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const results = await res.json();
    setPosts(results);
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
      <div>
        <h1>{`Hallo, selamat ${currentTime}`}</h1>
        <Button />

        {/* {sumMyValue} */}
        <button onClick={sumMyValue2}>Test useCallback</button>

        {age}
        <ul>
            {posts.map(post => (
              <li>{post.title}</li>
            ))}
        </ul>
      </div>
  );
}

export default App;

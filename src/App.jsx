import { useEffect, useState } from 'react'//هون عملت الو استدعاء
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body/body'
import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'

function App() {
  //const [count, setCount] = useState(0)  //هون طريقة تعريف هي ال state 
  const [task, SetTask] = useState("");
  //to save taskes
    const [tasks, SetTasks] = useState([])

const addTask= async()=>
{  //add collection in firebase
   await addDoc(collection(db,"tasks"),{title: task})
}
 //get
 const loadallTask= async()=>
 {
    const querysnap= await getDocs(collection(db,"tasks"))
    console.log("get all tasks",querysnap.docs);
    const data = querysnap.docs.map((doc)=>
    {
      return { id: doc.id,...doc.data()}
      
    })
    SetTasks(data);
 }
 useEffect(()=>
{ 
   loadallTask();
},[])
//update 
const updateTask= async(id,titleTask)=>
{  const updatedOne= prompt("may you type your updates",titleTask)
  await updateDoc(doc(db,"tasks",id),{title: updatedOne})
  loadallTask();
}
//delet
const deletTask= async(id)=>
{
  await deleteDoc(doc(db,"tasks",id))
  loadallTask();
}
  return (
    <div style={{display: "flex-coi"}}>
    <h1>To Do Application</h1>  
     <br/>
   <input type= "text" placeholder='type your task'/>
    <br/>
   <button onClick={()=>addTask()}> add task</button>
    <br/>
    <ul>
      {tasks.map((task)=>
      {
        return (<li key={task.id}>
         {task.title}
         <button onClick={()=>updateTask(task.id,task.title)}>Update</button>
         <button onClick={()=>deletTask(task.id)} >Delete</button>
        </li>)
      })
      
      }
    </ul>
    </div>  
  )
}

export default App

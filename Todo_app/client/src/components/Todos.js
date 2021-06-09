import React,{useState,useContext, useEffect} from 'react'

import {CredentialContext} from '../App'
import { v4 as uuidv4 } from 'uuid';

function Todos() {

    const [todos, setTodo] = useState([])
    const [todoText, setText] = useState('')
    const [filter, setFilter] = useState('unCompleted')


    const [credentials] = useContext(CredentialContext)



    const persist = (newTodo)=>{
        console.log(newTodo)
        fetch('http://localhost:4000/todos',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization' : `Basic ${credentials.email}:${credentials.password}`
            },
            body: JSON.stringify(newTodo)
            }).then(()=>{})
    }
    

    useEffect(()=>{

        fetch('http://localhost:4000/todos',{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization' : `Basic ${credentials?.email}:${credentials?.password}`
            },
            })
            .then((res)=>res.json())
            .then((todo)=>setTodo(todo))

    },[])


    const addTodo = (e)=>{
        e.preventDefault()
        if(!todoText) return;
        const newTodo = {id:uuidv4(),checked:false,text:todoText}
        const newTodoList = [...todos,newTodo]
        setTodo(newTodoList)
        persist(newTodoList)
    }

    const toggleTodo = (id)=>{
        const newTodoList = [...todos]
        const todoItem = todos.find((todo)=>todo.id===id)
        todoItem.checked = !todoItem.checked
        setTodo(newTodoList)
        // console.log(newTodoList)
        persist(newTodoList)

    }

    const getTodos = () =>{
        return todos.filter(todo=> filter === 'completed'? todo.checked:!todo.checked )
    }

    const changeFilter = (e)=>{
        setFilter(e.target.value)
    }

    return (
        <>
        {
        credentials &&
        <div>
            <select value={filter} onChange={changeFilter}>
                <option value="completed">Complted Todos</option>
                <option value="unCompleted">Uncomplted Todos</option>
            </select>
            <br/>

            {credentials && getTodos().map((todo)=>(
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.checked} onChange={()=>toggleTodo(todo.id)}></input>
                    <label>{todo.text}</label>
                </div>
            ))}


            <br/>
            <form>
                <input type="text" onChange={(e=>setText(e.target.value))} ></input>
                <button type="submit" onClick={addTodo}>Add Todo</button>
            </form>

        </div>
        }
    </>
    )
}

export default Todos

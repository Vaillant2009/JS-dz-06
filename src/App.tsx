import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { Counter } from './components/Counter';
import { TodoList } from './components/TodoList';
import type { Priority, Task } from './types';

const initialTasks:Task[]=[
 {id:1,text:'Підготувати домашнє завдання з React',priority:'high',deadline:'2026-11-25T18:00',completed:false},
 {id:2,text:'Повторити CSS Modules',priority:'normal',deadline:'',completed:true}
];
export default function App(){
 const[tasks,setTasks]=useState<Task[]>(initialTasks);
 function addTask(text:string,priority:Priority,deadline:string){setTasks(current=>[...current,{id:Date.now(),text,priority,deadline,completed:false}]);}
 function toggleTask(id:number){setTasks(current=>current.map(task=>task.id===id?{...task,completed:!task.completed}:task));}
 function deleteTask(id:number){setTasks(current=>current.filter(task=>task.id!==id));}
 const completedCount=tasks.filter(task=>task.completed).length;
 return <main className={styles.page}><div className={styles.app}><Header count={tasks.length}/><TaskForm onAdd={addTask}/><Counter total={tasks.length} completed={completedCount}/><TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}/></div></main>;
}

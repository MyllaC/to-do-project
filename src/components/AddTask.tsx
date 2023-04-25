import { PlusCircle } from 'phosphor-react'
import styles from './AddTask.module.css'
import { useState, ChangeEvent } from 'react'

export function AddTask({ addNewTask }) {
  const [newTask, setNewTask] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTask() {
    console.log(newTask)
    addNewTask(newTask)
  }

  return (
    <div className={styles.addTaskBox}>
      <input
        className={styles.input}
        required
        value={newTask}
        onChange={handleNewTaskChange}
        placeholder="Adicione uma nova tarefa"
      />
      <button
        onClick={handleNewTask}
        className={styles.button}
        title="Criar task"
      >
        <PlusCircle />
        Criar
      </button>
    </div>
  )
}

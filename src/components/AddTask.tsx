import { PlusCircle } from 'phosphor-react'
import styles from './AddTask.module.css'
import { useState, ChangeEvent } from 'react'

interface AddTaskProps {
  addNewTask: (task: string) => void
}

export function AddTask({ addNewTask }: AddTaskProps) {
  const [newTask, setNewTask] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTask() {
    addNewTask(newTask)
    setNewTask('')
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

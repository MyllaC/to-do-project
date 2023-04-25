import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTask } from './components/addTask'
import { Task, taskType } from './components/Task'
import { useState } from 'react'
import { EmptyState } from './components/EmptyState'
import { v4 as uuidv4 } from 'uuid'

export function App() {
  const [tasks, setTasks] = useState<taskType[]>([])

  function addNewTask(taskToAdd: string) {
    const newTask: taskType = {
      id: uuidv4(),
      done: false,
      label: taskToAdd
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <AddTask addNewTask={addNewTask} />
        <div className={styles.taskContainer}>
          <header className={styles.taskListHeader}>
            <div className={styles.taskCounterContainer}>
              <span className={styles.createdTasks}>Tarefas criadas</span>
              <span className={styles.taskCounter}>0</span>
            </div>
            <div className={styles.taskListHeader}>
              <span className={styles.finalizedTasks}>Concluídas</span>
              <span className={styles.taskCounter}>0</span>
            </div>
          </header>
          <div>
            {tasks.length ? (
              tasks.map(task => {
                return <Task task={task} />
              })
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

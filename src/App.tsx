import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
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

  function toggleTask(updateTask: taskType) {
    const updatedTasks = tasks.map(task => {
      if (task.id === updateTask.id) {
        task.done = !task.done
      }
      return task
    })

    setTasks(updatedTasks)
  }

  function onDeleteTask(taskToDelete: taskType) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  const createdTasks = tasks.length

  const doneTasks = tasks.reduce((accumulator, task) => {
    return (accumulator += task.done ? 1 : 0)
  }, 0)

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <AddTask addNewTask={addNewTask} />
        <div className={styles.taskContainer}>
          <header className={styles.taskListHeader}>
            <div className={styles.taskCounterContainer}>
              <span className={styles.createdTasks}>Tarefas criadas</span>
              <span className={styles.taskCounter}>{createdTasks}</span>
            </div>
            <div className={styles.taskListHeader}>
              <span className={styles.finalizedTasks}>Concluídas</span>
              <span className={styles.taskCounter}>{doneTasks}</span>
            </div>
          </header>
          <div className={styles.tasks}>
            {tasks.length ? (
              tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    checkTask={toggleTask}
                    deleteTask={onDeleteTask}
                  />
                )
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

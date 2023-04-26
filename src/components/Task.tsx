import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
  task: taskType
  checkTask: (task: taskType) => void
  deleteTask: (task: taskType) => void
}

export interface taskType {
  id: string
  done: boolean
  label: string
}

export function Task({ task, checkTask, deleteTask }: TaskProps) {
  function handleCheckTask() {
    checkTask(task)
  }
  function handleDeleteTask() {
    deleteTask(task)
  }

  return (
    <div className={styles.task}>
      {task.done ? (
        <div className={styles.taskContainer}>
          <CheckCircle
            size={18}
            className={styles.checkCircle}
            onClick={handleCheckTask}
          />
          <p className={styles.labelTaskDone}>{task.label}</p>
          <Trash
            size={18}
            className={styles.trash}
            onClick={handleDeleteTask}
          />
        </div>
      ) : (
        <div className={styles.taskContainer}>
          <Circle
            size={18}
            className={styles.circle}
            onClick={handleCheckTask}
            color="var(--blue-300)"
          />
          <p className={styles.labelTaskToDo}>{task.label}</p>
          <Trash
            size={18}
            className={styles.trash}
            onClick={handleDeleteTask}
          />
        </div>
      )}
    </div>
  )
}

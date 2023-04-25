import { CheckCircle, Circle, Trash } from 'phosphor-react'

interface TaskProps {
  task: taskType
}

export interface taskType {
  id: string
  done: boolean
  label: string
}

export function Task({ task }: TaskProps) {
  return (
    <div>
      {task.done ? <CheckCircle /> : <Circle />}
      <p>{task.label}</p>
      <Trash />
    </div>
  )
}

import { ClipboardText } from 'phosphor-react'
import styles from './EmptyState.module.css'

export function EmptyState() {
  return (
    <div className={styles.emptyStateBox}>
      <ClipboardText size={80} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}

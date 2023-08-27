import './index.css'

const TodoItem = props => {
  const {id, title, onDelete} = props
  console.log(id)
  const onDeleteTodo = () => {
    onDelete(id)
  }
  return (
    <li className="todo-bg">
      <p className="todo-para">{title}</p>
      <button className="delete-button" onClick={onDeleteTodo} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem

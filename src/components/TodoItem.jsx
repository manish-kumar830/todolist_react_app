const TodoItem = (props) => {

   return (
      <>
         <li>
            <span>{props.sendItem}</span>
            <button type="button" onClick={()=>{
               props.onSelect(props.id);
            }}>Delete</button>
         </li>
      </>
   )

}

export default TodoItem;
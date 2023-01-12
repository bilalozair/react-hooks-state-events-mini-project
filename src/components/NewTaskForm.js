import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("");
  const [category, setNewTaskCategory] = useState("Code");

  const newTaskCategoryList = categories.map((category) => {
    return <option key = {category}>{category}</option>
  })
  
  function handleSubmit(event) {
    event.preventDefault();
    
    onTaskFormSubmit({text,category})
  }
  return (
    <form className="new-task-form" onSubmit = {handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value = {text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value = {category} onChange = {(e) => setNewTaskCategory(e.target.value)}>
          {newTaskCategoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

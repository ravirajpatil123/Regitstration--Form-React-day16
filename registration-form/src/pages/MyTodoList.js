import { useEffect,useState } from "react";

function MyTodoList() {
  let [todoList, setTodoList] = useState([]);

//   
useEffect(() => {
    getAllTodoAction();
},[]);
    let getAllTodoAction = async () => {

    }

  

  return (
    <>
      <h1>Display All Todo</h1>
      

      {todoList.map((item) => (
        <>
          <div className="alert alert-secondary mb-1">
            {item.task} <p>{item.description}</p>
          </div>
        </>
      ))}
    </>
  );
}

export default MyTodoList;
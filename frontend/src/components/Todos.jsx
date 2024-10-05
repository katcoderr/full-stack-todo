function Todos({todos}) {
  return (
    <>
    {todos.map((todo)=>{
      return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button onClick={()=>{
          fetch("http://localhost:3000/completed", {
            method : "PUT",
            body : JSON.stringify({
              id : todo._id
            }),
            headers : {
              "content-type" : "application/json"
            }
          }).then(async function(res){
            const json = await res.json()
          
            
          })
        }}>{todo.completed == true ? "Completed" : "Mark a complete"}</button>
      </div>
    })}
    </>
  )
}

export default Todos
import react from "react"
export default function Lista(){
    return(
        <form>
    <input type="text" placeholder='Matéria'/>
    <br/>
    <textarea placeholder='Nota'/>
    <br/>
    <button>Postar nota</button>
  </form>
    )
}
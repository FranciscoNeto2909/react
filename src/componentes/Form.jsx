import {React, useState} from "react"
import {Container, TextField, Button, Switch, FormControlLabel} from "@material-ui/core"
export default function Form(){
  const [nome, setNome] = useState("") 
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState(0)

  return(
    <Container component='article' maxWidth="sm">
    <form>
      <TextField 
        value ={nome}
        onChange={e => {
          const novoNome = e.target.value
          if (novoNome.length >= 10) {
            novoNome = novoNome.substring(0, 10);
          }
          setNome(novoNome);
        }}
        id="nome" 
        label="Nome" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        />

      <TextField 
        label="Sobrenome"
        id="sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={e => {
          setSobrenome(e.target.value)
        }}/>

      <TextField 
        label="CPF" 
        id="cpf" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        onChange={e => {
          setCpf(e.target.value)
        }}/>

      <FormControlLabel 
        label="Promoções" 
        control={<Switch 
        name="promocoes"
        color="primary"
        defaultChecked/>}/>
    
      <FormControlLabel 
        label="Novidades" 
        control={<Switch 
        name="novidades" 
        color="primary" 
        defaultChecked/>}/>
     
     <Button 
     variant="contained" 
     color="primary"
     onClick={
       (e) =>{
         console.log(nome, sobrenome)
         e.preventDefault()
       }
     }
     >Enviar</Button>
    </form>
    </Container>
  )
}
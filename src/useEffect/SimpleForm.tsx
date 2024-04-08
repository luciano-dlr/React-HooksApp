import { ChangeEvent, useEffect, useState } from "react"
import { User } from "./types";


export const SimpleForm = () => {

  const [formState, setFormState] = useState<User>({
    username: 'leonardo',
    email: 'leonardo@gmail.com'
  })

  const { username, email } = formState;

  const handleOnInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = target;

    //valores computados de los objetos, entre llaves cuadradas, propiedad name tendra el valor de value
    setFormState({
      ...formState,
      [name]: value
    })

  }

  useEffect(() => {
   console.log('llamado effect');
   
  }, [])
  


  return (
    <>
      <h1>Formulario</h1>

      <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleOnInputChange}

      />

      <input type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleOnInputChange}
      />
    </>
  )
}



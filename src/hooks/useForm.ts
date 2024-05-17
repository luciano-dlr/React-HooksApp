import React, { ChangeEvent, useState } from 'react'
import { User } from '../useEffect/types';




export const useForm = ( initialForm:User ) => {

  const [formState, setFormState] = useState<User>(initialForm)

  const handleOnInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = target;

    //valores computados de los objetos, entre llaves cuadradas, propiedad name tendra el valor de value
    setFormState({
      ...formState,
      [name]: value
    })

  }

  const handleResetForm = () => {
    setFormState(initialForm)
    
  }


  return {
    ...formState,
    formState,
    handleOnInputChange,
    handleResetForm
  }
}



import { useState } from 'react'

export const useForm = (initialValue) => {
  const [formValues, setFormValues] = useState(initialValue)

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleResetForm = () => {
    setFormValues(initialValue)
  }

  return [
    formValues,
    handleInputChange,
    handleResetForm
  ]
}
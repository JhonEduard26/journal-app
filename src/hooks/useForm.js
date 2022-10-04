import { useEffect, useMemo, useState } from 'react'

export const useForm = (initialValue = {}, formValidations = {}) => {
  const [formValues, setFormValues] = useState(initialValue)
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidators()
  }, [formValues])

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false
    }
    return true
  }, [formValidation])

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

  const createValidators = () => {

    const formCheckedValues = {}

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField]
      formCheckedValues[`${formField}Valid`] = fn(formValues[formField]) ? null : errorMessage
    }
    setFormValidation(formCheckedValues)
  }

  return [
    formValues,
    handleInputChange,
    handleResetForm,
    formValidation,
    isFormValid
  ]
}
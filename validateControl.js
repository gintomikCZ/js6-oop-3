import validator from './validator.js'

export default function (control, value, valRules) {
  // procházet všechny valRules
  let isValid = true
  const errorDiv = document.getElementById(control + 'error')
  const controlEl = document.getElementById(control)
  valRules.forEach(valRule => {
    if (isValid) {
    // zavolat příslušnou funkci validátoru - funkce se bude jmenovat valRule.rule
      const result = validator[valRule.rule](value, valRule.par)
      if (!result) {
        controlEl.classList.add('invalid')
        errorDiv.textContent = valRule.message
        isValid = false
      }
    }
  })
  if (isValid) {
    errorDiv.textContent = ''
    controlEl.classList.remove('invalid')
  }
  // pokud pravidlo selže:
    // - přiřadíme kontrolce invalid třídu
    // - nahrajeme do error divu nějakou message
    // - vrátíme false
    // - nepokračujeme dál
  // když všechny rules projdou
    // - odebrat kontrolce třídu invalid
    // - vyprázdnit div error message
    // - vratit true
  return isValid
}
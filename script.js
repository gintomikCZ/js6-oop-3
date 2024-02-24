import formSettings from './formSettings.js'
import createContainer from './createContainer.js'
import validateControl from './validateControl.js'

const controls = Object.keys(formSettings)

/*
prohnat cyklus na všechny kontrolky
  vytvořit kontrolkový kontajner div (label, kontrolku, error-div)
    vytvoření kontrolky
    nastavení všech atributů té kontrolky
*/

const formData = {}
// for (key in obj)

const form = document.createElement('form')
form.addEventListener('submit', (e) => {
  // console.log('form is submitted, waw')
  // console.log(e)
  // provést validaci všech kontrolek
  e.preventDefault()
  console.log(formData)
  // pokud validace dopadne, zobrazíme zelený čtvereček, pokud ne tak červený
  const formIsValid = controls.reduce((acc, control) => {
    if (!validateControl(control, formData[control], formSettings[control].valRules)) {
      acc = false
    }
    return acc
  }, true)
  if (formIsValid) {
    console.log('form is ready to be sent')
  } else {
    console.log('please fill in the form properly')
  }
})

// strčit form do body
document.body.appendChild(form)


controls.forEach(control => {
  formData[control] = ''
  // vytvořit kontrolkový kontajner včetně kontrolky
  // strčit tento kontajner do formu
  const container = createContainer(control, formSettings[control])
  form.appendChild(container)
  const controlEl = document.getElementById(control)
  // eventListener pro sběr dat
  controlEl.addEventListener('input', () => {
    formData[control] = controlEl.value
  })
  // eventListener pro validaci ????
  controlEl.addEventListener('blur', () => {
    validateControl(control, controlEl.value, formSettings[control].valRules)
  })
})

const btn = document.createElement('button')
btn.textContent = 'odeslat'
form.appendChild(btn)

btn.addEventListener('click', (e) => {
  console.log(e)
})

// const form2 = document.querySelector('form')
// form2.addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log('form2 has been submitted')
// })

// const btn2 = document.getElementById('notInForm')
// btn2.addEventListener('click', (e) => {
//   form2.submit()
// })

// blur, focus
// blur(), focus()


import makeControlEl from "./makeControlEl.js"

/*
CRUD - Create, Read, Update, Delete
CRRUD - Create, Read (one), Read (more), Update, Delete

*/


export default function (control, settings) {
  // vytvořit kontajnerový div
  const el = document.createElement('div')
  el.classList.add('form-control')
  // vytvořit label
  const label = document.createElement('label')
    // labelu dát atribute "for"
    label.textContent = settings.label
    label.setAttribute('for', control)
    // vytvořit kontrolku - extra funkce
    const controlEl = makeControlEl(control, settings)
  // vytvořit error-msg div
    const errorDiv = document.createElement('div')
    errorDiv.setAttribute('id', `${control}error`)
    errorDiv.classList.add('error-message')
  el.appendChild(label)
  el.appendChild(controlEl)
  el.appendChild(errorDiv)
  // to všechno nastrkat do kontajneru
  return el
}
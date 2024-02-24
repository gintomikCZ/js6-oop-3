const getElement = {
  select: (settings) => {
    const sel = document.createElement('select')
    // vytvořit options
    settings.options.forEach((option) => {
      const el = document.createElement('option')
      el.setAttribute('value', option.value)
      el.textContent = option.label
      sel.appendChild(el)
    })
    return sel
  },
  textarea: (settings) => {
    return document.createElement('textarea')
  },
  input: (type) => {
    const el = document.createElement('input')
    el.setAttribute('type', type)
    return el
  }
}


export default function (control, settings) {
  // vytvořit příslušný element (podle settings.type)
  const controlEl = (settings.type in getElement) ? getElement[settings.type](settings) : getElement.input(settings.type)
  // if (settings.type === 'textarea') {
  //   controlEl = document.createElement('textarea')
  // } else if (settings.type === 'select') {
  //   controlEl = document.createElement('select')
  // } else {
  //   controlEl = document.createElement('input')
  //   controlEl.setAttribute('type', settings.type)
  // }
  // controlEl.setAttribute('id', control)
  const internalSettings = Object.assign({ id: control }, settings)
  delete internalSettings.label
  delete internalSettings.valRules
  delete internalSettings.type

  // protože teď chci na zbylé vlastnosti prohnat cyklus a nastavit všechny atributy ... !!!
  for (let attribute in internalSettings) {
    if (typeof internalSettings[attribute] !== 'boolean') {
      controlEl.setAttribute(attribute, internalSettings[attribute])
    } else if (internalSettings[attribute]) {
      controlEl.setAttribute(attribute, attribute)
    }
  }

  return controlEl
}
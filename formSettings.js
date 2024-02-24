const formSettings = {
    firstname: {
      type: 'text',
      label: 'first name',
      disabled: false,
      autofocus: false,
      placeholder: 'first name',
      valRules: [
        { rule: 'required', message: 'first name is required' },
        { rule: 'maxLength', par: 50, message: 'first name can not contain more then 50 chars' }
      ]
    },
    lastname: {
      type: 'text',
      label: 'last name',
      valRules: [
        { rule: 'required', message: 'last name is required' },
        { rule: 'maxLength', par: 100, message: 'last name can not containe more then 100 chars' }
      ]
    },
    dateofbirth: {
      type: 'date',
      label: 'date of birth',
      placeholder: 'DD.MM.RRRR',
      valRules: [
        { rule: 'required', message: 'date of birth is required' },
        { rule: 'isPast', message: 'the date has to be past' }
      ]
    },
    comment: {
      type: 'textarea',
      label: 'please leave your comment',
      rows: 10,
      cols: 45,
      valRules: [
        { rule: 'required', message: 'comment is required' },
        { rule: 'maxLength', par: 100, message: 'comment can not containe more then 500 chars' }
      ]
    },
    city: {
      type: 'select',
      label: 'city',
      valRules: [
        { rule: 'required', message: 'city is required' },
      ],
      options: [
        { label: '', value: '' },
        { label: 'Praha', value: 1 },
        { label: 'Brno', value: 2 },
      ]
    }
  }
  export default formSettings

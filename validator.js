export default {
  required (value) {
    return !!value
  },
  maxLength (value, par) {
    return value.length <= par
  },
  isPast (value) { // '2024-02-20'
    const today = new Date()
    const dt = new Date(value)
    return today.getTime() > dt.getTime()
  }
}
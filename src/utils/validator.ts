/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const required = (value: any) => value ? true : 'This field is required'
const minLength = (value: string | any[], minLength: number) => value ? (value && value.length >= minLength) || `Must not be less than ${minLength} characters` : true
const email = (value: string) => value ? /.+@.+\..+/.test(value) || 'Must be a valid email address' : true
export default {
  required,
  minLength,
  email,
  NumbersOnly (e:any) {
    e = (e) || window.event
    const charCode = (e.which) ? e.which : e.keyCode
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || charCode === 69) {
      e.preventDefault()
    } else {
      return true
    }
  }
}

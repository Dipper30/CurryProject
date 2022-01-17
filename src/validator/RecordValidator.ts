const BaseValidator = require('./BaseValidator')
const validator = require('validator')

export default class RecordValidator extends BaseValidator {

  // type check
  rules = [
    'id|number',
    'good|number|required',
    'total|number|required',
    'tag|number|required',
  ]

  constructor (params: any) {
    super()
    this.params = params
  }

  checkAuthParam (): Boolean {
    if (!this.checkParams(this.params, this.rules)) return false
    
    return this.checkParams(this.params, this.rules)
      && this.isBetween(this.params.username, 2, 10)
      && this.isBetween(this.params.password, 6, 18)
  }

  goCheck (): Boolean {
    return this.checkParams(this.params, this.rules)
      && this.isPositiveInteger(this.params.good)
      && this.isPositiveInteger(this.params.total)
      && this.params.good <= this.params.total
      && (!this.params.date || this.isDateString(this.params.date))
      && (!this.params.id || this.isPositiveInteger(this.params.id))
  }
}

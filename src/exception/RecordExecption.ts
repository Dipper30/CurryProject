import { errCode } from '../config/errCode'
import BaseException from './BaseException'

class RecordException extends BaseException {

  constructor (code: number = errCode.RECORD_ERROR, message?: string|null|undefined) {
    super(code, message)
  }
}

export default RecordException
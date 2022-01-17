import { role } from '../config/auth'
import { Account } from '../types/common'
import { AccountInfo } from '../types/User'
import BaseService from './BaseService'
import { encryptMD5, getUnixTS, getUnixTSByDateString, omitFields } from '../utils/tools'
import { UserException } from '../exception'
import { errCode } from '../config'
import { recordType } from '../types/Service'
import RecordException from '../exception/RecordExecption'

const models = require('../../db/models/index.js')
const { sequelize } = require('../../db/models')
const {
  User: UserModel,
  Record: RecordModel,
  Tag: TagModel,
} = models

// const Op = Sequelize.Op

class Record extends BaseService {
  constructor () {
    super()
  } 

  async postRecord (data: recordType) {
    // const t = await sequelize.transaction()

    

    console.log(2)
    try {

      // 判断是否有date属性
      if (!data.date) data.date = getUnixTS()
      else {
         const ts = getUnixTSByDateString(data.date)
         if (ts < 0) throw new RecordException(errCode.INVALID_DATE)
         data.date = ts
      }

      const user = await UserModel.findByPk(data.uid)
      if (!user) throw new UserException(errCode.USER_ERROR, 'User Not Found')

      const tag = await TagModel.findOne({
        where: {
          type: data.tag
        }
      })

      if (!tag) throw new RecordException(errCode.INVALID_TAG)
      
      const record = await RecordModel.create(data)
      return record
    } catch (error) {
      // something wrong
      // await t.rollback()
      return false
    }
  }

  async loginAccount (params: Account) {
    const { username, password } = params
    const p = encryptMD5(password)
    try {
      const [user, created] = await UserModel.findOrCreate({
        where: {
          username,
          password: p,
        },
        defaults: {
          username,
          password: p,
        },
        attributes: ['id', 'username'],
      })
      
      return user
    } catch (error) {
      return error
    }
  }

}

export default new Record()
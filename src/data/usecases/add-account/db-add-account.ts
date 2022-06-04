import {
  Encrypter,
  AddAccount,
  AddAccountModel,
  AccountModel,
  AddAccountRepository
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly AddAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.AddAccountRepository = addAccountRepository
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(account.password)
    await this.AddAccountRepository.add(Object.assign({}, account, { password: hashedPassword }))
    return new Promise(resolve => resolve(null))
  }
}

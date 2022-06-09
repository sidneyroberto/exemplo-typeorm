import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Contact } from '../entity/Contact'

export class ContactController {
  private _repository: Repository<Contact>

  constructor() {
    this._repository = AppDataSource.getRepository(Contact)
  }

  async save(contact: Contact) {
    const savedContact = await this._repository.save(contact)
    return savedContact
  }
}

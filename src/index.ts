import { connectToDB } from './config/db'
import { ContactController } from './controllers/ContactController'
import { Contact } from './entity/Contact'

const run = async () => {
  await connectToDB()
  const contact = new Contact()
  contact.email = 'sidney.sousa@ifms.edu.br'
  contact.name = 'Sidney Sousa'
  contact.phone = '(67) 99999-9999'

  const contactCtrl = new ContactController()
  const savedContact = await contactCtrl.save(contact)
  console.log(savedContact)
}

run()

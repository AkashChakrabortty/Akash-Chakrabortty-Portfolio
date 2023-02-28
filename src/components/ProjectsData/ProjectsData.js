import cpt1 from './cpt-1.jpg'
import cpt2 from './cpt-2.jpg'
import cpt3 from './cpt-3.jpg'
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import t from './t.jpg'
export const ProjectsData = [
    {
      id:1,
      stack: 'Full Stack Project',
      type: 'Group Project',
      name: 'Capital Trust Bank',
      img: [cpt1,cpt2,cpt3],
      live: 'https://capital-trust-bank-ee791.web.app/',
      client: "https://github.com/emon-webdev/Capital-Trust-Bank",
      server: "https://github.com/AkashChakrabortty/Capital-Trust-Bank-Server" ,
      details: ['Our project name is Capital Trust Bank. This is a banking website. We try to build the features which banks generally provide like opening an account, loan service, emergency service, donate, emi feature, exchange rate, admin and customer dashboard, customers support, deposit, withdraw, sent money and so on.','My contribution to our group project:','1)Device activity feature: The user can log in from maximum 3 browsers at a time.','2)Dashboard setup: I set up a dashboard for different roles like admin and customers.','3)Customer support: If customers face any issues they can contact with admin by sending messages.',"4)Sent money: The customer can be sent money to another customer's account",'5)Banking card: If the customer applies for a card and the admin approves the request, then the customer can download a card with his information.',"6)Loan feature: If a customer applies for a loan and the admin approves the request, then the loan amount will be added to the customer's account.",'7)Customer verification: Admin can verify customers to show verify appliers information.','8)Notification feature:','==>If the customer applies for verification, the admin gets a notification.','==>Admin and customers both get a notification for customer support.','9)Withdraw Delay: If the customer tries to withdraw the amount, we give him 5s. At this time, the customer can cancel his withdrawal process.','10)VAT policy: We cut a low number of amount monthly from customers account for our vat policy.']
    },
    {
      id:2,
      stack: 'Full Stack Project',
      type: 'Individual Project',
      name: 'ChitChat',
      img: [c1,c2,c3]
    },
    {
      id:3,
      stack: 'JavaScript Fun Project',
      type: 'Individual Project',
      name: 'TicTacToe',
      img: [t]
    },
  ]
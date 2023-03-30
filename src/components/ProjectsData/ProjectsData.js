
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import t1 from './t1.jpg'
import t2 from './t2.jpg'
import t3 from './t3.jpg'
export const ProjectsData = [
    {
      id:1,
      stack: 'Full Stack Project',
      type: 'Group Project',
      name: 'Capital Trust Bank',
      img: ['https://i.ibb.co/Fx6Q6wb/cpt-1.png',
      'https://i.ibb.co/rvK0Cd7/cpt-2.png',
      'https://i.ibb.co/pwd0nhy/cpt-3.png'],
      live: 'https://capital-trust-bank-ee791.web.app/',
      client: "https://github.com/emon-webdev/Capital-Trust-Bank",
      server: "https://github.com/AkashChakrabortty/Capital-Trust-Bank-Server" ,
      tech: ['Tailwind','React','Express','MongoDB'],
      link: ['https://capital-trust-bank-ee791.web.app/','https://github.com/emon-webdev/Capital-Trust-Bank','https://github.com/AkashChakrabortty/Capital-Trust-Bank-Server'],
      details: ['Our project name is Capital Trust Bank. This is a banking website. We tried to build the features which banks generally provide like opening an account, loan service, emergency service, donate, emi feature, exchange rate, admin and customer dashboard, customers support, deposit, withdraw, sent money and so on.','My contribution to our group project:','1)Device activity feature: The user can log in from maximum 3 browsers at a time.','2)Dashboard setup: I set up a dashboard for different roles like admin and customers.','3)Customer support: If customers face any issues they can contact with admin by sending messages.',"4)Sent money: The customer can be sent money to another customer's account",'5)Banking card: If the customer applies for a card and the admin approves the request, then the customer can download a card with his information.',"6)Loan feature: If a customer applies for a loan and the admin approves the request, then the loan amount will be added to the customer's account.",'7)Customer verification: Admin can verify customers to show verify appliers information.','8)Notification feature:','==>If the customer applies for verification, the admin gets a notification.','==>Admin and customers both get a notification for customer support.','9)Withdraw Delay: If the customer tries to withdraw the amount, we give him 5s. At this time, the customer can cancel his withdrawal process.','10)VAT policy: We cut a low number of amount monthly from customers account for our vat policy.']
    },
    {
      id:2,
      stack: 'Full Stack Project',
      type: 'Individual Project',
      name: 'ChitChat',
      img: [c1,c2,c3],
      tech: ['Tailwind', 'Redux','React','Express','MongoDB'],
      link: ['https://chitchat-v1-291a5.web.app/','https://github.com/AkashChakrabortty/ChitChat','https://github.com/AkashChakrabortty/-ChitChat-server'],
      details: ['ChitChat is a social communication project.','1) Login & Register: Firstly users must have an account to use this platform. If they do not have an account, then they can create a new account','2) Add Friends: After successfully login, user can sent friend request to the ChitChat users. User can see total friend request.', '3) Post Status: User can post status including photo and text.', '4) Like: User can give like to friends post.', '5) Comment: User can do comment to friends post.', '6) Search Users: User can search ChitChat users by their name.', '7) Chat: User can chat with friend by texting.', '8)Profile Update: User can update his information like study, work, from, relationship and bio. User can also change his profile and cover photo.','9) Display interaction: User can see likes and comments that he gave to his friends post.','10) Display Post: User can see his friends post in homepage and own post in profile page.']
    },
    {
      id:3,
      stack: 'Full Stack Project',
      type: 'Individual Project',
      name: 'Buy-Sell',
      img: [t1,t2,t3], 
      tech: ['Bootstrap','React','Express','MongoDB'],
      link: ['https://buy-sell-6f50b.web.app/','https://github.com/AkashChakrabortty/Buy-Sell','https://github.com/AkashChakrabortty/Buy-Sell-Server'],
      details: ['Buy-Sell is a resale market place project.','1) Login & Register: Users must have an account to buy product or sell product.','2) Role: There are 3 kinds of role buyer,seller and admin.', '3) Admin role: Admin can see all buyers, sellers and reported items and delete any of buyer, seller or reported items in the dashboard.', '4) Seller role: Seller can add product to sell and see all product that he added in the dashboard and advertisement his product.', '5) Buyer role: Buyer can order to product and see all order products in the dashboard.', '6) Report product: User can report any product to the admin.']
    },
  ]
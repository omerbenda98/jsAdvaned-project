## Getting Started

To get started with this website:

1. open with 'live server'
2. Click the 'login' button to enter the login page
3. enter email "hackeru@gmail.com" and password "Aa123456!"
4. if existing user does not exist register and login with new account
   5.you can also change from and into admin by checking "business client" in the profile page or in regestration

## technologies

navbar- navigates through links to other pages using routing and display the correct navbar for admin/not admin

isConnected/isAdmin- is checked in 2 seperate js files in utils file by checking token in the local storage

local storage - users and props are saved, edited and deleted in local storage

crud - crud functions are created at the home page and passed down using props.

register/login validations - validations checks usings reggex in and returns to errors to validtion.js adn then returns an array of error messages for the login/register page.

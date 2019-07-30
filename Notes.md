This is the notes sheet for one click ethereum payments for smart contracts (only)

for now this will be done with 2 centralized servers, for demo reasons.

server will handle all smart contract interactions and email/text notifications will be used for all high volume or high amount in transactions

client will be a simple sign in page, and a second demo client will be used to show off the one-click button functionality

button will communicate with a gateway api which will run validation and monitor for ddos attacks etc

    Server 1 handles the static files of the website as well as manages some basic user profiles.
    Server 1 stores personal account balance

    Server 2 handles the api which will be called when the button is pressed. 
    Server 2 also handles the api oauth sign-in 

premade button component will call the api similar to the paypal button

one single account stores the "active" crypto which is in low ammounts



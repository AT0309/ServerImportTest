Email.send({
  Host : "smtp.elasticemail.com",
  Username : "takino0309@gmail.com",
  Password : "81C7CC09050BA52F57BEFD6E816670B2EAE1",
  To : 'takino0309@gmail.com',
  From : "takino0309@gmail.com",
  Subject : "Test",
  Body : "Test"
}).then(
  message => alert(message)
);

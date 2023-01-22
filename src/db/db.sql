CREATE DATABASE users;

CREATE TABLE all_users(
  user_id serial not null PRIMARY KEY,
  user_name varchar(128) not null,
  user_email varchar(128) not null,
  user_password varchar(64) not null,
  user_img varchar not null
);


INSERT INTO all_users(user_name, user_email, user_password, user_img) VALUES('Umid', 'test@gmail.com', '12345678', 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg');


UPDATE all_users SET user_name = 'UMID', user_email = 'umid@gmail.com', user_password = 'umid123', user_img = 'https://www.php.net/images/meta-image.png' WHERE user_id = 6;
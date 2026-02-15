project/settings

- db engine / name
- installed apps


Create tables in the database, run: 


python manage.py migrate

migrate - The migrate command looks at the INSTALLED_APPS setting and creates any necessary database tables according to the database settings in your mysite/settings.py file and the database migrations shipped with the app 

 run the command-line client for your database and type \dt (PostgreSQL), SHOW TABLES; (MySQL), .schema (SQLite), or SELECT TABLE_NAME FROM USER_TABLES; (Oracle) to display the tables Django created.


 CREATING MODELS

 model defines the fields and behavior of data. migrations are derived from models.  a history of your updated schemas

app/models

create model classes here

then, activate models

first, tell project that polls app is installed: 

app/apps.py- 

https://docs.djangoproject.com/en/2.2/intro/tutorial02/




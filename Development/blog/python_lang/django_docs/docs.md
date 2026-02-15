A project is essential the environemnt for your work.  it is the configurations and apps

django-admin startproject mysite

  manage.py: A command-line utility that lets you interact with this Django project in various ways. You can read all the details about manage.py in django-admin and manage.py.

    mysite/  package

    mysite/__init__.py: An empty file that tells Python that this directory should be considered a Python package.  

    mysite/settings.py: project config.  

    mysite/urls.py: The URL declarations for this Django project; a “table of contents” of your Django-powered site. You can read more about URLs in URL dispatcher.

cd mysite
python manage.py runserver
python manage.py runserver 8080

An app is the web application that does something, like take polling data, access db, etc.

   python manage.py startapp polls


polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py - contains functions that return an httpResponse

1. create a view
    - import render, httpResponse
    - app.views.py create a function index
2. map it to a url.  create a app/urls.py file
    - import path and views
    - urlpatterns is a list with a path() that refers to views.index
3. go to project/urls.py to register 
  - path('polls/', include('polls.urls'))


URLconf - a table of contents for your django.  it maps urls and view functions 

urlpatterns

this needs to be pointed at the polls.url
so mysite .urls points to poll/urls
we add include to mysite/urls
include function references other URLconfs
its like express.router

The path() function is passed four arguments, two required: route and view, and two optional: kwargs, and name. At this point, it’s worth reviewing what these arguments are for.
## Django Auth0 Vue demo

This is an example application which demonstrates how to create a Django app secured with JWT and Auth0. 



## Installing

You need to have `virtualenv` and Python 3 installed (Django 2 requires Python 3) then:

First create a new virtual environment and activate it with:

```bash
 virtualenv -p python3 env
 source env/bin/activate
```

Next, clone the project from Github:

```bash
git clone https://github.com/techiediaries/django-auth0-vue
cd django-auth0-vue
```

Install the project requirements using pip:

```bash
pip install -r requirements.txt
```

If the installation of the `cryptography` package fails make sure to install the `python3-dev` package. In Ubuntu you can use the following command:

```bash
sudo apt-get install python3-dev
``` 

Next install the Vue.js dependencies and run the front-end dev server with:

```bash
cd vueapp
npm install
npm run dev
```

Finally migrate the database then run the Django dev server with:

```bash
python manage.py migrate
python manage.py runserver
``` 

You can now navigate with your web browser to http://localhost:8080 and start playing with the demo.






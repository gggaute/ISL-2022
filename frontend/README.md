# TODO !
# ISL-2022
github project for our ISL task


## Installation

1. **Prerequisites**  
   Make sure you have the following technologies installed:

   - Python
   - Pip
   - Node.js

2. **Clone the project**  
   Create a local folder and clone the project:

   - `git clone https://github.com/phajsi/LIM01.git`

3. **Create virtual environment and activation**  
   Create a virtual environment. It can be inside the project folder or somewhere else on your computer. If you are making it inside the project folder then make sure to not push it to github.

   - `python3 -m venv name_of_environment`

   After creating the environment it has to be activated. You do this by going into /env/Scripts/, then write activate in the terminal. In Git Bash, you have to write `source activate` in the terminal from /env/Scripts/.

4. **Install requirements.txt**  
   If you have startet the virtual environment then go into the project backend folder LIM01/backend and install the requirements from requirements.txt

   - `pip install -r requirements.txt`

   you can check if it downloaded correctly by running pip freeze and comparing to the requirements.txt file. Remember to activate the virtual environment every time you are running the project as all the backend libraries are downloaded there.

5. **Install frontend packages**  
   Next we need to install the frontend packages located in package.json. Cd into LIM01/frontend and run:

   - `npm install`

6. **Building the project**  
   When all the packages are installed you should be able to run the website. While in the frontend folder run:

   - `npm run build`  
     This will create a build folder in backend so that backend and frontend can work togheter. Remember to build everytime you have made changes to the frontend.

7. **Run the project**  
   After building the project, cd back to the project folder and into LIM01/backend and then run:

   - `python manage.py runserver`  
     While the server is running, open your browser and go to:
     http://localhost:8000/

   _Alternatively you can run the project from the frontend folder by running `npm start` However this will not run the backend server, but it can be useful if working with UI/UX._

**Remark**  
The commands may vary depening on the os that you are using. The installation guide is based on Windows and Git bash command line.
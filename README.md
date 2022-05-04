# ISL-2022

## About
This is the repository for "NfU - Spill" at the "Norsk for Ungdom" website. The project is apart of the Language, Integration and Media Project (LIM). LIM is a project under the Institute for Language and Literature (ISL) at NTNU. NfU - Spill was developed by a group of IDI students in the course IT2901 "Informatics Project II" at NTNU, Spring 2022.

The NfU - Spill project revolves around developing exciting and immersive Norwegian language exercises for young migrants. The code is deployed in connection to Norsk For Ungdom (https://www.ntnu.edu/learnnowyouth/) at https://nfu-spill.hf.ntnu.no/.

## Developers
   - Brandser, Gaute
   - Jenssen, Synne
   - Kristiansen, Guri Skagsoset
   - Naseri, Jasmina Elizabeth
   - Skattum, Aksel
   - Søvik, Ingvild

## Installation

1. **Prerequisites**  
   Make sure you have the following technologies installed:

   - Python
   - Pip
   - Node.js

2. **Clone the project**  
   Create a local folder and clone the project:

   - `git clone https://github.com/gggaute/ISL-2022.git`

3. **Create virtual environment and activation**  
   Create a virtual environment(use a Git Bash terminal). It can be inside the project folder or somewhere else on your computer(i would reccomend just doing cd .. from project folder and doing it there). If you are making it inside the project folder then make sure to not push it to github.

   - `python3 -m venv name_of_environment`

   After creating the environment it has to be activated. You do this by going into /env/Scripts/, then write activate in the terminal. In Git Bash, you have to write `source activate` in the terminal from /env/Scripts/.

4. **Install requirements.txt**  
   If you have startet the virtual environment then go into the project backend folder ISL-2022/backend and install the requirements from requirements.txt

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

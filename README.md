###Directory Structure
        Project-Folder
            |-- config.py
            |--run.py
            |--requirements.txt
            |--conf.js
            |__ /venv
            |-- db.py
            |__ /scaffold
            |-- scaffold.py
            |-- tests.bash    #Tests for all modules
            |__ app/
                |-- __init__.py
                +-- module-1
                    |-- __init__.py
                    |-- models.py
                    |-- test_module-1.py  # Unit Tests for module 1
                    |-- views.py
                        
                +-- module-2
                    |-- __init__.py
                    |-- models.py
                    |-- test_module-2.py  # Unit Tests for module 2
                    |-- views.py
                |__ templates
                   |-- index.html
                   |-- login.html
                   |-- home.html
                   +-- static
                          + -- js
                                 |-- app.js
                                 |-- login.js
                          |-- css
                          |-- images
                   +-- module-1
                                   |-- _form.html
                                   |-- index.html
                                   |-- add.html
                                   |-- update.html
                                   |-- controller.js
                                   |--conf.js
                                   |--spec.js
                   +-- module-2
                                   |-- _form.html
                                   |-- index.html
                                   |-- add.html
                                   |-- update.html
                                   |-- controller.js
                                   |-- conf.js
                                   |-- spec.js




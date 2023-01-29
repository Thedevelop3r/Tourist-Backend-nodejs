



# install Mysql server in your computer
# port Mysql port should be 3306 when configuring it and create a database in  mysql


# edit the .env file in the root dir of the project


DB_NAME=tour   # change to your db name
DB_USER=root        # change to your db user
DB_PASSWORD=admin   # your db password
HOST=localhost      # your host
DIALECT=mysql       # database schema mysql for sequelize
PORT=7000           # port of your choice


## install dependecies

npm i

## start server

npm run start

## start server in dev

npm run dev

## API,s

replace <port> with your choice port
currently it localhost:7000

## Create User
# Method POST
http://localhost:<port>/api/users/create

require params in req.body

1: username
2: password

## Get All Users
# Method GET
http://localhost:<port>/api/users/all

no params required

    get all users


# Create Roles
# Method POST
http://localhost:<port>/api/roles/create

send params in req.body

1: userId
2: roleId

## Get All Roles
# Method GET
http://localhost:<port>/api/roles/all

no params required

    get all roles

# Create Permissions
# Method POST
http://localhost:<port>/api/permissions/create

send params in req.body

1: title
2: modelType
3: method

## Get All Permissions
# Method GET
http://localhost:<port>/api/permissions/all

no params required

    get all permissions

# Create User Roles
# Method POST
http://localhost:<port>/api/user-roles/create

send params in req.body

1: userId
2: roleId

## Get All User Roles
# Method GET
http://localhost:<port>/api/user-roles/all

no params required

    get all user roles

# Create Roles Permission
# Method POST
http://localhost:<port>/api/roles-permission/create

send params in req.body

1: roleId
2: permissionId

## Get All Roles Permission
# Method GET
http://localhost:<port>/api/roles-permission/all

no params required

    get all user roles permission






# API USERS

## Overview
It's a CRUD  API managing all users

### [POST] Create user
Allows the creation of a single user

|                              |                         |
|------------------------------|-------------------------|
| Requires authentication?     | NO                      |
| Who can use it?              | Owner and users         |
| Response formats             | application/json        |


* HTTP request: POST -> user/create


#### Parameters :
```javascript
{
    'first_name': 'Sébastien', //optional,
    'last_name': 'NOBOUR', // optional
    'email': 'myemail@gmail.com', // required
    'password': '123456789', //required
    'age': 25, //optional
    'gender': 'm', //optional
    'height': 1.73, //optional
    'weight': 98,
    'city': 'Versailles', //optional
    'city_code': '78000', //optional
    'street_number': 12, //optional
    'street_type': 'rue', //optional
    'street_name': 'de Paris', //optional
    'phone': '0655555500', //optional
    'image_profil': 'https://randomuser.me/api/portraits/men/86.jpg' //optional
}

```


#### Response: 

```javascript
{
    'id': '1234456ID', //optional
    'first_name': 'Sébastien', //optional,
    'last_name': 'NOBOUR', // optional
    'email': 'myemail@gmail.com', // required
    'password': '123456789', //required
    'age': 25, //optional
    'gender': 'm', //optional
    'height': 1.73, //optional
    'weight': 98,
    'city': 'Versailles', //optional
    'city_code': '78000', //optional
    'street_number': 12, //optional
    'street_type': 'rue', //optional
    'street_name': 'de Paris', //optional
    'phone': '0655555500', //optional
    'image_profil': 'https://randomuser.me/api/portraits/men/86.jpg' //optional
}

```

###[GET] Show user
Get an user by id.

|                              |                         |
|------------------------------|-------------------------|
| Requires authentication?     | NO                      |
| Who can use it?              | Owner and users         |
| Response formats             | application/json        |

#### Parameters :
```javascript
```
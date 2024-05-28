//this is post register request
http://localhost:3000/auth/register
{"username":"ison","password":"12345","email":"isonalwish23@gmail.com"}

//this is post login request
http://localhost:3000/auth/login
{"username":"ison","password":"12345"}

//this is put request for profile
http://localhost:3000/user/profile
//this is bearer token used to authorize the user
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTY5MDg4OTQsImV4cCI6MTcxNjkxMjQ5NH0.rsWuH1Uq3PYZ6GH-2yiDBWjWaQWpuHZERJRD8MDPnlU
{
  "name": "ison",
  "bio": "this is a test bio data",
  "phone": "99636358",
  "isPublic": false
}
or
{
  "name": "ison",
  "bio": "this is a test bio data",
  "phone": "99636358",
  "isPublic": false,
  "isAdmin":true
}

//this is a put request for photo update
http://localhost:3000/user/profile/photo

//this is a get request where admin can see all the profiles
http://localhost:3000/user/profiles
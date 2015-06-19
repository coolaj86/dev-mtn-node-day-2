dev-mtn-node-day-2
==================

Our coding time together... &lt;3

Documentation and Screencasts
=====

See
  * [vim for people who would rather not use vim](https://coolaj86.com/articles/vim-for-people-who-dont-want-to-use-vim.html)
  * [Intro to networking with netcat and node.js](https://coolaj86.com/articles/intro-to-networking-with-netcat-and-nodejs.html)
  * [Intro to http with netcat and node.js](https://coolaj86.com/articles/intro-to-http-with-netcat-node-connect.html)
  * [localhost.daplie.com-certificates](https://github.com/Daplie/localhost.daplie.com-certificates)
  * [How to get your own HTTPS certificate](https://coolaj86.com/articles/how-to-create-a-csr-for-https-tls-ssl-rsa-pems/)

What we did today
===========

```bash
git clone git@github.com:coolaj86/dev-mtn-node-day-2.git

pushd ./dev-mtn-node-day-2

# create serve.js with webserver
vim serve.js

# test serve.js by hand
node serve 2015
```

```bash
npm install --save express@4.x
```

```
# leave the server stuff in serve.js, but move the app/express stuff to app.js
vim app.js
```

```bash
# use body-parser
npm install --save express@4.x
```

```bash
curl -X GET https://localhost.daplie.com:8443/api/message

curl -X POST https://localhost.daplie.com:8443/api/message \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{ "name": "Bob", "msg": "Hello everyone!" }'
```

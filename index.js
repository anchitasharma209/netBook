const express = require('express')
const app = express()
const port = 3000

const db = require('./config/mongoose')
const router = require('./routes')
var expressLayouts = require('express-ejs-layouts');
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.urlencoded())
app.set('view engine',"ejs")
app.set('views','./views')
app.use(expressLayouts);

app.use('/',router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
//data C:\Program Files\MongoDB\Server\6.0\data\
//log C:\Program Files\MongoDB\Server\6.0\log\
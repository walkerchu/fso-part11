const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

// exercise 11.12 : add 'version' endpoint
app.get('/version', (req, res) => {
  res.send('11.12.2') // change this string for each new version deployed
})

// exercise 11.12 : add 'health check' endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})


start()

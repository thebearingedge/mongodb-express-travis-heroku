const createApp = require('./create-app')

const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3000

const app = createApp()

app.listen(PORT, () => {
  NODE_ENV !== 'production' &&
  console.log('listening on port ' + PORT)
})

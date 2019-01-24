import express from 'express'

const app = express()

app.get('/', (req, resp) => {
  res.send('All ready')
})

app.listen(8000, () => {
  console.log('Server running...')
})

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kgayathri:kgayathri@cluster0.d1h5b87.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!')
})

.catch((err) => {
    console.log(err)
})

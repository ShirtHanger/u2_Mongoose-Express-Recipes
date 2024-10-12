const db = require('../db')
const { Cuisine } = require('../models')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
    const cuisines = [
      {
        country: 'name',
        religion: 'Pickle Religion',
        isMoral: false,
      },
      {
        country: 'name',
        religion: 'Pickle Religion',
        isMoral: false,
      },
      {
        country: 'name',
        religion: 'Pickle Religion',
        isMoral: false,
      },
    ]
  
  

  await Cuisine.insertMany(cuisines) 

  console.log('============================')
  console.log('So many different CUISINES! We need more stomachs!')
  console.log('============================')

}

const run = async () => {

  await main()
  
  db.close()
}

run()
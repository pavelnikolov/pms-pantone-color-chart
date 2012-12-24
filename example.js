
var pantone = require('./pantone')

// rgb usage

pantone({ r: 42, g: 112, b: 174 }, rgbCallback)

function rgbCallback(err, results) {
  if (err) throw new Error(err)
  console.log(results)
}

// hex usage

pantone({ hex: '2A70AE' }, hexCallback) // you can also use `rgb` instead of `hex`

function hexCallback(err, results) {
  if (err) throw new Error(err)
  console.log(results)
}

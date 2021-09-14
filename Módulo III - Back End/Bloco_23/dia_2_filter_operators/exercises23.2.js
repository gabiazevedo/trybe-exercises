db.superheroes.find({ 'aspects.height': { $lt: 180 }})

db.superheroes.find({ 'aspects.height': { $lt: 180 }}).count()

db.superheroes.find({ 'aspects.height': { $lte: 180 }})

db.superheroes.findOne({ 'aspects.height': { $gte: 200 }})

db.superheroes.find({ 'aspects.height': { $gte: 200 }}).count()

db.superheroes.find({ 'aspects.height': { $gte: 200 }}).count()

db.superheroes.find({ 'aspects.eyeColor': 'blue'}).count()

db.superheroes.find({ 'aspects.hairColor': { $in: ['black', 'No Hair']}})

db.superheroes.find({ 'aspects.hairColor': { $in: ['black', 'No Hair']}}).count()

db.superheroes.find({ $nor: [{'aspects.hairColor': 'black'}, {'aspects.hairColor': 'No Hair'}]}).count()

db.superheroes.find({ 'aspects.height': { $not: { $gt: 180 } }}).count()

db.superheroes.find({ $nor: [{'race': 'Human'}, {'aspects.height': { $gt: 180 } }]})

db.superheroes.find({ $and: [{ "aspects.height" : { $gt: 180, $lt: 200 }}, { $or : [{ "publisher" : "Marvel Comics"}]}]})

db.superheroes.find({ $and: [{"aspects.weight": { $gte: 80, $lte: 100 }},  { $or: [{ race: "Human" }, { race: "Mutant" }]}, { publisher: { $ne: "DC Comics" }}]})

db.superheroes.find({ $and: [{ publicher: { $not: { $eq: 'DC Comics'}} , $or: {[{'aspects.weight': {$gt: 80, $lt: 100}}, {race: 'Human'}, {race: 'Mutant'}]}]})
// avaliar lógica

db.superheroes.find({ race: { $not: { $exists: true }}}).count()

db.superheroes.find({ 'aspects.hairColor': { $exists: true }}).count()

db.superheroes.deleteOne({publisher: 'Sony Pictures'})

db.superheroes.deleteMany({publisher: 'George Lucas'})

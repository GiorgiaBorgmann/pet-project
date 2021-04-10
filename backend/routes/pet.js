
const router = require('express').Router();
const Pet = require('../model/Animal')
const lodash = require('lodash')

router.post('/new-pet', async (req, res) => {
    //creat pet
    const pet = new Pet({
        type: req.body.type,
        Name: req.body.Name,
        adoptionStatus: req.body.adoptionStatus,
        height: req.body.height,
        weight: req.body.weight,
        color: req.body.color,
        bio: req.body.bio,
        hypoallergenic: req.body.hypoallergenic,
        diet: req.body.diet,
        photoURL: req.body.photoURL
    })
    try {
        const savedPet = await pet.save()
        res.send({
            pet: pet._id
        })
    } catch (err) {
        res.status(400).send(err)
    }
});
router.get('/pet-list', async (req, res) => {
    const petList = await Pet.find({})
    res.send(petList)
})
router.get('/:id', async (req, res) => {
    let id = req.params.id
    const pet = await Pet.findOne({ _id: id })
    res.send(pet)
})
router.put('/update/:id', async (req, res) => {
    let id = req.params.id
    let update = lodash.pick(req.body, ["type", "Name", "adoptionStatus", "height", "weight", "bio", "color", "hypoallergenic", "diet", "photoURL"]);
    update = lodash.pickBy(update, lodash.identity);
    Pet.findByIdAndUpdate(id, { $set: update }, { new: true }, (error, userObj) => {
        if (error) res.status(400).send(err)
        else res.send('pet updated')
    })

})
module.exports = router;
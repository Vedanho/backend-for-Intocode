const Status = (require('../Models/Status.model'))

module.exports.statusControllers = {
    createStatus: async (req, res) => {
        await Status.create({text: req.body.text})
        res.json('Cтатус сделан')
    },
    deleteStatus: async(req, res) => {
        await Status.findByIdAndRemove(req.params.id)
        res.json('Статус удалён')
    }
}


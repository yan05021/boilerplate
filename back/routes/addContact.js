const addContact = async (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
};

export default addContact;

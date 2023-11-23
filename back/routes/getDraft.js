const getDraft = async (req, res) => {
  if (req.query.id == '12345') {
    const draft = {
      id: 12345,
      firstName: "John",
      lastName: "Doe",
      job: "PDG",
      email: "johndoe@email.fr",
      phoneNumbers: "0123456789"
    }
    res.status(200).send(draft);
  } else {
    res.status(404).send("Not found");
  }
}

export default getDraft;
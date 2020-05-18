const express = require("express");
const router = express.Router();
//@route     GET api/contacts
//@desc      Get all users contacts
//@access    private
router.get("/", (req, res) => {
  res.send("Get all Contacts");
});

//@route     POST api/contacts
//@desc      Add new contact
//@access    private
router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route     PUT api/contacts/:id
//@desc      Updat contact
//@access    private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route     DELETE api/contacts/:id
//@desc      Delete
//@access    private
router.delete("/:id", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;

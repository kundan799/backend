
const { Router } = require("express");
const router = Router();
const mensRanking =require("../models/mens")

// handle post request
router.post("/mens", async (req, res) => {
    try {
      const addingMensRecord = new mensRanking(req.body);
      console.log(req.body)
  
      await addingMensRecord.save();
      res.send("Record saved successfully");
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  // handle get request
  router.get("/mens", async (req, res) => {
      try {
        const getMensRecord = await mensRanking.find({}).sort({"ranking":1});
        res.send(getMensRecord);
      } catch (e) {
        res.status(400).send(e);
      }
    });
  // handle delete 
  router.get("/mens", async (req, res) => {
      try {
        const getMensRecord = await mensRanking.find({});
        res.send(getMensRecord);
      } catch (e) {
        res.status(400).send(e);
      }
    });
    // get by id
    router.get("/mens/:id", async (req, res) => {
      try {
          const _id =req.params.id;
        const getMensRecordByid = await mensRanking.findById({_id});
        res.send(getMensRecordByid);
      } catch (e) {
        res.status(400).send(e);
      }
    });
  
    // delete by id
    router.delete("/mens/:id", async (req, res) => {
      try {
        const _id = req.params.id;
        
        const deletedRecord = await mensRanking.findByIdAndDelete(_id);
    
        if (deletedRecord) {
          res.send(`Document with ID ${_id} deleted successfully`);
        } else {
          res.status(404).send("Document not found");
        }
      } catch (error) {
        res.status(500).send(error.message || "Internal Server Error");
      }
    });

    module.exports = {
        router
    }
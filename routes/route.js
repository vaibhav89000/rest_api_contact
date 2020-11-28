const { Router } = require('express');
const express = require('express');
const router = express.Router();

const Contact = require('../models/contact');

// retrieving contacts
router.get('/contacts',(req,res,next)=>{
    Contact.find((err,contacts)=>{
        res.json(contacts);
    })
});

// add contacts
router.post('/contact',(req,res,next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    })

    newContact.save((err,contact)=>{
        if(err){
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'contact added successfully'});
        }
    })
});

// delete contacts
router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id: req.params.id},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});

module.exports = router;
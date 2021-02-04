const router = require('express').Router();
const express = require('express');
const fileUpload = require('express-fileupload');

router.use(fileUpload());

router.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ errorMessage: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`/home/lolaraine/checkpoint04/checkpoint_04_front/public/upload/${file.name}`, err => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/upload/${file.name}`});
  });

})
module.exports = router;
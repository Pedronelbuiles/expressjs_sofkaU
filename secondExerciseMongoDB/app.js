const express = require('express')
const mongoose = require('mongoose')
const Note = require('./models/note')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/second-exercise-mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connection success to MongoDB')
}).catch(error => {
  console.error('Connection error:', error)
})

// Crear una nueva nota
app.post('/notes', async (req, res) => {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.status(201).json(note);
  });
  
  // Obtener todas las notas
  app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
  });
  
  // Actualizar una nota
  app.put('/notes/:id', async (req, res) => {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.json(note);
  });
  
  // Eliminar una nota
  app.delete('/notes/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.status(204).end();
  });

app.listen(3000, () => {
    console.log('Server listening in port 3000');
  })



const express = require('express');
const app = express();
const port = 3000;

// Tableau d'objets
const technologies = [
  { id: 1, nom: 'Internet', domaine: 'Informatique', dateCreation: 'Années 1960' },
  { id: 2, nom: 'World Wide Web (WWW)', domaine: 'Informatique', dateCreation: '1989' },
  { id: 3, nom: 'JavaScript', domaine: 'Programmation', dateCreation: '1995' },
  { id: 4, nom: 'Python', domaine: 'Programmation', dateCreation: '1991' },
  { id: 5, nom: 'React.js', domaine: 'Développement web', dateCreation: '2013' },
  { id: 6, nom: 'TensorFlow', domaine: 'Intelligence artificielle', dateCreation: '2015' },
  { id: 7, nom: '5G', domaine: 'Télécommunications', dateCreation: '2019' },
  { id: 8, nom: 'CRISPR', domaine: 'Biotechnologie', dateCreation: '2012' },
  { id: 9, nom: 'Blockchain', domaine: 'Finance / Informatique', dateCreation: '2008' },
  { id: 10, nom: 'Quantum Computing', domaine: 'Informatique / Physique', dateCreation: 'Années 1980s' }
];

app.use(express.json());

// Routes
app.get('/technologies', (req, res) => {
  res.json(technologies);
});


app.get('/technos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const technology = technologies.find(t => t.id === id);

  if (technology) {
    res.json(technology);
  } else {
    res.status(404).send('Technologie non trouvée');
  }
});

app.post('/technologies', (req, res) => {
  const newTechnology = req.body;
  technologies.push(newTechnology);
  res.status(201).json(newTechnology);
});

app.put('/technologie/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const updatedTechnology = req.body;

  const index = technologies.findIndex(t => t.id === id);

  if (index !== -1) {
    technologies[index] = { ...technologies[index], ...updatedTechnology };
    res.json(technologies[index]);
  } else {
    res.status(404).send('Technologie non trouvée');
  }

});


app.delete('/technologies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = technologies.findIndex(tech => tech.id === id);
  if (index !== -1) {
    technologies.splice(index, 1);
    res.status(200).send("Technology deleted successfully");
  } else {
    res.status(404).send("Technology not found");
  }
});


app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});






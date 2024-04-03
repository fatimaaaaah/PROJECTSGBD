const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); 
const app = express();
const port = 3000;

app.use(bodyParser.json());


const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sgbd1'
};


const connection = mysql.createConnection(dbConfig);


connection.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
    } else {
        console.log('Connexion à la base de données réussie !');
    }
});

app.post('/client', (req, res) => {
    const newClient = req.body;
    const query = 'INSERT INTO client SET ?';
    connection.query(query, newClient, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout du client :', err);
            res.status(500).json({ message: 'Erreur lors de l\'ajout du client' });
        } else {
            res.status(201).json({ message: 'Client ajouté avec succès !', client: newClient });
        }
    });
});


app.delete('/client/:id', (req, res) => {
    const clientId = req.params.id;
    const query = 'DELETE FROM client WHERE id = ?';
    connection.query(query, clientId, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression du client :', err);
            res.status(500).json({ message: 'Erreur lors de la suppression du client' });
        } else {
            res.status(200).json({ message: 'Client supprimé avec succès !' });
        }
    });
});


app.put('/client/:id', (req, res) => {
    const clientId = req.params.id;
    const updatedClient = req.body;
    const query = 'UPDATE client SET ? WHERE id = ?';
    connection.query(query, [updatedClient, clientId], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour du client :', err);
            res.status(500).json({ message: 'Erreur lors de la mise à jour du client' });
        } else {
            res.status(200).json({ message: 'Client mis à jour avec succès !', client: updatedClient });
        }
    });
});

app.get('/transaction', (req, res) => {
    const query = 'SELECT * FROM transaction';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des transactions :', err);
            res.status(500).json({ message: 'Erreur lors de la récupération des transactions' });
        } else {
            res.status(200).json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

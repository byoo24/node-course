const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if (!duplicateNote) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}


const removeNote = (title) => {
    let userMsg = '';
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title )

    if (notesToKeep.length < notes.length) {
        userMsg = chalk.green.inverse("Note removed!")
        saveNotes(notesToKeep);
    } else {
        userMsg = chalk.red.inverse("No Note found!")
    }

    console.log(userMsg);
}


const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.yellow.inverse("Your Notes:"));
    console.log("=".repeat(10));
    notes.forEach(note => console.log(note.title));
}


const readNote = (title) => {
    const notes = loadNotes();
    const noteFound = notes.find((note) => note.title === title);

    if (noteFound) {
        console.log(chalk.yellow.inverse(noteFound.title));
        console.log("=".repeat(10));
        console.log(noteFound.body);
    } else {
        console.log(chalk.red.inverse("Note not found"));
    }
}



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) { 
        // notes.json does not exist
        if (err.code === 'ENOENT') {
            return [];
        }
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}
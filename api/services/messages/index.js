const messagesArray = [];

/* método para insertar datos */

const newMessage = (message) => {
    messagesArray.push(message);
};

/* método para leer datos */

const loadMessages = () => {
    return messagesArray;
};

const arrayLenght = () => {
    return messagesArray.length;
}

module.exports = {newMessage, loadMessages, arrayLenght};
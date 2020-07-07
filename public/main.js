const newMessage =() => {
  const message = {
    msg: document.getElementById('msg').value,
    validationDefault01: document.getElementById('validationDefault01').value,
    validationDefault02: document.getElementById('validationDefault02').value

  };

  if(message.msg !=='' && message.validationDefault01 !=='' && message.validationDefault02 !==''){

    //se define la ruta hacia donde se enviará la petición
    const url = '/api/messages'
    //se hace la petición con Fetch
    fetch(url, {
      method: 'POST', //se define que es de tipo POST
      body: JSON.stringify(message), //se convierte en String el objeto que se va a enviar
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    //respuesta con error:
    .catch(error => console.error('Error:', error))
    //respuesta exitosa:
    .then(response => {
      getMessages();
      document.getElementById('msg').value ='';
      // esto es si quiero que me salga un msj de alerta: alert('El mensaje ha sido creado')
    });
  }
  };
  
  const getMessages = () => {
    const url = 'api/messages';
    fetch(url)
    .then(res => res.json())
    .then(response => {
      const html = response.map(message => {
        return `<li class="list-group-item">${message.msg}</li>`
      }).join("");
      //el string construido se agrega en el div con id tweets
      document.getElementById('messages').innerHTML = `<ul class="list-group">
                                                      <li class="list-group-item active">Messages</li>
                                                      ${html}
                                                      </ul>`;
    });
  };



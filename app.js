var clientArray = [];
var table = document.getElementById('postBoard');
function Client(name, email, descript, loc, time){

  this.name = name;
  this.email = email;
  this.descript = descript;
  this.loc = loc;
  this.time = time;

}

// Creating a Post-Board Table
//creating a table header function:
var nameData;
var jobNumber = 1;
function renderHeader(){

  var table = document.getElementById('postBoard');
  var trElement = document.createElement('thead');
  table.appendChild(trElement);

  nameData = document.createElement('td');
  nameData.textContent = " Job #";
  trElement.appendChild(nameData);


  nameData = document.createElement('td');
  nameData.textContent = "Name";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "E-mail";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "Job Description";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "Location";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "Time Frame";
  trElement.appendChild(nameData);


  var checkbox = document.createElement("INPUT");
  checkbox.type = "checkbox";
  trElement.appendChild(checkbox);
};

renderHeader();


//rendering table rows function:
  renderAsRow = function(Client){

  trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = jobNumber;
  trElement.appendChild(nameData);
  table.appendChild(trElement);


  trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = Client.name;
  trElement.appendChild(nameData);

  trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = Client.location;
  trElement.appendChild(nameData);

  trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = Client.timeFrame;
  trElement.appendChild(nameData);

  trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = Client.Contact;
  trElement.appendChild(nameData);
};


  function handleForm(e){
  e.preventDefault();
  console.log('handle form');

  var name = e.target.name.value;
  var email = e.target.email.value;
  var descript = e.target.descript.value;
  var loc = e.target.loc.value;
  var time = e.target.time.value;
  var newClient = new Client(name, email, descript, loc, time);
  clientArray.push(newClient);
  console.log(clientArray);
  renderAsRow(newClient);
  e.target.name.value = null;
  e.target.email.value = null;
  e.target.descript.value = null;
  e.target.loc.value = null;
  e.target.time.value = null;
}

var form  = document.getElementById('submit');
form.addEventListener('submit', handleForm);

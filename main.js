const btnAdd = document.querySelector('#addServer');
const serverContainer = document.querySelector('.server_container');
const serverNameInput = document.querySelector('#server-name');
const btnEdit = document.querySelector('#editServer');
const btnDelete = document.querySelector('#deleteServer');

// Server Controller
const ServerCtrl = (function () {
  // server Constructor
  const Server = function (id, name) {
    this.id = id;
    this.name = name;
  };

  const data = {
    servers: [],
    currentServer: null,
  };

  //Public Methods

  return {
    getServer: function () {
      return data.servers;
    },

    addServer: function (name) {
      let ID;
      // Create ID
      if (data.servers.length > 0) {
        ID = data.servers[data.servers.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // Create new item
      newServer = new Server(ID, name);

      // Add to Serers array
      data.servers.push(newServer);

      return newServer;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  return {
    populateServersList: function (servers) {
      let html = '';

      servers.forEach(function (server) {
        html += `<div id="${server.id}" class="server">
        <span class="name">${server.name} <i class=" server-info fas fa-info-circle"></i></span>

        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
          </div>`;
      });

      // Insert list Items
      serverContainer.innerHTML = html;
    },
    getServerInput: function () {
      return {
        name: serverNameInput.value,
      };
    },
    addListServer: function (servers) {
      //Create li element
      const div = document.createElement('div');
      // Add Class
      div.className = 'server';
      // Add id
      div.id = `server-${servers.id}`;

      // Add html
      div.innerHTML = `
        <span class="name">${servers.name} <i class="server-info fas fa-info-circle"></i> </span>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>
        <select class="shift">
          <option value="off">Off</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="double">Double</option>
        </select>`;

      // Insert item
      document
        .querySelector('.server_container')
        .insertAdjacentElement('beforeend', div);
    },

    //Clear Input
    clearInput: function () {
      serverNameInput.value = '';
    },

    clearEditState: function () {
      UICtrl.clearInput;
    },
  };
})();

// App Controller *******
const App = (function (ServerCtrl, UICtrl) {
  // Load event listeners
  const loadEventListeners = function () {
    // Add item event
    btnAdd.addEventListener('click', serverAddSubmit);
  };

  // Add item submit
  const serverAddSubmit = function (e) {
    // Get form input from UI Controller
    const input = UICtrl.getServerInput();

    // Check for name and calorie input
    if (input.name !== '') {
      // Add item
      const newServer = ServerCtrl.addServer(input.name);
      //Add Server to UI List
      UICtrl.addListServer(newServer);

      //Clear fields

      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  // Public methods
  return {
    init: function () {
      // Clear edit state / set inital set
      UICtrl.clearEditState();

      // Fetch items from data structure
      const servers = ServerCtrl.getServer();

      // Populate list with Servers
      UICtrl.populateServersList(servers);

      // Load event listeners
      loadEventListeners();
    },
  };
})(ServerCtrl, UICtrl);

// Initialize App
App.init();

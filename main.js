const btnAdd = document.querySelector('#addServer');
const serverContainer = document.querySelector('.server_container');
const server = document.querySelector('.server');
const serverNameInput = document.querySelector('#server-name');
const btnEdit = document.querySelector('#editServer');
const btnDelete = document.querySelector('#deleteServer');
const infoPopup = document.querySelector('.server_info_popup');
const infoIcon = document.querySelector('.server-info');
const btnUpdate = document.querySelector('#update-server');

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

    getServerByid: function (id) {
      let found = null;

      data.servers.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },

    setCurrentServer: function (item) {
      data.currentServer = item;
    },

    getCurrentServer: function () {
      return data.currentServer;
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
    
        <span class="name">${server.name} <i class=" server-info fas fa-info-circle"></i>       
        <div class="server_info_popup">
              <div class="close_popup">x</div>
              <button id="editServer" class="btn_edit">Edit</button>
              <button id="deleteServer" class="btn_delete">Delete</button>
            </div>
        </span>

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
        <span class="name">${servers.name} <i class="server-info fas fa-info-circle"></i> 
             <div class="server_info_popup">
            <div class="close_popup">x</div>
            <button id="editServer" class="btn_edit">Edit</button>
            <button id="deleteServer" class="btn_delete">Delete</button>
          </div>
          </span>
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

    addItemToForm: function () {
      serverNameInput.value = ServerCtrl.getCurrentServer().name;
      UICtrl.showEditState();
    },

    clearEditState: function () {
      UICtrl.clearInput;
      btnUpdate.style.display = 'none';
      btnDelete.style.display = 'none';
      btnAdd.style.display = 'block';
    },

    showEditState: function () {
      btnUpdate.style.display = 'block';
      btnDelete.style.display = 'block';
      btnAdd.style.display = 'none';
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

    // Edit icon click
    serverContainer.addEventListener('click', serverUpdateSubmit);

    // Check for name and calorie input
    if (input.name !== '') {
      // Add items
      const newServer = ServerCtrl.addServer(input.name);

      //Add Server to UI List
      UICtrl.addListServer(newServer);

      //Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  // Update item submit
  const serverUpdateSubmit = function (e) {
    // Get List item id
    if (e.target.classList.contains('btn_edit')) {
      // Get list item id
      const listId = e.target.parentNode.parentNode.parentNode.id;

      // Break into an array
      const listIdArr = listId.split('-');

      //Get actual id
      const id = parseInt(listIdArr[1]);

      // Get Item
      const serverToEdit = ServerCtrl.getServerByid(id);
      ServerCtrl.setCurrentServer(serverToEdit);

      UICtrl.addItemToForm();
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

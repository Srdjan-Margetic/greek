const btnAdd = document.querySelector('#addServer');
const serverContainer = document.querySelector('.server_container');

btnAdd.addEventListener('click', addNewServer);

function addNewServer() {
  serverContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="server">
        <span class="name">Srdjan</span>
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
      </div>`
  );
}

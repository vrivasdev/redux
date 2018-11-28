import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

// ********** 1. UI **********
function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  store.dispatch({ // ********* 2. ACTIONS ********
    type: 'ADD_SONG', // mandatory
    payload: {
      title // ES6: title is the same key. Ex: 'title': title
    }
  })
}

const initialState = [
  {
    "title": "Despacito",
  },
  {
    "title": "One more time"
  },
  {
    "title": "Echame la culpa"
  },
]

const reducer = function(state, action) { // ********** 3. REDUCER *********
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    default:
      return state
  }
}

const store = createStore( // ****** 4. STORE **********
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

function render() {
  const $container = document.getElementById('playlist');
  const playlist = store.getState();

  $container.innerHTML = '';

  playlist.forEach((item) => {
    const template = document.createElement('p');
    template.textContent = item.title;
    $container.appendChild(template);
  });
}

render(); // first render

function handleChange() { // render per each change
  render();
}

/* NOTE: STATE => UI | Updating app with subscribe:
 * Every time the state gets updated the UI is going to be rendered again.
 * This is the last step of the redux cicle
 */
store.subscribe(handleChange);

console.log(store.getState());

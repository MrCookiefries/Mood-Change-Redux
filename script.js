const moods = {
  "happy": "^ω^",
  "sad": "⊙︿⊙",
  "angry": "ಠ▃ಠ",
  "confused": "⊙.☉"
};

const moodEle = document.querySelector("#mood");
const moodButtonsEle = document.querySelector("#mood-buttons");

moodButtonsEle.addEventListener("click", e => {
  const ele = e.target;
  if (ele.tagName !== "BUTTON") return;
  store.dispatch({type: "mood/set", payload: ele.dataset.mood});
  const {mood} = store.getState();
  moodEle.innerText = moods[mood];
});

const initalState = {mood: ""};
const moodReducer = (state=initalState, action) => {
  switch (action.type) {
    case "mood/set":
      return {...state, mood: action.payload};
    default: return state;
  }
};

const store = Redux.createStore(moodReducer);

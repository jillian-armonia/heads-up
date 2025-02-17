const wordCategories = {
    sports: [
      "archery",
      "soccer",
      "swimming",
      "skiing",
      "skating",
      "softball",
      "gymnastics",
      "table tennis",
      "dance",
      "tennis",
      "basketball",
      "badminton",
      "volleyball",
      "handball",
      "baseball",
      "rugby",
      "track and field",
      "long-distance running",
      "high jump",
      "long jump",
      "hundred-meter dash",
      "shot put"
    ],

    food: [
      "ice cream",
      "candy",
      "rice ball",
      "omelet",
      "curry and rice",
      "beef",
      "cookie",
      "rice",
      "fish",
      "salad",
      "sandwich",
      "jam",
      "steak",
      "spaghetti",
      "egg",
      "fried rice",
      "chocolate",
      "chicken",
      "bread",
      "pancake",
      "hamburger",
      "pork",
      "French fries",
      "pudding",
      "miso soup",
      "noodles",
      "rice cake",
      "grilled fish"
    ],

    places: [
      "apartment",
      "market",
      "movie theater",
      "station",
      "gas station",
      "stadium",
      "airport",
      "police station",
      "factory",
      "high school",
      "convenience store",
      "temple",
      "city hall",
      "elementary school",
      "fire station",
      "shopping mall",
      "bookstore",
      "shrine",
      "aquarium",
      "supermarket",
      "university",
      "junior high school",
      "department store",
      "zoo",
      "library",
      "museum",
      "bus stop",
      "bakery",
      "hospital",
      "hotel",
      "amusement park",
      "post office",
      "house",
      "bank",
      "restaurant",
      "castle",
    ],

    jobs: [
      "doctor",
      "illustrator",
      "astronaut",
      "movie director",
      "comedian",
      "musician",
      "office worker",
      "scientist",
      "singer",
      "nurse",
      "engineer",
      "reporter",
      "captain",
      "flight attendant",
      "teacher",
      "police officer",
      "artist",
      "architect",
      "writer",
      "soccer player",
      "photographer",
      "vet",
      "dentist",
      "fire fighter",
      "voice actor",
      "carpenter",
      "taxi driver",
      "dancer",
      "farmer",
      "actor",
      "pilot",
      "pastry chef",
      "programmer",
      "lawyer",
      "nursery school teacher",
      "cartoonist",
      "pharmacist",
      "barber",
      "chef",
      "cook",
    ],

    classroom: [
      "chair",
      "calendar",
      "blackboard",
      "trash can",
      "class schedule",
      "speaker",
      "map",
      "dustpan",
      "chalk",
      "desk",
      "clock",
      "bucket",
      "broom",
      "whiteboard",
      "ink",
      "paint",
      "pencil",
      "pencil sharpener",
      "bag",
      "textbook",
      "highlighter",
      "eraser",
      "compass",
      "dictionary",
      "mechanical pencil",
      "ruler",
      "glue stick",
      "stapler",
      "tape",
      "name tag",
      "notebook",
      "scissors",
      "pencil case",
      "pen",
      "brush",
    ],

    house: [
      "bedroom",
      "kitchen",
      "living room",
      "entrance",
      "bathroom",
      "garden",
      "air conditioner",
      "curtain",
      "mirror",
      "rice cooker",
      "slippers",
      "washing machine",
      "fan",
      "sink",
      "sofa",
      "table",
      "TV",
      "microwave",
      "telephone",
      "pillow",
      "blanket",
      "bookcase",
      "fridge",
    ],

    example: [
      "English",
      "Japanese",
      "art",
      "math",
      "science",
      "technology",
      "social studies",
      "moral education",
      "home economics",
      "P.E.",
      "music"
    ]
  }

  let currentCategory;
  let remainingWords;
  let currentIndex = 0;
  let score = 0;
  const pass = document.getElementById("pass");
  const get = document.getElementById("get");
  const reset = document.getElementById("reset");
  const hide = document.getElementById("hide");
  const word = document.getElementById("word");
  const categories = document.getElementById("categories")


  //function setCategory
    //ITERATE through the wordCategories
      //ADD a click eventListener
      //SET the currentCategory using the id of the clicked category
      //INITIALIZE the game

  function setCategory(){
    const allCategories = categories.querySelectorAll(".category");
    allCategories.forEach(category => {
      category.addEventListener("click", () => {
        currentCategory = wordCategories[category.id];
        initializeGame();
      })
    })
  }

  // function getRandomNumber
    //USE Math.floor and Math.random multiplied to the category's length

  function getRandomNumber(){
    return Math.floor(Math.random() * currentCategory.length);
  }

  // function setRandomWord
    //INSERT the currentWord in the word div

  function setRandomWord(){
    word.innerHTML = currentCategory[currentIndex];

    if (remainingWords == 0) word.innerHTML = "";
  }

  // function countRemaining
    //GET the current array length
    //SET the length in cards span

  function countRemaining(){
    remainingWords = currentCategory.length;
    const cards = document.getElementById("cards");
    cards.innerHTML = `${remainingWords}`;
  }

  // function setScore
    //SET the score in the score span

  function setScore(){
    const scoreSpan = document.getElementById("score");
    scoreSpan.innerHTML = `${score}`;
  }

  // function checkEnd
    //IF there are no more remaining cards
        //RELOAD the window
    //ELSE continue

  function checkEnd(){
    if (remainingWords == 0){
        get.disabled = true;
        pass.disabled = true;
    } else return;
  }

  // ADD an eventListener for the pass button
    // USE getRandomNumber and REASSING currentWord
    // USE setRandomWord

  pass.onclick = () => {
    currentIndex = getRandomNumber();
    setRandomWord();
  }

  // ADD an eventListener for the get button
    // REMOVE the currentWord from the list through splicing
    // INCREMENT the score
    // SET the remaining number of cards
    // GET the new currentWord through getRandomNumber
    // SET the new currentWord in the html

  get.onclick = () => {
    currentCategory.splice(currentIndex, 1);
    score++;
    setScore();
    countRemaining();
    currentIndex = getRandomNumber();
    setRandomWord();
    checkEnd();
  }

  // ADD an eventListener for the reset button
    // SET the score to 0

  reset.onclick = () => {
    score = 0;
    setScore();

    if (remainingWords == 0){
        window.location.reload();
    } else return;
  }

  // ADD an eventListener for the hide button
    //IF the display of the word div is not none, set it to none
      //SET the text to unhide
      //CHANGE the color of the button
    //ELSE set it to grid/flex
      //SET the text to hide
      //CHANGE the color of the button

  hide.onclick = () => {
    if (word.style.display !== 'none'){
        word.style.display = "none";
        hide.innerHTML = "UNHIDE";
        hide.style.color = "white";
        hide.style.backgroundColor = "darkgray";
    } else {
        word.style.display = "flex";
        hide.innerHTML = "HIDE";
        hide.style.color = "black";
        hide.style.backgroundColor = "rgb(240, 240, 240)";
    }
  }

  //function initializeGame
    //SET the display of the categories div to none
    //ASSIGN the currentWord using currentCategory[currentIndex]
    //INSERT the currentWord in div using setRandomWord

  function initializeGame(){
    categories.style.display = 'none';
    score = 0;
    currentIndex = getRandomNumber();
    setRandomWord();
    countRemaining();
    setScore();
  }

  window.addEventListener('load', setCategory)

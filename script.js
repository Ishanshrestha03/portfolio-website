VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x9f78ff,
  backgroundColor: 0x0A0A1A,
  points: 12.00,
  maxDistance: 22.00,
  spacing: 18.00
});

const quotes = [
    "Over the top!", "Down the rabbit hole we go!", "Bring that rain!", "Target acquired.", "Feel that need for speed!", "You've got guts!", "We have liftoff!", "To infinity and beyond!", "Encore!", "Onward!", "Challenge destroyed!", "It's on like Donkey Kong!", "Power level? It's over 9000!", "Coding spree!", "Code long and prosper.", "The crowd goes wild!", "One for the Guinness book!", "Flawless victory!", "Most efficient!", "You've got the touch!", "You're on fire!", "The town is now red!", "To the nines!", "To the Batmobile!", "Pull out all the stops!", "You're a wizard, Harry!", "You're an all star!", "Way to go!", "Outta sight!", "You're crushing it!", "What sorcery is this?", "The world rejoices!", "That's the way it's done!", "You rock!", "Woo-hoo!", "We knew you could do it!", "Hyper Combo Finish!", "Nothing but net!", "Boom-shakalaka!", "You're a shooting star!", "You're unstoppable!", "Way cool!", "Walk on that sunshine!", "Keep on trucking!", "Off the charts!", "There is no spoon!", "Cranked it up to 11!", "Escape velocity reached!", "You make this look easy!", "Passed with flying colors!", "You've got this!", "Happy, happy, joy, joy!", "Tomorrow, the world!", "Your powers combined!", "It's alive. It's alive!", "Sonic Boom!", "Here's looking at you, Code!", "Ride like the wind!", "Legen - wait for it - dary!", "Ludicrous Speed! Go!", "Most triumphant!", "One loop to rule them all!", "By the power of Grayskull!", "You did it!", "Storm that castle!", "Face-melting guitar solo!", "Checkmate!", "Bodacious!", "Tubular!", "You're outta sight!", "Keep calm and code on!", "Even sad panda smiles!", "Even grumpy cat approves!", "Kool Aid Man says oh yeah!", "Bullseye!", "Far out!", "You're heating up!", "Standing ovation!", "Nice one!", "All right!", "Hasta la vista, challenge!", "Terminated.", "Off the hook!", "Thundercats, Hooo!", "Shiver me timbers!", "Raise the roof!", "Bingo!", "Even Honey Badger cares!", "Helm, Warp Nine. Engage!", "Gotta code 'em all!", "Spool up the FTL drive!", "Cool beans!", "They're in another castle.", "Power UP!", "Pikachu chooses you!", "I gotta have more cowbell.", "Gotta go fast!", "Yippee!", "Cowabunga!", "Moon Prism Power!", "Plus Ultra!", "Everything's coming up Milhouse!", "King of the Pirates!", "Thunder Breathing First Form!", "It's time to duel!", "You better believe it!", "Do a barrel roll!", "You can do this all day!", "It's super effective!", "This is the way!", "You're king of the world!", "It's morphin' time!", "Just keep swimming!", "You are the one who knocks!", "Inconceivable!", "Great Scott!", "By Grabthar's hammer!", "Get to the choppa!", "It's clobberin' time!", "Somebody stop me!", "Oh, hi Mark!", "Groovy!", "The Dude abides!", "Are you not entertained?", "There can be only one!", "You are the danger!", "You know kung fu!", "Elementary, my dear Watson!", "Maximum effort!"
];

document.addEventListener('DOMContentLoaded', (event) => {
  const quoteElement = document.getElementById('philosophical-quote');
  if (quoteElement) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  const form = document.getElementById('contact-form');
  const formContainer = document.getElementById('contact-form-container');
  const successMessage = document.getElementById('form-success-message');

  if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    formContainer.style.display = 'none';
                    successMessage.style.display = 'block';
                } else {
                    console.log(response);
                    alert('Something went wrong. Please try again.');
                }
            })
            .catch(error => {
                console.log(error);
                alert('Something went wrong. Please try again.');
            });
    });
  }
  
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("nav-active");
  });

  document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("nav-active");
  }));
});

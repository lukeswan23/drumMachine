// https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3
// https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3

// https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3

//power button

//button to swap sound set
//set a value X or Y
//on drum pad button click check for X or Y
// if X play Heater 1 e.g., if Y play Chord 1 e.g.

//display text

//volume control

const soundBank = [
  {
    soundId: "q",
    //keyId: 81,
    urlOne: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    nameOne: "Heater 1",
    urlTwo: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    nameTwo: "Chord 1"
  },
  {
    soundId: "w",
    urlOne: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    nameOne: "Heater 2",
    urlTwo: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    nameTwo: "Chord 2"
  },
  {
    soundId: "e",
    urlOne: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    nameOne: "Heater 3",
    urlTwo: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    nameTwo: "Chord 3"
  },
  {
    soundId: "a",
    urlOne: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    nameOne: "Heater 4",
    urlTwo: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    nameTwo: "Shaker"
  },
  {
    soundId: "s",
    urlOne: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    nameOne: "Clap",
    urlTwo: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    nameTwo: "Open HH"
  },
  {
    soundId: "d",
    urlOne: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    nameOne: "Open HH",
    urlTwo: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    nameTwo: "Closed HH"
  },
  {
    soundId: "z",
    urlOne: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    nameOne: "Kick n' Hat",
    urlTwo: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    nameTwo: "Punchy Kick"
  },
  {
    soundId: "x",
    urlOne: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    nameOne: "Kick",
    urlTwo: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    nameTwo: "Side Stick"
  },
  {
    soundId: "c",
    urlOne: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    nameOne: "Closed HH",
    urlTwo: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    nameTwo: "Snare"
  }
];

let powerBoolean = 0;
let bankBoolean = 0;
//let audio = $("#player");
let id = "";

//power toggle
$("#power").click(function() {
  $(this).blur();
  if (powerBoolean === 0) {
    powerBoolean = 1;
    $("#bank").prop("disabled", true);
    $("#volume").prop("disabled", true);
    $("#display").text(" ");
    console.log("powered off");
    $(".drum-pad").prop("disabled", true);
    $("#power").toggleClass("offColourJS");
    $("#title").css("color", "#74967c");
  } else {
    powerBoolean = 0;
    $("#bank").prop("disabled", false);
    $("#volume").prop("disabled", false);
    $(".drum-pad").prop("disabled", false);
    $("#power").toggleClass("offColourJS");
    $("#title").css("color", "#2bff4b");

    console.log("powered on");
  }
});

//sound bank toggle value
$("#bank").click(function() {
  $(this).blur();
  if (bankBoolean == 0) {
    bankBoolean = 1;
    $("#display").text("Smooth Piano Kit");
  } else {
    bankBoolean = 0;
    $("#display").text("Heater Kit");
  }
  console.log(bankBoolean);
});

//volume
$("#volume").change(function() {
  console.log($("#volume").val());
  let volumeLevel = $("#volume").val();
});

//function to allow passing of current slider value to playSound
function getVolume() {
  let volumeLevel = $("#volume").val();
  return volumeLevel;
}

function playSound(id) {
  document.getElementById(id).blur();
  if (powerBoolean === 0) {
    //check if power is on or not, if not function does not execute
    console.log(id + " pressed");
    let display = $("#display");
    let audio = document.createElement("audio");
    audio.volume = getVolume();

    for (let i = 0; i < soundBank.length; i++) {
      if (bankBoolean === 0) {
        if (soundBank[i].soundId == id) {
          display.html(soundBank[i].nameOne);
          audio.setAttribute("src", soundBank[i].urlOne);
          audio.load();
          audio.play();
        }
      }
      if (bankBoolean === 1) {
        if (soundBank[i].soundId == id) {
          console.log("sound2");
          display.html(soundBank[i].nameTwo);
          audio.setAttribute("src", soundBank[i].urlTwo);
          audio.load();
          audio.play();
        }
      }
    }
  }
}

//on click play
function getId(id) {
  playSound(id);
}

//keystroke play
$(document).ready(function() {
  $("body").keydown(function(e) {
    console.log(e.which);
    if (e.which === 81) {
      playSound("q");
    }
    if (e.which === 87) {
      playSound("w");
    }
    if (e.which === 69) {
      playSound("e");
    }
    if (e.which === 65) {
      playSound("a");
    }
    if (e.which === 83) {
      playSound("s");
    }
    if (e.which === 68) {
      playSound("d");
    }
    if (e.which === 90) {
      playSound("z");
    }
    if (e.which === 88) {
      playSound("x");
    }
    if (e.which === 67) {
      playSound("c");
    }
  });
});

//create listener function
//depending on id play sound

//listener
//needs to listen on all buttons
//pass ID depending on button clicked

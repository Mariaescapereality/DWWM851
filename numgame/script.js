var game;
function Game () {
  this.guessCount = 7;
  this.correctNum = Math.floor((Math.random() * 100) + 1);
  this.stack=[]; 
  this.guess;
  $('#numGuesses').text(this.guessCount);
}


Game.prototype.numberCheck = function () {
  var that = this;
  $('input:submit').on('click', function (event) {
    that.guess=$('input:text').val();
    $("input:text").val("");
    event.preventDefault();
    if (isNaN(that.guess) || !that.guess.trim() || that.guess.length===0) {
      $('#warning').remove();
      $('.message').prepend($('<h5 id="warning">Pas un numéro. Veuillez saisir un chiffre entre 1 et 100</h5>'));
    } else {
      that.guess=parseInt(that.guess, 10);
      $('#warning').remove();
      that.numberCompare();
    }
  })
}

Game.prototype.numberCompare = function () {
  var msg;
  if (this.guess < 1 || this.guess > 100) {
    $('.message').prepend($('<h5 id="warning">Veuillez saisir un chiffre entre 1 et 100</h5>'));
  } else if (game.stack.indexOf(this.guess) > -1) {
    $('.message').prepend($('<h5 id="warning">Déjà deviné. Veuillez saisir un nouveau numero</h5>'));
  } else if (game.guessCount === 0) {
    $(".message").prepend('<h5 id="warning">Vous avez utilisé toutes vos tentatives. Désolé!</h5>');
  } else if ($('#finalMsg').length) {
    $(".message").prepend('<h5 id="warning">Vous avez déjà gagné. Jouez à un nouveau jeu!</h5>');
  } else {
    $('#warning').remove();
    $('.hintMsg').remove();
    game.guessCount--;
    $('#numGuesses').text(game.guessCount);
    game.stack.push(this.guess);

    var diff = Math.abs(this.guess-game.correctNum);
    if (diff===0) {
      correct();
    } else if (game.stack.length > 1) {
      var prevDiff = Math.abs(game.stack[game.stack.length-2]-game.correctNum);
    //  debugger;
      msg = $("<h5 class='msg'>"+hotterColder(prevDiff, diff)+hotCold(diff)+highLow()+"</h5>");
      $(".message").append(msg);
    } else {
      msg = $("<h5 class='msg'>"+hotCold(diff)+highLow()+"</h5>");
      $(".message").append(msg);
    }
  }
}

function hotCold (diff) {
  return diff <= 5 ? "Très chaud, " : diff <= 10  ? "Chaud, " : diff <= 15 ? "Tiède, " : diff <= 25 ? "Froid, " : "Très froid, ";
}

function hotterColder (prevDiff, diff) {
  return prevDiff > diff ? "il fait plus chaud: " : "il fait plus froid: ";
}

function highLow () {
  return game.guess > game.correctNum ? "Moins" : "Plus";
}

function correct() {
  $('.hintMsg').remove();
  $('#msg').remove();
  $('.message').append($('<h4 id="finalMsg">Correct! Vous avez gagnez!</h4>'));
  $('.main-bg').css('background-color', '#f2f2f2');
 }

Game.prototype.reset = function () {
  $('.reset').on ('click', function (event) {
    event.preventDefault();
    $('.main-bg').css('background-color', '');
    $('.hintMsg').remove();
    $('.msg').remove();
    $('#warning').remove();
    $('#finalMsg').remove();
    game = new Game();
  })
}

Game.prototype.hint = function () {
  $('.hint').on('click', function (event) {
    event.preventDefault();
    $('.hintMsg').remove();
    $('.message').prepend($('<h4 class="hintMsg">The answer is '+game.correctNum+'</h4>'));
  })
}

$(document).ready(function () {
  game = new Game();
  game.numberCheck();
  game.reset();
  game.hint();
})
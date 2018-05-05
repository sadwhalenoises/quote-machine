$(document).ready(function(){
getQuote();
/*getBackground();*/
function getQuote(){



var quotes = {
  0:{
    quote: "'The more civilized a nation, the more conformed its population, until that civilization\'s last age arrives, when multiplicity wages war with conformity. The former grows ever wilder, ever more dysfunctional in its extremities; whilst the latter seeks to increase its measure of control, until such efforts acquire diabolical tyranny.'",
    author: "Midnight Tides, Steven Erikson"
  },
  1:{
    quote: "'No soul can withstand the sun\'s bones of light and reason dims when darkness falls - so we shape barrows in the night for you and your kin.' 'Forgive my interruption, then', said I. 'the dead never interrupt,' said the mason, 'they but arrive.'",
    author: "Gardens of the Moon, Steven Erikson"
  },
  2:{
    quote: "'When wisdom drips blood fools stand triumphant'",
    author: "Midnight Tides, Steven Erikson"
  },
  3:{
    quote: "'Children are dying. Lull nodded. That\'s a succinct summary of humankind, I\'d say. Who needs tomes and volumes of history? Children are dying. The injustices of the world hide in those three words.'",
    author: "Deadhouse Gates, Steven Eikson"
  },
  4:{
    quote: "'The lesson of history is that no one learns.'",
    author: "Deadhouse Gates, Steven Erikson"
  },
  5:{
    quote: "'There is no struggle too vast, no odds too overwhelming, for even should we fail - should we fall - we will know that we have lived.'",
    author: "Toll the Hounds, Steven Erikson"
  },
  6:{
    quote: "'Destiny is a lie. Destiny is justification for atrocity. It is the means by which murderers armour themselves against reprimand. It is a word intended to stand in place of ethics, denying all moral context.'",
    author: "Midnight Tides, Steven Erikson"
  },
  7:{
    quote: "'One day, perhaps, you will see for yourself that regrets are as nothing. The value lies in how they are answered.'",
    author: "House of Chains, Steven Erikson"
  },
  8:{
    quote: "'The heart of wisdom is tolerance.'",
    author: "Memories of Ice, Steven Erikson"
  },
  9:{
    quote: "'Wise words are like arrows flung at your forehead. What do you do? Why, you duck of course.'",
    author: "House of Chains, Steven Erikson"
  },
  10:{
    quote: "'The future can ever promise but one thing and one thing only: surprises.'",
    author: "Crippled God, Steven Erikson"
  }
}

var getLength = function(obj) {
    var L=0;
    $.each(obj, function(i, elem) {
        L++;
    });
    return L;
}
 
var randomQuote = quotes[Math.floor(Math.random() * getLength(quotes))];
console.log(randomQuote);
  
  $(".text").text(randomQuote.quote);
  $(".author").text(randomQuote.author);
  

  
  $("#getTweet").click(function(){
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + $(".text").text() + " - " + $(".author").text());
  });
  
};
  
  
  
  
  
  
  
  
  $(".btn-lg").on( "click", function() {
    getQuote();
  });





});











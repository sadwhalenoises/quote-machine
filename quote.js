$(document).ready(function(){
getQuote();
/*getBackground();*/
function getQuote(){

var quotes = ["The more civilized a nation, the more conformed its population, until that civilization\'s last age arrives, when multiplicity wages war with conformity. The former grows ever wilder, ever more dysfunctional in its extremities; whilst the latter seeks to increase its measure of control, until such efforts acquire diabolical tyranny.@Midnight Tides, Steven Erikson", "'No soul can withstand the sun\'s bones of light and reason dims when darkness falls - so we shape barrows in the night for you and your kin.' 'Forgive my interruption, then', said I. 'the dead never interrupt,' said the mason, 'they but arrive.'@Steven Erikson, Gardens of the Moon", "When wisdom drips blood fools stand triumphant.@Steven Erikson", "Children are dying. Lull nodded. That\'s a succinct summary of humankind, I\'d say. Who needs tomes and volumes of history? Children are dying. The injustices of the world hide in those three words.@Deadhouse Gates, Steven Eikson"
  ]

var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
var quoteText = randomQuote.split("@");
  
  $(".text").text(quoteText[0]);
  $(".author").text(quoteText[1]);
  

  
  $("#getTweet").click(function(){
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteText)
  });
  
};
  
 /* function getBackground(){
    var background = [
  "torforgeblog.com/wp-content/uploads/2016/03/thewayofkings-809x538.jpg", "http://s-media-cache-ak0.pinimg.com/736x/9b/e0/dc/9be0dced9928ca5654027683a597b0d8.jpg", "http://img03.deviantart.net/9106/i/2014/091/b/3/anomander_by_slaine69-d75ve0w.jpg", "https://i0.wp.com/www.tor.com/wp-content/uploads/2016/02/Midnight_Tides_by_Steven_Erikson_Interior_One.jpg?type=vertical", "https://i0.wp.com/www.tor.com/wp-content/uploads/2016/02/midnight-tides-wraparound-2.jpg?fit=740%2C309&type=vertical", "http://aidanmoher.com/blog/wp-content/uploads/2013/08/WordsofRadiance.jpg", "https://brandonsanderson.com/beta/wp-content/gallery/stormlight-2-art-gallery/Whelan_Stormlight_Shallan.jpg",
    ]
    
   var randomBackground =  background[Math.floor(Math.random * background.length)]
   
     
   
      }
  
  */
  
  
  
  
  
  
  
  
  $(".btn-lg").on( "click", function() {
    getQuote();
 /* getBackground();
 */
  });





});











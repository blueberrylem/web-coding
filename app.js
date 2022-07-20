
let button = document.querySelector("button")



button.onclick = function(){
    
    let ab1 = document.querySelector(".a1").value
    let ab2 = document.querySelector(".a2").value
    let ab3 = document.querySelector(".a3").value
    let ab4 = document.querySelector(".a4").value
    let ab5 = document.querySelector(".a5").value
    let ab6 = document.querySelector(".a6").value
    let ab7 = document.querySelector(".a7").value
    let ab8 = document.querySelector(".a8").value
    let ab9 = document.querySelector(".a9").value
    let ab10 = document.querySelector(".a10").value
    let ab11 = document.querySelector(".a11").value
    let ab12 = document.querySelector(".a12").value
    let ab13 = document.querySelector(".a13").value
    let ab14 = document.querySelector(".a14").value
    let ab15 = document.querySelector(".a15").value
    let ab16 = document.querySelector(".a16").value
    let ab17 = document.querySelector(".a17").value
    let ab18 = document.querySelector(".a18").value
    let ab19 = document.querySelector(".a19").value
    let ab20 = document.querySelector(".a20").value
    let message = "If you go to some_"+ab1+"_place like Yellowstone National_"+ab2+"_,you must know how to deal with the wild animals such as bears and wolves and_ "+ab3+". The most important of these is the bear. There are three kinds of bears, the grizzly bear, the_"+ab4+"_bear, and the_"+ab5+"_bear.Bears spend most of their time_"+ab6+"_or_"+ab7+". They look very_"+ab8+"_,but if you make them_"+ab9+",_they might bite your_"+ab10+". Bears will come up to your car and beg for_"+ab11+". They will stand on their hind legs and clap their_"+ab12+"_together and pretend to be_"+ab13+". But do not get out of your_"+ab14+"_or offer the bears_"+ab15+"_or_"+ab16+". This same advice applies to other wild creatures such as_"+ab17+"_and_"+ab18+". Remember all these rules and you will spend your vacation_"+ab19+"_and not get eaten by a_"+ab20
    console.log(message)
    const sendMessageResponseArea = document.querySelector('.response-to-send-message')
    
    
    sendMessageResponseArea.textContent = message
    ab1.remove();
    ab2.remove();
    ab3.remove();
    ab4.remove();
    ab5.remove();
    ab6.remove();
    ab7.remove();
    ab8.remove();
    ab9.remove();
    ab10.remove();
    ab11.remove();
    ab12.remove();
    ab13.remove();
    ab14.remove();
    ab15.remove();
    ab16.remove();
    ab17.remove();
    ab18.remove();
    ab19.remove();
    ab20.remove();
}
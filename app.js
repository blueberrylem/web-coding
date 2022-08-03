holler.onLoad(()=>{
    setTimeout(()=> {
    holler.me(()=>{


        let noun1 = document.querySelector(".noun1").value
        let noun2 = document.querySelector(".noun2").value
        let verb1 = document.querySelector(".verb1").value  
        let verb2 = document.querySelector(".verb2").value
        let adverb1 = document.querySelector(".adverb1").value

        let createButtons = document.querySelector(".createButton")
        let startButton = document.querySelector(".startButton")
        let nextButton = document.querySelector(".nextButton")
        let subjectDropdown = document.getElementById("subject")
        let subjectDropdown2 = document.getElementById("subjects")
        let P1Button = document.querySelector(".P1Button")
        let n1SubmitButton=document.querySelector(".n1SubmitButton")
        let n2SubmitButton=document.querySelector(".n2SubmitButton")

        let n3SubmitButton=document.querySelector(".n3SubmitButton")

        let n4SubmitButton=document.querySelector(".n4SubmitButton")

        let n5SubmitButton=document.querySelector(".n5SubmitButton")



        const buttons=[createButtons, startButton, nextButton, P1Button]

    // let noun = document.getElementById("subjects")
    // let noun1 = document.querySelector(".noun1").value
    // let noun2 = document.querySelector(".noun2").value
    // let verb1 = document.querySelector(".verb1").value
    // let verb2 = document.querySelector(".verb2").value
    // let adverb1 = document.querySelector(".adverb1").value
    // let partsOfSpeech = [noun1, verb1, adverb1, noun2, verb2]
    // Math.floor(Math.random() * partsOfSpeech.length)
    // let partsOfSpeechIndex = Math.floor(Math.random() * partsOfSpeech.length)
    // let counter=1
    // hello=partsOfSpeech[partsOfSpeechIndex]
    // while (counter<6) {
    //     partsOfSpeech[partsOfSpeechIndex]
    //     counter+1
    //     console.log(hello)
    // }
    // const nouns = ["Actor, Airport, Animal, Apple, Army, Balloon, banana, gold, grass, greece, guitar, hair, hamburger, helicopter, helmet, holiday, honey, horse, hospital, painting, parrot, pencil, piano, pillow, pizza, planet, plastic, Portugal, potato, queen, quill, rain, refrigerator, river, iron, insurance, insect, ice, beard, bed, belgium, boy, branch, beach, battery, island, ice, hydrogen, house, hospital, camera, candle, car, caravan, carpet, cartoon, china, church, crayon, crowd, daughter, death, Denmark, library, lighter, leather, lawyer, lamp, knife, kite, kitchen, king, kangaroo, juice, jewellery 
    // "]
    // console.log( valueOfSubject)


        nextButton.onclick= function (){
            document.querySelector(".player").style.display = "block";
            document.querySelector(".startScreen").style.display = "none"; 
        }
        startButton.onclick= function () {
            playAudio()
            document.querySelector(".player").style.display = "none";
            console.log("hgf")
            if ( subjectDropdown.value == "builder"){
                console.log("builder")
                if ( subjectDropdown2.value == "1"){
                    console.log("you did it")
                    document.querySelector(".nounInput").style.display = "block";
                    
                    document.querySelector(".startScreen").style.display = "none";
                }
                if ( subjectDropdown2.value == "2"){
                    console.log("you did it")
                    document.querySelector(".nounInput2").style.display = "block";
                    document.querySelector(".startScreen").style.display = "none";
                }
                if ( subjectDropdown2.value == "3"){
                    console.log("you did it")
                    document.querySelector(".nounInput3").style.display = "block";
                    document.querySelector(".startScreen").style.display = "none";
                }
                if ( subjectDropdown2.value == "4"){
                    console.log("you did it")
                    document.querySelector(".nounInput4").style.display = "block";
                    document.querySelector(".startScreen").style.display = "none";
                }
                if ( subjectDropdown2.value == "5"){
                    console.log("you did it")
                    document.querySelector(".nounInput5").style.display = "block";
                    document.querySelector(".startScreen").style.display = "none";
                }
            }else if ( subjectDropdown.value == "voting"){
                console.log("voter")
                document.querySelector(".startScreen").style.display = "none";
                document.querySelector(".loading").style.display = "block";
                let startmessage="Press any key To Start"
                const pressSStart  = document.querySelector('.pressSStart')
                pressSStart.textContent=startmessage
                document.onkeydown=function () {
                    playAudio()
                    console.log("dkfjadkfjdlakfjadslfkja;sdlkfj;dlaskjfldkjas;f");
                    let startmessage=""
                    const pressSStart  = document.querySelector('.pressSStart')
                    pressSStart.textContent=startmessage
                    document.querySelector(".loading").style.display = "none";
                    document.querySelector(".votingPage").style.display = "block";
                    document.querySelector(".p1vote").style.display = "block";
                    document.querySelector(".p2vote").style.display = "block";
                    document.querySelector(".p3vote").style.display = "block";
                    document.querySelector(".p4vote").style.display = "block";
                    document.querySelector(".p5vote").style.display = "block";
                    

                }
            }
            
        }
        holler.onClientEvent(noun1=>{
            console.log(`Client event received: ${noun1}`)
            const parts=[noun1]
            parts.push(noun1) 
            console.log(noun1)
            // const message=[noun1]
            const message= [+noun1+" "+ " "+verb1+" "+ " "+adverb1+" "+ " "+noun2+" "+ " "+verb2+"."]
            const madLibsPrintout = document.querySelector('.madLibsPrintout')
            madLibsPrintout.textContent = event1
           
           
        })

        // selectorPagesTeleporter()
        // }
        n1SubmitButton.onclick = function(){
            let noun1 = document.querySelector(".noun1").value
            // const collection=[noun1]
            playAudio()
        
            holler.appInstance.notifyClients(noun1)
            console.log("submitted"+" "+" "+noun1)
        }
        n2SubmitButton.onclick = function(){
            playAudio()
            let verb1 = document.querySelector(".verb1").value
            const madLibsPrintout = document.querySelector('.madLibsPrintout')
           
            // madLibsPrintout.textContent = message
            holler.appInstance.notifyClients(verb1)
        }
        P1Button.onclick = function(){
            document.querySelector(".giphyy").style.display = "block";
        }
    })
}, 1000)
})
  // ab1.remove();
    // ab2.remove();
    // ab3.remove();
    // ab4.remove();
    // ab5.remove();
    // ab6.remove();
    // ab7.remove();
    // ab8.remove();
    // ab9.remove();
    // ab10.remove();
    // ab11.remove();
    // ab12.remove();
    // ab13.remove();
    // ab14.remove();
    // ab15.remove();
    // ab16.remove();
    // ab17.remove();
    // ab18.remove();
    // ab19.remove();
    // ab20.remove();
 // document.querySelecto".madLibInput").style.display = "none";
    // console.log(collection)

    // let ab1 = document.querySelector(".a1").value
    // let ab2 = document.querySelector(".a2").value
    // let ab3 = document.querySelector(".a3").value
    // let ab4 = document.querySelector(".a4").value
    // let ab5 = document.querySelector(".a5").value
    // let ab6 = document.querySelector(".a6").value
    // let ab7 = document.querySelector(".a7").value
    // let ab8 = document.querySelector(".a8").value
    // let ab9 = document.querySelector(".a9").value
    // let ab10 = document.querySelector(".a10").value
    // let ab11 = document.querySelector(".a11").value
    // let ab12 = document.querySelector(".a12").value
    // let ab13 = document.querySelector(".a13").value
    // let ab14 = document.querySelector(".a14").value
    // let ab15 = document.querySelector(".a15").value
    // let ab16 = document.querySelector(".a16").value
    // let ab17 = document.querySelector(".a17").valu
    // let ab18 = document.querySelector(".a18").value
    // let ab19 = document.querySelector(".a19").value
    // let ab20 = document.querySelector(".a20").value}
    
    // let message = "If you go to some_"+ab1+"_place like Yellowstone National_"+ab2+"_,you must know how to deal with the wild animals such as bears and wolves and_ "+ab3+". The most important of these is the bear. There are three kinds of bears, the grizzly bear, the_"+ab4+"_bear, and the_"+ab5+"_bear.Bears spend most of their time_"+ab6+"_or_"+ab7+". They look very_"+ab8+"_,but if you make them_"+ab9+",_they might bite your_"+ab10+". Bears will come up to your car and beg for_"+ab11+". They will stand on their hind legs and clap their_"+ab12+"_together and pretend to be_"+ab13+". But do not get out of your_"+ab14+"_or offer the bears_"+ab15+"_or_"+ab16+". This same advice applies to other wild creatures such as_"+ab17+"_and_"+ab18+". Remember all these rules and you will spend your vacation_"+ab19+"_and not get eaten by a_"+ab20
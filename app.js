holler.onLoad(()=>{
    setTimeout(()=> {
    holler.me(()=>{
        let name = document.querySelector(".name1").value
        let saving=[]
        let noun1 = document.querySelector(".noun1").value
        let noun2 = document.querySelector(".noun2").value
        let verb1 = document.querySelector(".verb1").value  
        let verb2 = document.querySelector(".verb2").value
        let adverb1 = document.querySelector(".adverb1").value
        let clear1=document.querySelector(".cclear")
        let createButtons = document.querySelector(".createButton")
        let startButton = document.querySelector(".startButton")
        let nextButton = document.querySelector(".nextButton")
        let subjectDropdown = document.getElementById("subject")
        let subjectDropdown2 = document.getElementById("subjects")
        let P1Button=document.querySelector(".P1Button")
        let P2Button=document.querySelector(".P2Button")
        let P3Button=document.querySelector(".P3Button")
        let P4Button=document.querySelector(".P4Button")
        let P5Button=document.querySelector(".P5Button")
        let show=document.querySelector(".show")
        let n1SubmitButton=document.querySelector(".n1SubmitButton")
        let n2SubmitButton=document.querySelector(".n2SubmitButton")
        let n3SubmitButton=document.querySelector(".n3SubmitButton")
        let n4SubmitButton=document.querySelector(".n4SubmitButton")
        let n5SubmitButton=document.querySelector(".n5SubmitButton")
        let madLibsPrintout=document.querySelector(".madLibsPrintout")
        let done=document.querySelector(".done")
       
        n1SubmitButton.onclick = function(){
            parts=[]
            document.querySelector(".cclear").style.display = "block";
        let story1=["The monster lifted me off the"+noun1]
        let story2=["It was dark and" +verb1] 
        let story3=["I screamed so loudly, I woke up every "+adverb1]
        let story4=["It's time to treat your tired"]
        let story5=["Last Christmas he broke the"]
        let story6=["Love must be in the"]
        let story7=["Remember to start your speech with a funny"]
        let story8=["I hope he doesn't recognize my"]
        let story9=["Their shadow loomed over their"]
        let story10=["Remember, prosperity is just around the"]
        let story11=["She realized she lost her"]
        let story12=["Next you bake it in a very hot"]
        let story13=["Now he's dragging you to a bottomless"]
        let story14=["Every morning after class we beg for"]
        let story15=[" If you won't take our word for it, there's scientific proof of the old adage that laughter is the best "]
        let story16=["Life is a soup and I am a"]
        let story17=["Life is short smile while you still have"]
        let story18=["Why would you eat a "]
        let story19=["He never typed on a"]
        let story20=["He surfed on the"]
        
        var stories=[story1,story2,story3]
        var randStory = stories[Math.floor(Math.random() * stories.length)];
        console.log(randStory);
            noun1.value = '';
            let inputt = document.querySelector(".noun1").value
            let event1a=(story1+" "+" "+inputt)
            let event1ab=(story2+" "+" "+inputt)
            let event1abc=(story3+" "+" "+inputt)
            let event1abcd=(story4+" "+" "+inputt)
            let event2q=(story5+" "+" "+inputt)
            let event2w=(story7+" "+" "+inputt)
            let event2e=(story8+" "+" "+inputt)
            let event6f=(story6+" "+" "+inputt)
            let event2t=(story9+" "+" "+inputt)
            let event2tt=(story10+" "+" "+inputt)
            let event2ttt=(story11+" "+" "+inputt)
            let event2tttt=(story12+" "+" "+inputt)
            let eventat=(story13+" "+" "+inputt)
            let eventatt=(story14+" "+" "+inputt)
            let eventaatt=(story15+" "+" "+inputt)
            let eventz=(story16+" "+" "+inputt)
            let eventx=(story17+" "+" "+inputt)
            let eventc=(story18+" "+" "+inputt)
            let eventv=(story19+" "+" "+inputt)
            let eventb=(story20+" "+" "+inputt)
            var randdom=[event1a,event1abc,event1abcd,event2q,event2w,event2e,event6f,event2t, event2ttt, event2tt, event2tttt, eventat, eventaatt, eventatt, eventz, eventc, eventb,eventv, eventx]
            console.log(randdom)
            var randh = randdom[Math.floor(Math.random() * randdom.length)];
            console.log(randh);
            event1=("User, aka"+" "+name+ " says: "+" "+randh)
            console.log("event 1: " + event1)
              holler.appInstance.notifyClients(event1)
            playAudio() // const collection=[noun1]
            document.querySelector(".show").style.display = "block"}
        show.onclick = function(){
            console.log("fdffdfdfmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
            document.querySelector(".nounInput").style.display = "none";
            document.querySelector(".nounInput").style.display = "none";
            // document.querySelector(".stop").style.display = "block";
            madLibsPrintout.textContent = parts+"The Player with the most votes wins"
            

            document.querySelector(".loading").style.display = "block";
            document.querySelector(".loading").style.display = "none";
            document.querySelector(".p1vote").style.display = "block";
            document.querySelector(".p2vote").style.display = "block";
            document.querySelector(".p3vote").style.display = "block";
            document.querySelector(".p4vote").style.display = "block";
            document.querySelector(".p5vote").style.display = "block";
        }
        P1Button.onclick = function(){
            event1=("Player One Wins!")
            holler.appInstance.notifyClients(event1)}
        P2Button.onclick = function(){
            event1=("Player Two Wins!")
            holler.appInstance.notifyClients(event1)}
        P3Button.onclick = function(){
            event1=("Player Three Wins!")
            holler.appInstance.notifyClients(event1)}
        P4Button.onclick = function(){
            event1=("Player Four Wins!")
            holler.appInstance.notifyClients(event1)}
        P5Button.onclick = function(){
            event1=("Player Five Wins!")
            holler.appInstance.notifyClients(event1)}
           


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
                    
                }
            }
            
        }
       
        holler.onClientEvent(event1=>{
            xa.play()
            console.log(`Client event received: ${event1}`)
            parts.push(event1+" "+"  ") 
           
           
            saving.push(event1+" "+"  ")
            
            console.log(event1)
            // const message=[event1]
            console.log(parts)
            // const message= [+event1+" "+ " "+verb1+" "+ " "+adverb1+" "+ " "+noun2+" "+ " "+verb2+"."]
            const withoutCommas = parts.join(' ');
            const madLibsPrintout = document.querySelector('.madLibsPrintout')
           
            const para = document.createElement("div");
            para.innerText = withoutCommas;
            madLibsPrintout.appendChild(para);
            
            // madLibsPrintout.textContent = withoutCommas    

            clear1.onclick= function(){
            
            madLibsPrintout.textContent=""
            parts=[]
            console.log("hghghghghgg")
        } 
        })
  
    })
}, 1000)
})
  
f = []
syff = []
pass = []
test=[]
let i = 0
var myQ = [
    {
        question: "What is the plural of appendix?",
        answers: {
            a: 'appenda',
            b: 'appendixes',
            c: 'appendices ',
            d: "appendix"
        },
        correctAnswer: 'c'
    },
    {
        question: "Which number should be on the dots?<br>27  9  18  6  12  4 ….",
        answers: {
            a: '5',
            b: '6',
            c: '7',
            d: "8"
        },
        correctAnswer: 'd'
    },
    {
        question: "Which word is different from the rest?",
        answers: {
            a: 'stupid ',
            b: 'dumb',
            c: 'smart ',
            d: "idiotic"
        },
        correctAnswer: 'c'
    },
    {
        question: "Whats the result of this sum?<br>16 * 63 - 1214",
        answers: {
            a: '306',
            b: '206',
            c: '306',
            d: "18416"
        },
        correctAnswer: 'b'
    },
    
    {
        question: "Straw is to drink as food is to plate as drink is to :",
        answers: {
            a: 'fork',
            b: 'cup',
            c: 'straw',
            d: "table"
        },
        correctAnswer: 'b'
    },
    {
        question: "He___ born in 1963 in America.",
        answers: {
            a: 'had',
            b: 'is ',
            c: 'was  ',
            d: "did"
        },
        correctAnswer: 'c'
    },
    {
        question: "___ you ever visited London?",
        answers: {
            a: 'did',
            b: 'do ',
            c: 'were  ',
            d: "have"
        },
        correctAnswer: 'd'
    },
    {
        question: "She has never ____to New York?",
        answers: {
            a: 'gone ',
            b: 'was',
            c: 'been',
            d: "went"
        },
        correctAnswer: 'c'
    },
    {
        question: "Switzerland is ____than Britain?",
        answers: {
            a: 'as small',
            b: 'smallest ',
            c: 'more small ',
            d: "smaller"
        },
        correctAnswer: 'd'
    },
    {
        question: "He passed his English exam very ____",
        answers: {
            a: 'easy',
            b: 'cueasier ',
            c: 'good ',
            d: "easily"
        },
        correctAnswer: 'd'
    },
    {
        question: "If we want to place text around an image, which CSS property should we use?",
        answers: {
            a: 'push',
            b: 'float ',
            c: 'align ',
            d: "wrap"
        },
        correctAnswer: 'b'
    },
    {
        question: "Choose the correct HTML tag for a large title.",
        answers: {
            a: 'h1',
            b: 'heading ',
            c: 'head ',
            d: "h6"
        },
        correctAnswer: 'a'
    },
    {
        question: "An array can be stored in a reverse manner through the method?",
        answers: {
            a: 'sort()',
            b: 'reverse() ',
            c: 'rev.length() ',
            d: "sort.length()"
        },
        correctAnswer: 'b'
    },
    {
        question: "Which of the following keywords is used  to define a variable in JavaScript?",
        answers: {
            a: 'var',
            b: 'let ',
            c: 'both A and B  ',
            d: "None of the above"
        },
        correctAnswer: 'c'
    },
    {
        question: "Which of the following methods is used to access HTML elements using javascipt?",
        answers: {
            a: 'getElementbyId()',
            b: 'getElementbyId() ',
            c: 'both A and B ',
            d: "None of the above"
        },
        correctAnswer: 'c'
    },
    {
        question: "When an operators value is NULL , the typeof returned by the unary operator is ?",
        answers: {
            a: 'Boolean',
            b: 'undefined ',
            c: 'object ',
            d: "integer"
        },
        correctAnswer: 'c'
    },

    {
        question: "Which function is used to serialize an object into a JSON string in javascript?",
        answers: {
            a: 'stringify()',
            b: 'parse() ',
            c: 'convert() ',
            d: "None of the above"
        },
        correctAnswer: 'a'
    },
    {
        question: "What keyword is used to declare an asynchronous function in javascript?",
        answers: {
            a: 'async ',
            b: 'await ',
            c: 'setTimeout ',
            d: "None of the above"
        },
        correctAnswer: 'a'
    },
    {
        question: "How do we write a single-line comment in javascript?",
        answers: {
            a: '/* */',
            b: '//  ',
            c: '# ',
            d: "$ $"
        },
        correctAnswer: 'b'
    },
    {
        question: "Which of the following are not server-side Javascript objects?",
        answers: {
            a: 'Date',
            b: 'FileUpload ',
            c: 'Function ',
            d: "All of the above"
        },
        correctAnswer: 'b'
    }


];

document.getElementById("button-next").disabled=true;





if (i == 0 ){
    document.getElementById("q").innerHTML = `Q${0+1}: `+myQ[0].question;
    // console.log(myQ[i].question)

    document.getElementById("ans1").innerHTML = myQ[0].answers["a"];

    document.getElementById("ans2").innerHTML = myQ[0].answers["b"];

    document.getElementById("ans3").innerHTML = myQ[0].answers["c"];

    document.getElementById("ans4").innerHTML = myQ[0].answers["d"];

}

// to get berder of answer effict ehen you click it

function divAple(P) {

    document.getElementById("button-next").disabled = false;

    if (P == 1){
        document.getElementById("rad1").checked = true;
    }
    if (P == 2){
        document.getElementById("rad2").checked = true;
    }
    if (P == 3){
        document.getElementById("rad3").checked = true;
    }
    if (P == 4){
        document.getElementById("rad4").checked = true;
    }

}

function butAple(){
    document.getElementById("button-next").disabled=false;

}




function orph() {
    
    // connect the quastion  and answers


    if (myQ[i].correctAnswer == "a") {
        document.getElementById("ans1").value = "1";
    }
    if (myQ[i].correctAnswer == "b") {
        document.getElementById("ans2").value = "1";
    }
    if (myQ[i].correctAnswer == "c") {
        document.getElementById("ans3").value = "1";
    }
    if (myQ[i].correctAnswer == "d") {
        document.getElementById("ans4").value = "1";
    }



    // data for sucsses answer
    if (document.getElementById("rad1").checked == true && document.getElementById("ans1").value == "1") {
        pass.push(i);
    }
    if (document.getElementById("rad2").checked == true && document.getElementById("ans2").value == "1") {
        pass.push(i);
    }
    if (document.getElementById("rad3").checked == true && document.getElementById("ans3").value == "1") {
        pass.push(i);
    }
    if (document.getElementById("rad4").checked == true && document.getElementById("ans4").value == "1") {
        pass.push(i);
    }


    // data for unsucsses answer

    if (document.getElementById("rad1").checked == true && document.getElementById("ans1").value != "1") {
        f.push(i)
        syff.push("a")
    }
    if (document.getElementById("rad2").checked == true && document.getElementById("ans2").value != "1") {
        f.push(i)
        syff.push("b")
    }
    if (document.getElementById("rad3").checked == true && document.getElementById("ans3").value != "1") {
        f.push(i)
        syff.push("c")
    }
    if (document.getElementById("rad4").checked == true && document.getElementById("ans4").value != "1") {
        f.push(i)
        syff.push("d")
    }


   // wo ge here to the next quastion on myQ array
    i += 1 ;


    // the last condetions 


    // end of quiz it will trans you for result page
    if(i == myQ.length){
        window.location.href="../resultpage/result.html";
    }

    // trans next btn to finish btn
    if(i == myQ.length - 1){
        document.getElementById("button-next").innerHTML="Finish";
    }


    
    // write the next quastion and the multibul choois on card
    document.getElementById("q").innerHTML = `Q${i+1}: `+myQ[i].question;

    document.getElementById("ans1").innerHTML = myQ[i].answers["a"];

    document.getElementById("ans2").innerHTML = myQ[i].answers["b"];

    document.getElementById("ans3").innerHTML = myQ[i].answers["c"];

    document.getElementById("ans4").innerHTML = myQ[i].answers["d"];


    // trans the pass answer to session storage
    // trans the falseQ and falseAnswe answer to session storage

    sessionStorage.setItem("passQ",pass.length)
    sessionStorage.setItem("falseQ",f)
    sessionStorage.setItem("falseAns",syff)

    // reset orders

    document.getElementById("rad1").checked = false;
    document.getElementById("rad2").checked = false;
    document.getElementById("rad3").checked = false;
    document.getElementById("rad4").checked = false;

    document.getElementById("button-next").disabled=true;
    
    document.getElementById("ans1").value = "0";
    document.getElementById("ans2").value = "0";
    document.getElementById("ans3").value = "0";
    document.getElementById("ans4").value = "0";


    // englesh siction
    if ( i == 5){
        alert("now we are going to english language section")
    }
    // technical section
    if ( i == 10){
        alert("now we are going to technical section")
    }


}
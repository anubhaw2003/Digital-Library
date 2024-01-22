// // let bg = document.getElementById("front");
// // bg.style.backgroundColor="#000"
// // function ChangeTheme() {
// //     let btn = document.getElementById("night");
// //     let bg = document.getElementById("front");
// //     if (bg.style.backgroundColor !== "#000") {
// //         bg.style.backgroundColor = "#fff";
// //     }
// //     else {
// //         bg.style.backgroundColor = "#000";
        
// //     }
// // }
// // document.getElementById("buyBooksHere").style.display = "none";
// //  document.getElementById("borrowBooksHere").style.display = "none";
// // function Click_action() {

// //     let BorrowDiv = document.getElementById("borrowBooksHere");
// //     if (BorrowDiv.style.display != "none") {
// //         BorrowDiv.style.display = "none";
// //     }
// //     else {
// //         BorrowDiv.style.display = "block";
// //     }
// //     // document.getElementById("borrowBooksHere").style.display = "block";
// // }

// //   function Click_action() {
// //       let BorrowDiv = document.querySelector(".BookCard");

// //         if (BorrowDiv.style.display !== "none") {
// //             BorrowDiv.style.display = "none";
// //         } else {
// //             BorrowDiv.style.display = "block";
            
// //         }
// //         // document.getElementById("borrowBooksHere").style.display = "block";
// //     }

//     // Add an event listener to call Click_action when a button is clicked
//     // document.getElementById("yourButtonId").addEventListener("click", Click_action);

// function requestSent() {
//     alert('Request Sent!');
// }
// function sendMessage() {
//     var userInput = document.getElementById('userInput');
//     var chatBody = document.getElementById('chatBody');

//     // Get user input
//     var userMessage = userInput.value;

//     // Clear user input field
//     userInput.value = '';

//     // Display user message in the chat
//     var userMessageElement = document.createElement('div');
//     userMessageElement.className = 'chat-message user';
//     userMessageElement.textContent = userMessage;
//     chatBody.appendChild(userMessageElement);

//     // Simulate bot response (you can replace this with actual bot logic)
//     var botMessage = 'I received your message: ' + userMessage;

//     // Display bot message in the chat
//     var botMessageElement = document.createElement('div');
//     botMessageElement.className = 'chat-message bot';
//     botMessageElement.textContent = botMessage;
//     chatBody.appendChild(botMessageElement);

//     // Scroll to the bottom of the chat
//     chatBody.scrollTop = chatBody.scrollHeight;
// }










// // function Click_action() {
// //     let BorrowDiv = document.getElementById("borrowBooksHere");

// //     if (BorrowDiv.style.display !== "none") {
// //         // If the element is visible, hide it and remove a class
// //         BorrowDiv.style.display = "none";
// //         BorrowDiv.classList.remove("visibleClass");
// //         BorrowDiv.classList.add("hiddenClass");
// //     } else {
// //         // If the element is hidden, show it and remove a class
// //         BorrowDiv.style.display = "block";
// //         BorrowDiv.classList.remove("hiddenClass");
// //         BorrowDiv.classList.add("visibleClass");
// //     }
// // }





// //   function Click_action() {
// //         let BorrowDiv = document.getElementById("borrowBooksHere");

// //         // Toggle between "display: none" and "display: block"
// //         BorrowDiv.style.display = (BorrowDiv.style.display === "none") ? "block" : "none";

// //         // Add or remove a class
// //         BorrowDiv.classList.toggle("openY");
// //     }

//     // Add an event listener to call Click_action when a button is clicked
//     // document.getElementById("borrowBooksHere").addEventListener("click", Click_action);


 function toggleHiddenElements() {
        var hiddenElements = document.querySelectorAll('[id="hidden"]');
        var expandMoreSpan = document.querySelector('.material-symbols-outlined.more');

        hiddenElements.forEach(function (element) {
            if (element.style.display === 'none') {
                element.style.display = 'list-item';
            } else {
                element.style.display = 'none';
            }
        }); 

        // Update the span text content and style
        if (hiddenElements[0].style.display === 'none') {
            expandMoreSpan.textContent = 'expand_more';
        } else {
            expandMoreSpan.textContent = 'expand_less';
        }
}
    
function Subscribed() {
    let subscribebtn = document.getElementById("subscribeButton");
    if (subscribebtn.textContent === 'Subscribe') {
        subscribebtn.textContent = 'Subscribed';
        alert("You Subscribed to Digital Library");
        subscribebtn.style.color = "#fff";
        subscribebtn.style.backgroundcolor = "#FF0000";
    }
    else if (subscribebtn.textContent === 'Subscribed') {
        subscribebtn.textContent = 'Subscribe';
        alert("Unsubscribed");
        subscribebtn.style.color = "#fff";
        subscribebtn.style.backgroundcolor = "#FF7F50";
        
    }
    
}

const HideDiv = document.getElementById("borrowBooksHere");
function Close() {
    HideDiv.style.display = "none";
    
}
// function Borrow() {

//     if (HideDiv.style.visibility === "hidden") {
//         HideDiv.style.display = "visible";
//     }
//     else {
//         HideDiv.style.display = "hidden";
//     }
     
  
// }

const account = document.getElementById("AccountDiv");

function changeTransitionDuration(duration) {
      box.style.transitionDuration = duration + 's';
    }

function Show_hide() {
    if (account.style.display === "none") {
        account.style.display = "block";
        changeTransitionDuration(.1);
    }
    else{
        account.style.display = "none";
        changeTransitionDuration(.1);

    }
    
}

const detail = document.getElementById("paragraph");
function showDetail() {
    if (detail.style.display === "none") {
        detail.style.display = "block";
    }
    else {
        
        detail.style.display = "none";
    }
}


// const membership = document.getElementById("MembershipForm");
// function member() {
//     if (membership.style.display === "none") {
//         membership.style.display = "block";
//     }
//     else {
//         membership.style.display = "none";
//     }
// }


const VisibleRow = document.getElementById("row");
function ShowRow() {
    if (VisibleRow.style.overflow === "hidden") {
        VisibleRow.style.overflow = "visible";
    }
    else {
        VisibleRow.style.overflow = "hidden";
    }
} 

 let currentIndex = 0;

        function showCard(index) {
            const cards = document.querySelector('.cards');
            const cardWidth = document.querySelector('.card').offsetWidth;

            if (index >= 0 && index < cards.children.length) {
                currentIndex = index;
                const transformValue = -currentIndex * cardWidth;
                cards.style.transform = `translateX(${transformValue}px)`;
            }
        }

        function prevCard() {
            showCard(currentIndex - 1);
        }

        function nextCard() {
            showCard(currentIndex + 1);
}
        

const memberShip = document.getElementById("memberShip");
function MemberShip() {
    if (memberShip.style.visibility === "hidden") {
        memberShip.style.visibility = "visible";
        memberShip.style.transition = "all .1s ease";
        
    }
    else {
        memberShip.style.visibility = "hidden";
    }
    
}

const Signup = document.getElementById("SignUp");
function ShowForm() { 
    if (Signup.style.visibility === "hidden") {
        Signup.style.visibility = "visible";
        
    }
    else {
        Signup.style.visibility = "hidden";
    }
}
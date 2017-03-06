var decisions = [{
        question: "Are you hungry?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        question: "What kind of food are you in the mood for?",
        choices: [
            "hearty",
            "sweet",
            "healthy"
        ]
    },
]

options = {
    hearty: [
        "Chili",
        "Meatloaf",
        "Macaroni and Cheese"
    ],
    sweet: [
        "Cookie",
        "Ice Cream",
        "Brownie"
    ],
    healthy: [
        "Salad",
        "Smoothie",
        "Parfait"
    ]
}

var currentDecisionIndex = 0;

var choices = [];
var question = document.getElementsByClassName("question")[0];
var btnContainer = document.getElementsByClassName("btn-container")[0];

showDecision(0);

function showDecision(currentDecisionIndex) {
	var currentDecision = decisions[currentDecisionIndex];
    question.innerHTML = currentDecision.question;

	for (var i = 0; i < currentDecision.choices.length; i++ ) {
		var newBtn = document.createElement("div");
		newBtn.classList.add("btn");
        newBtn.innerHTML = currentDecision.choices[i];

        btnContainer.append(newBtn);
        newBtn.addEventListener("click", function(event) {
            registerChoice(event.target.innerHTML);
        })

	}

}

function registerChoice(choice) {
    btnContainer.innerHTML = "";

    if (currentDecisionIndex === decisions.length - 1) {
        showOptions(choice);
    } else {

        choices.push(choice);
        currentDecisionIndex += 1;
        showDecision(currentDecisionIndex);
    }
}

function showOptions(choice) {

    for (var i = 0; i < options[choice].length; i++) {
        var newBtn = document.createElement("div");
        newBtn.classList.add("btn");
        newBtn.innerHTML = options[choice][i];

        btnContainer.append(newBtn);
        newBtn.addEventListener("click", function(event) {
            // registerChoice(event.target.innerHTML);
        })

    }

}

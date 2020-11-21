let i = 0;
let j = 0;
let k = 0;
let text1 = "Hello Heather! My biggest boomer. Happy one year annivesary! You have made my life so much better and have filled it with so much happieness and joy. I am forever grateful to have you in my life.";
let text2 = "One year of love, crack, and incredible memories. I love you."
let leftText = "Thank you for giving me so much happiness in my life I love every single minute I get to spend with you. I want to never stop being with you and spend the rest of my life with you. As long as I keep living, I will never stop loving you. I will love you with all my heart and do whatever it takes to keep winning your heart every day and to make you mine. I want you to be mine forvever and I want to be yours. I can't wait to big bool it every single day and once we done with college we can start building our lives together and I can't wait for that. You make me so incredibly happy and even though you boom a lot you will be my boomer goof and love forever. "
let rightText = "If you are ever looking at this site in the future, I hope you are doing well and think of me when you see this. And look at the clock to see how long we've been together and see how many amazing days I've had the luck to be yours. I truly am the luckiest person alive and to be able to love you has opened my heart and eyes to another world full of color and happiness and you are the center of it. You are my entire world, my universe and you derserve every single ounce of happiness in the world and I want to be the one to give that to you. Like in the song, loving you has never felt more right and I know you are the one for me. Here's to our one year of love joy and happiness and to many more years of incredible memories in the future"
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		document.getElementById(para).style.fontSize = "xx-large";
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

function sideTypeWriter(text, para) {
	if(ok == 2){
		clearInterval(sideTypeInterval);
	}
	
	if(j < text.length){
		document.getElementById(para).innerHTML += text.charAt(j);
		document.getElementById(para).style.fontSize = "x-large";
		j++;
	}
	else{
		if(k == 0){
			j = 0;
		}
		k += 1;
	}
}

var sideTypeInterval;

function runSideText() {
	sideTypeInterval = setInterval(function() {
		if( k == 0) {
			sideTypeWriter(leftText, "lefttxt");
		}
	
		else if (k == 1) {
			sideTypeWriter(rightText, "rightxt");
		}
	}, 100);
}
	

var typeInterval;

typeInterval = setInterval(function() {
	if( ok == 0) {
		typeWriter(text1, "txt1");
	}

	else if (ok == 1) {
		typeWriter(text2, "txt2");
	}
}, 100);
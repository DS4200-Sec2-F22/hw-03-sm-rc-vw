function v1button1Clicked() {
	var div = document.createElement("div");
	var head1 = document.createElement("h3");
	var head2 = document.createElement("h3");
	var ulist1 = document.createElement("ul");
	var ulist2 = document.createElement("ul");

	head1.innerHTML = 'Marks'
	head2.innerHTML = 'Channels'

	var bullet1 = document.createElement('li');
	var bullet2 = document.createElement('li');
	bullet1.innerHTML = 'Area'
	bullet2.innerHTML = "Color- The states are different colors to signify which candidate it's electoral votes would have gone to. This was a good choice because it clearly differentiates between the two distinct groups."

	ulist1.appendChild(bullet1);
	ulist2.appendChild(bullet2);
	div.appendChild(head1);
	div.appendChild(ulist1);
	div.appendChild(head2);
	div.appendChild(ulist2);
	document.getElementById("vis1button1").appendChild(div).innerHTML;
}

function v1button2Clicked() {
	let text = "Divergent: Represents attribute of type X"

	let v1button2Div = document.getElementById("vis1button2")
	v1button2Div.innerHTML = text
}

function v2button1Clicked() {
	var div = document.createElement("div");
	var head1 = document.createElement("h3");
	var head2 = document.createElement("h3");
	var ulist1 = document.createElement("ul");
	var ulist2 = document.createElement("ul");

	head1.innerHTML = 'Marks'
	head2.innerHTML = 'Channels'

	var bullet1 = document.createElement('li');
	var bullet2 = document.createElement('li');
	var bullet3 = document.createElement('li');
	bullet1.innerHTML = 'Points'
	bullet2.innerHTML = "Position(both)- The position represents launch angle and exit velocity. This is somewhat sucessful because it shows how an increase in either affect success, but it isn't the most intuitive measure." 
	bullet3.innerHTML = "Color- The color is on a gradient between two distinct colors and is able to clearly indicate success rate of hits."

	ulist1.appendChild(bullet1);
	ulist2.appendChild(bullet2);
	ulist2.appendChild(bullet3);
	div.appendChild(head1);
	div.appendChild(ulist1);
	div.appendChild(head2);
	div.appendChild(ulist2);
	document.getElementById("vis2button1").appendChild(div).innerHTML;
}

function v2button2Clicked() {
	let text = "Categorical"

	let v2button2Div = document.getElementById("vis2button2")
	v2button2Div.innerHTML = text
}
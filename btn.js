<button class="btn">Hello!1</button>
<button class="btn">Hello!2</button>
<button class="btn">Hello!3</button>
<button class="btn">Hello!4</button>
<button class="btn">Hello!5</button>


var buttons = document.getElementsByClassName("btn");

for(i=0;i<buttons.length;i++) {

	console.log(buttons[i].innerText);
}

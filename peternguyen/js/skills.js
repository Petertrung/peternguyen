var learn = function (title,location,type,pic,desc,skill) {
	this.title = title;
	this.type = type;
	this.location = location;
	this.pic = pic;
	this.desc = desc;
	this.skill = skill;
}

var odea = new learn('O\'\Dea High School','Seattle',true,'pics/odea.png','',['Arduino','Basic']);
var code = new learn('Code Fellows','Seattle',true,'pics/codefellows.png','',['Html','Css','Javascript','Node.js','Jquery','Json','Ajax','PHP','MySql']);
var online = new learn('Self-Taught','Home',true,'','',['Html','Css','Javascript','Angular.js']);
var crea = new learn('Creatella','Remote',false,'pics/creatella.png','',['Html','Css','React.js','Javascript','Google API','Facebook API','Laravel','PHP','MySql']);
var ace = new learn('ACE','Seattle',false,'pics/Ace.png','',['Sketchup','Building Project','Designing']);
var free = new learn('Freelance','Home',false,'','',['Html','Css','Angular.js','Exel','Javascript','Jquery','Ajax','PHP','MySql']);

var group = [odea,code,crea,ace,free,online];
var link =[];

var t = [odea];
var edu = document.getElementById('edu');
var xp = document.getElementById('xp');
function clear(){
	edu.innerHTML = "";
	xp.innerHTML = "";
}

function display() {
	clear();
	for (var i = 0; i < t.length; i++) {
		var src = t[i].pic; 
		var ti = t[i].title;
		var loc = t[i].location;
		var de = t[i].desc;
		var ty = t[i].type;
        

		
		if (ty === true) {
		link = [];
		 for (var e = 0; e < t[i].skill.length; e++) {
		 	var y = ('<a href="#" onclick="findat();return false; id="'+ t[i].skill[e]+'">'+t[i].skill[e] +'</a>');
		   link.push(y);
		}
            var content = ('<div id ="left"><img id="'+src+'" src="'+ src +'"></div><div id="right"><div id="top">'+ ti +'</div><div id="bottom">'+loc+'</div><div id="skill">'+ link.valueOf() +'</div><div id="desc">'+ de +'</div></div>');
			edu.innerHTML = content;
			
			
		}
		if (ty === false) {
			link = [];
		for (var e = 0; e < t[i].skill.length; e++) {
		 	var y = ('<a href="#" onclick="findat();return false; id="'+ t[i].skill[e]+'">'+t[i].skill[e] +'</a>');
		   link.push(y);
		}
            var content = ('<div id ="left"><img id="'+src+'" src="'+ src +'"></div><div id="right"><div id="top">'+ ti +'</div><div id="bottom">'+loc+'</div><div id="skill">'+ link.valueOf() +'</div><div id="desc">'+ de +'</div></div>');
			xp.innerHTML = content;
		}
	}
}
display();

 	$("a").click(function(){ 
 	var name = this.name;
    var cls = $(this).attr("class");
    var id= this.id;
    alert("Id: " + id);
   // for (var i = 0; i < group.length; i++) {
   // 	group[i];

   // 	for (var e = 0; i < t[i]skill.length; e++) {
// 		t[i]skill[e]
   // 	}
   // }
})




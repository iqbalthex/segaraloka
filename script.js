const getId = id => document.getElementById(id);

const allData = {
	n: 0,
	data: {},
	add: (spd,dir) => {
		allData.data[allData.n] = { spd, dir };
		addData();
		allData.n++;
		renderData();
	},
	setSpd: (id,spd,e) => {
		allData.data[id].spd = parseFloat(spd);
		renderData(`spd-${id}`,true);
	},
	setDir: (id,dir,e) => {
		allData.data[id].dir = parseFloat(dir);
		renderData(`dir-${id}`,true);
	},
	getSpd: id => allData.data[id].spd,
	getDir: id => allData.data[id].dir,
	del: id => {
		delete allData.data[id];
		renderData();
	}
}

const cont = i => {return `
	<div class="row text-light text-center mb-2">
		<div class="col-2 d-flex align-items-center justify-content-center mt-1">
			<h5>${i}</h5>
		</div>
		<div class="col">
			<input type="number" class="form-control text-center"
				id="spd-${i}" value="${allData.data[i].spd || 0}"
				oninput="allData.setSpd(${i},this.value,this)">
		</div>
		<div class="col">
			<input type="number" class="form-control text-center"
				id="dir-${i}" value="${allData.data[i].dir || 0}"
				oninput="allData.setDir(${i},this.value,this)">
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-secondary btn-outline-danger text-light"
				onclick="allData.del(${i})">delete</button>
		</div>
	</div>
`;}

const addData = () => {
	let id = allData.n;
	getId("data").innerHTML += cont(id);
}

const renderData = (id=null,update=false) => {
	let content = '';
	for (i in allData.data){
		content += cont(i);
	}
	getId("data").innerHTML = content;
	update && getId(id).focus();
	updatePlot();
}

const pushData = (arr,spd,dir) => {
if ((dir > 0 && dir <= 11.25) || (dir > 348.75 && dir <= 360)){arr[0] = spd;}
	else if (dir >  11.25 && dir <=  33.75){arr[1]  = spd;}
	else if (dir >  33.75 && dir <=  56.25){arr[2]  = spd;}
	else if (dir >  56.25 && dir <=  78.75){arr[3]  = spd;}
	else if (dir >  78.75 && dir <= 101.25){arr[4]  = spd;}
	else if (dir > 101.25 && dir <= 123.75){arr[5]  = spd;}
	else if (dir > 123.75 && dir <= 146.25){arr[6]  = spd;}
	else if (dir > 146.25 && dir <= 168.75){arr[7]  = spd;}
	else if (dir > 168.75 && dir <= 191.25){arr[8]  = spd;}
	else if (dir > 191.25 && dir <= 213.75){arr[9]  = spd;}
	else if (dir > 213.75 && dir <= 236.25){arr[10] = spd;}
	else if (dir > 236.25 && dir <= 258.75){arr[11] = spd;}
	else if (dir > 258.75 && dir <= 281.25){arr[12] = spd;}
	else if (dir > 281.25 && dir <= 303.75){arr[13] = spd;}
	else if (dir > 303.75 && dir <= 326.25){arr[14] = spd;}
	else if (dir > 326.25 && dir <= 348.75){arr[15] = spd;}
}

const rose = (v, col, r) => {return {
	r,
	theta,
	name: `${v} m/s)`,
	marker: {color: `rgb(${col})`},
	type: "barpolar"
}}

const updatePlot = () => {
	let arr = [], datas = [], data = null;
	for (i=0;i<16;i++){arr.push(0);}
	for (i in allData.data){
		let spd = parseFloat(allData.data[i].spd);
		let dir = parseFloat(allData.data[i].dir);
		pushData(arr,spd,dir);
	}
	rand = Math.floor(Math.random * 255);
	data = rose(spd, `${rand},${rand},${rand}`, arr),
	datas.push(data);
	Plotly.newPlot("plot", datas, layout, { responsive: true });
}
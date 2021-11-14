
let inputData = {
  "dimensions": [{
    "id": "dimension_re",
    "values": ["East", "East", "West", "SouthWest", "South","NorthEast"]
  }, {
    "id": "dimension_cnt",
    "values": ["London", "Italy", "Germany", "US", "Russia","India"]
  },{
    "id": "measure_sales",
    "values": [100, 156, 432, 462, 25,100]
  }, {
    "id": "measure_qty",
    "values": [85, 34, 153, 434, 52, 43]
  }, {
    "id": "measure_profit",
    "values": [123, 45, 421, 465, 451, 56]
  }],
  "metadata": [ {
    "id": "measure_sales",
    "label": "Sales",
    "type":"number"
  }, {
    "id": "measure_qty",
    "label": "Quantity",
     "type":"number"
  }, {
    "id": "measure_profit",
    "label": "Profit",
     "type":"number"
  },{
    "id": "dimension_re",
    "label": "Region",
    "type":"string"
  }, {
    "id": "dimension_cnt",
    "label": "County",
    "type":"string"
  }]
}

const actualData = {};
const dimensions = inputData.dimensions;
const meta = inputData.metadata;
const output = [];

dimensions.map((item) => {
	meta.map((metaItem) => {
  	if (metaItem.id === item.id) {
      item.values.map((val, index) => {
        if (output[index] == undefined) {
           output[index] = {};
        }
      	output[index][metaItem.label] =val;
        expectdData=output
      });
    	 
    }
  });
});


const appDiv = document.createElement("div");

appDiv.innerHTML = "<h4>Actual Data</h4>";
appDiv.innerHTML += `<pre>${JSON.stringify(actualData,null,2)}</pre>`;
appDiv.innerHTML += "<h4>Expexted Data</h4>";
appDiv.innerHTML += `<pre>${JSON.stringify(expectdData,null,2)}</pre>`;
document.body.onload = () => {
 document.body.innerHTML = "";
 document.body.appendChild(appDiv);
}

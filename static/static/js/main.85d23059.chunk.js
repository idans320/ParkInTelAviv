(this["webpackJsonptelaviv-parking"]=this["webpackJsonptelaviv-parking"]||[]).push([[0],{100:function(e,t,r){},101:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(46),o=r.n(i),p=(r(61),r(10)),s=r(11),c=r(18),y=r(17),m=r(21),d=r(19),u=(r(62),r(13)),g=r.n(u),l=r(24),k=r(105),h=(r(64),r(47)),P=r(48),F=r(49),f=new(function(){function e(){Object(p.a)(this,e)}return Object(s.a)(e,[{key:"getByID",value:function(){var e=Object(l.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/status/"+t).then((function(e){return e}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"isFree",value:function(){var e=Object(l.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getByID(t);case 2:return r=e.sent,e.abrupt("return","free"===r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),v=r(50),b=r(51);function E(e){return{latitude:e.geometry.coordinates[0],longitude:e.geometry.coordinates[1]}}var w=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(c.a)(this,Object(y.a)(t).call(this,e))).state={},r.locateAddress=r.locateAddress.bind(Object(m.a)(r)),r}return Object(d.a)(t,e),Object(s.a)(t,[{key:"locateAddress",value:function(){var e=Object(l.a)(g.a.mark((function e(t){var r,a,n,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements[0].value,e.next=4,h.NominatimJS.search({street:r,city:"\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1"});case 4:if(!((a=e.sent).length>0)){e.next=13;break}return n=P.parse(a[0],{Point:["lat","lon"]}),e.next=9,this.closetParks(n);case 9:i=e.sent,this.props.handler({searchPoint:n,parkings:i}),e.next=14;break;case 13:alert("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d5 \u05ea\u05d5\u05e6\u05d0\u05d5\u05ea");case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"closetParks",value:function(){var e=Object(l.a)(g.a.mark((function e(t){var r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.assign({},v),e.next=3,Promise.all(r.features.map(function(){var e=Object(l.a)(g.a.mark((function e(a,n){var i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=t,s=a,!((i=Object(b.getDistance)(E(p),E(s)))<1200)){e.next=7;break}return e.next=4,f.isFree(a.properties.parkingid);case 4:return o=e.sent,r.features[n].properties.distance=i,e.abrupt("return",o);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}var p,s}),e)})));return function(t,r){return e.apply(this,arguments)}}()));case 3:return a=e.sent,r.features=r.features.filter((function(e,t){return a[t]})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"container searchbar"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col mt-3 mb-3"},n.a.createElement(k.a,{className:"form-inline md-form form-sm mt-0 justify-content-center",props:this.props.centerPoint,onSubmit:this.locateAddress},n.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}),n.a.createElement("input",{name:"searchInput",className:"form-control form-control-sm ml-3 w-75",type:"text",placeholder:"Search","aria-label":"Search"})))))}}]),t}(a.Component),j=(r(96),r(106)),O=r(109),x=r(108),N=(r(97),r(5)),C=r.n(N),D=function(e,t){var a=new C.a.Icon({iconUrl:r(45),iconRetinaUrl:r(45),iconAnchor:null,popupAnchor:[-3,-76],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new C.a.Point(30,31),className:"leaflet-div-icon"});return C.a.marker(t,{icon:a})},S=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(c.a)(this,Object(y.a)(t).call(this,e))).state={zoom:15},r}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getKey",value:function(){return"_"+Math.random().toString(36).substr(2,9)}},{key:"getCoordinates",value:function(e){return null!=e?e.geometry.coordinates.slice().reverse():null}},{key:"onEachFeature",value:function(e,t){var r="<Popup><p>Address:".concat(e.properties.name,' <br/><a href="http://www.ahuzot.co.il/Parking/ParkingDetails/?ID=').concat(e.properties.parkingid,'">Details</a><br/><a href = "https://www.waze.com/ul/?q=').concat(e.properties.name,'">Navigate</a></p></Popup>');t.bindPopup(r)}},{key:"render",value:function(){return n.a.createElement("div",{id:"mapDiv"},n.a.createElement(j.a,{center:this.getCoordinates(this.props.searchPoint),zoom:this.state.zoom},n.a.createElement(O.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.a.createElement(x.a,{key:this.getKey(this.props.searchPoint),data:this.props.searchPoint}),n.a.createElement(x.a,{key:this.getKey(this.props.parkings),onEachFeature:this.onEachFeature,pointToLayer:D,data:this.props.parkings})))}}]),t}(a.Component),z=r(103),A=r(107),I=r(104),B=(r(100),function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(c.a)(this,Object(y.a)(t).call(this,e))).state={},r.renderCard=r.renderCard.bind(Object(m.a)(r)),r}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderCard",value:function(){return null!=this.props.parkings?this.props.parkings.features.sort((function(e,t){return e.properties.distance-t.properties.distance})).map((function(e){var t=e.properties.name,r=e.properties.distance,a="http://www.ahuzot.co.il/Parking/ParkingDetails/?ID="+e.properties.parkingid,i="https://www.waze.com/ul/?q="+t;return n.a.createElement(z.a,{className:"mb-5"},n.a.createElement(A.a,{style:{width:"100%"}},n.a.createElement(A.a.Body,null,n.a.createElement(A.a.Text,null,n.a.createElement("ul",{class:"list-unstyled"},n.a.createElement("li",null,t),n.a.createElement("li",null,r," Meters"),n.a.createElement("li",null,n.a.createElement("a",{href:a},"More Details")),n.a.createElement("li",null,n.a.createElement("a",{href:i},"Navigate")))))))})):null}},{key:"render",value:function(){return n.a.createElement(I.a,{className:"details"},n.a.createElement("div",{className:"col col-sm-12"},this.renderCard()))}}]),t}(a.Component)),M=function(e){function t(){return Object(p.a)(this,t),Object(c.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-sm-center"},n.a.createElement("div",{className:"col col-sm-9 mt-3 mb-3"},n.a.createElement("nav",{class:"navbar-default"},n.a.createElement("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist"},n.a.createElement("a",{class:"nav-item nav-link active",id:"nav-map-tab","data-toggle":"tab",href:"#nav-map",role:"tab","aria-controls":"nav-map","aria-selected":"true"},"Map"),n.a.createElement("a",{class:"nav-item nav-link",id:"nav-detail-tab","data-toggle":"tab",href:"#nav-detail",role:"tab","aria-controls":"nav-detail","aria-selected":"false"},"Details"))),n.a.createElement("div",{class:"tab-content",id:"nav-tabContent"},n.a.createElement("div",{class:"tab-pane fade show active",id:"nav-map",role:"tabpanel","aria-labelledby":"nav-map-tab"},n.a.createElement(S,{searchPoint:this.props.searchPoint,parkings:this.props.parkings})),n.a.createElement("div",{class:"tab-pane fade",id:"nav-detail",role:"tabpanel","aria-labelledby":"nav-detail-tab"},n.a.createElement(B,{parkings:this.props.parkings}))))))}}]),t}(a.Component),J=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(c.a)(this,Object(y.a)(t).call(this,e))).state={searchPoint:null,parkings:null},r.handler=r.handler.bind(Object(m.a)(r)),r}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handler",value:function(e){this.setState(e)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(w,{handler:this.handler,searchPoint:this.state.searchPoint}),n.a.createElement(M,{searchPoint:this.state.searchPoint,parkings:this.state.parkings}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,r){e.exports=r.p+"static/media/parking.a8871931.jpg"},50:function(e){e.exports=JSON.parse('{"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"parkingid":"1","name":"\u05e2\u05dc \u05e4\u05e8\u05e9\u05ea \u05d3\u05e8\u05db\u05d9\u05dd 1 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.796437,32.085302]}},{"type":"Feature","properties":{"parkingid":"3","name":"\u05d0\u05e9\u05ea\u05d5\u05e8\u05d9 \u05d4\u05e4\u05e8\u05d7\u05d9 5 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.779797,32.089837]}},{"type":"Feature","properties":{"parkingid":"4","name":"\u05d7\u05d1\u05e8\u05d4 \u05d7\u05d3\u05e9\u05d4 9 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.790139,32.084738]}},{"type":"Feature","properties":{"parkingid":"5","name":"\u05d4\u05e8\u05db\u05d1\u05ea 20 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.777887,32.063433]}},{"type":"Feature","properties":{"parkingid":"7","name":"\u05d0\u05d5\u05e1\u05d9\u05e9\u05e7\u05d9\u05df 7 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.778595,32.095455]}},{"type":"Feature","properties":{"parkingid":"8","name":"\u05d9\u05d2\u05d0\u05dc \u05d0\u05dc\u05d5\u05df 151 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.796931,32.078075]}},{"type":"Feature","properties":{"parkingid":"10","name":"\u05d1\u05e8\u05e7\u05d5\u05d1\u05d9\u05e5 7 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.784555,32.077404]}},{"type":"Feature","properties":{"parkingid":"11","name":"\u05d5\u05d9\u05e0\u05d2\u05d9\u05d9\u05d8 3 - 1 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.788305,32.060273]}},{"type":"Feature","properties":{"parkingid":"13","name":"\u05dc\u05d5\u05d9 \u05d9\u05d5\u05e1\u05e3 \u05d2\u05d5\u05e0\u05d3\u05e8 5 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.764379,32.065819]}},{"type":"Feature","properties":{"parkingid":"14","name":"\u05d4\u05db\u05d5\u05d1\u05e9\u05d9\u05dd 80 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.763961,32.066847]}},{"type":"Feature","properties":{"parkingid":"15","name":"\u05d3\u05d5\u05d1\u05e0\u05d5\u05d1 4 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.783788,32.074102]}},{"type":"Feature","properties":{"parkingid":"16","name":"\u05d4\u05d0\u05e8\u05d3 2 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.841981,32.110887]}},{"type":"Feature","properties":{"parkingid":"18","name":"\u05dc\u05d1\u05d5\u05e0\u05d8\u05d9\u05df 20 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.776138,32.062337]}},{"type":"Feature","properties":{"parkingid":"19","name":"\u05d4\u05e6\u05e4\u05d9\u05e8\u05d4 2 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.781492,32.061646]}},{"type":"Feature","properties":{"parkingid":"20","name":"\u05d4\u05e6\u05e4\u05d9\u05e8\u05d4 8 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.782146,32.061019]}},{"type":"Feature","properties":{"parkingid":"21","name":"\u05e0\u05d7\u05d5\u05dd \u05d2\u05d5\u05dc\u05d3\u05de\u05df 13 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.759369,32.059257]}},{"type":"Feature","properties":{"parkingid":"23","name":"\u05e4\u05e0\u05d7\u05e1 \u05e8\u05d5\u05d6\u05df 51 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.824986,32.112441]}},{"type":"Feature","properties":{"parkingid":"24","name":"\u05e7\u05dc\u05d9\u05e9\u05e8 \u05e4\u05d9\u05e0\u05ea \u05d4\u05db\u05e8\u05de\u05dc \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.766538,32.066733]}},{"type":"Feature","properties":{"parkingid":"25","name":"\u05d4\u05dc\u05d5\u05d7\u05de\u05d9\u05dd 15 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.762341,32.037819]}},{"type":"Feature","properties":{"parkingid":"26","name":"\u05e4\u05e8\u05e9\u05ea \u05d3\u05e8\u05db\u05d9\u05dd 10 \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 "},"geometry":{"type":"Point","coordinates":[34.799849,32.081866]}},{"type":"Feature","properties":{"parkingid":"28","name":"\u05d4\u05de\u05e8\u05d3 \u05e4\u05d9\u05e0\u05ea \u05e7\u05d5\u05d9\u05e4\u05de\u05df \u05d9\u05d7\u05d6\u05e7\u05d0\u05dc 65 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.761708,32.060755]}},{"type":"Feature","properties":{"parkingid":"29","name":"\u05de\u05d5\u05e0\u05d8\u05d9\u05e4\u05d9\u05d5\u05e8\u05d9 5 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.769494,32.064701]}},{"type":"Feature","properties":{"parkingid":"31","name":"\u05dc\u05d9\u05d0\u05d5\u05e0\u05e8\u05d3\u05d5 \u05d3\u05d5\u05d9\u05e0\u05e6`\u05d9 5 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.784737,32.072677]}},{"type":"Feature","properties":{"parkingid":"32","name":"\u05d4\u05d6\u05e8\u05dd 12 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.767169,32.051235]}},{"type":"Feature","properties":{"parkingid":"33","name":"\u05d4\u05de\u05e8\u05d3 32 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.764004,32.064242]}},{"type":"Feature","properties":{"parkingid":"34","name":"\u05d4\u05e0\u05d7\u05d5\u05e9\u05ea 1 \u05d0` \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.838596,32.109546]}},{"type":"Feature","properties":{"parkingid":"36","name":"\u05d4\u05e0\u05e8\u05d9\u05d8\u05d4 \u05e1\u05d5\u05dc\u05d3 4 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.79141,32.079561]}},{"type":"Feature","properties":{"parkingid":"37","name":"\u05d9\u05e6\u05d7\u05e7 \u05e9\u05d3\u05d4 45 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.791341,32.06456]}},{"type":"Feature","properties":{"parkingid":"38","name":"\u05e6\u05d9\u05e7\u05dc\u05d2 7 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.782929,32.067156]}},{"type":"Feature","properties":{"parkingid":"39","name":"\u05d9\u05d2\u05d0\u05dc \u05d0\u05dc\u05d5\u05df 68 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.792371,32.062755]}},{"type":"Feature","properties":{"parkingid":"40","name":"\u05e8\u05d1\u05e0\u05d9\u05e6\u05e7\u05d9 6 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.789841,32.066131]}},{"type":"Feature","properties":{"parkingid":"41","name":"\u05e8\u05d5\u05e7\u05d7 7 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.779051,32.098518]}},{"type":"Feature","properties":{"parkingid":"42","name":"\u05d4\u05e0\u05de\u05dc 1 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.772525,32.094321]}},{"type":"Feature","properties":{"parkingid":"44","name":"\u05d4\u05de\u05e8\u05d3 36 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.764489,32.064856]}},{"type":"Feature","properties":{"parkingid":"45","name":"\u05e4\u05e8\u05d9\u05e9\u05de\u05df 28 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.771788,32.079788]}},{"type":"Feature","properties":{"parkingid":"46","name":"\u05e7\u05d5\u05d9\u05e4\u05de\u05df 16 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.76351,32.062892]}},{"type":"Feature","properties":{"parkingid":"48","name":"\u05e7\u05dc\u05e6`\u05e7\u05d9\u05df 25 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.806806,32.117482]}},{"type":"Feature","properties":{"parkingid":"49","name":"\u05d1\u05df \u05d9\u05e9\u05d9 1 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.802123,32.106943]}},{"type":"Feature","properties":{"parkingid":"50","name":"\u05d2`\u05d5\u05e8\u05d2` \u05d5\u05d9\u05d9\u05d6 \u05e4\u05d9\u05e0\u05ea \u05d7\u05d9\u05d9\u05dd \u05dc\u05d1\u05e0\u05d5\u05df \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5 (\u05de\u05ea\u05d7\u05dd \u05d0\u05d5\u05e0` 493)"},"geometry":{"type":"Point","coordinates":[34.8034,32.110587]}},{"type":"Feature","properties":{"parkingid":"51","name":"\u05dc\u05d1\u05e0\u05d5\u05df \u05d7\u05d9\u05d9\u05dd 70 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.801726,32.114594]}},{"type":"Feature","properties":{"parkingid":"52","name":"\u05e7\u05dc\u05e6`\u05e7\u05d9\u05df 6 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.803497,32.117284]}},{"type":"Feature","properties":{"parkingid":"53","name":"\u05e7\u05dc\u05e6`\u05e7\u05d9\u05df 4 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.803486,32.116939]}},{"type":"Feature","properties":{"parkingid":"54","name":"\u05d9\u05d4\u05d5\u05d3\u05d4 \u05d4\u05d9\u05de\u05d9\u05ea 21 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.756944,32.051098]}},{"type":"Feature","properties":{"parkingid":"55","name":"\u05d4\u05d1\u05e2\u05e9\\"\u05d8 \u05e4\u05d9\u05e0\u05ea \u05d9\u05e4\u05ea 171 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.754224,32.037859]}},{"type":"Feature","properties":{"parkingid":"56","name":"\u05e7\u05d1\u05d5\u05e5 \u05d2\u05dc\u05d5\u05d9\u05d5\u05ea 36 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.76895,32.051523]}},{"type":"Feature","properties":{"parkingid":"57","name":"\u05d4\u05e8\u05d1 \u05e7\u05d5\u05e7 \u05e4\u05d9\u05e0\u05ea \u05d4\u05d0\u05e8\u05d9 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.767866,32.070747]}},{"type":"Feature","properties":{"parkingid":"58","name":"\u05e7\u05d5\u05de\u05de\u05d9\u05d5\u05ea 24 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.805321,32.119283]}},{"type":"Feature","properties":{"parkingid":"59","name":"\u05dc\u05d1\u05d5\u05df \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.77131,32.046633]}},{"type":"Feature","properties":{"parkingid":"60","name":"\u05d1\u05e0\u05d9\u05de\u05d9\u05df \u05de\u05d8\u05d5\u05d3\u05dc\u05d4 16 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.827325,32.109896]}},{"type":"Feature","properties":{"parkingid":"62","name":"\u05de\u05e9\u05d4 \u05e1\u05e0\u05d4 54 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.824793,32.124453]}},{"type":"Feature","properties":{"parkingid":"63","name":"\u05e9\u05d5\u05e9\u05e0\u05d4 \u05e4\u05e8\u05e1\u05d9\u05e5 9 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.795611,32.132185]}},{"type":"Feature","properties":{"parkingid":"64","name":"\u05d0\u05d7\u05d9\u05de\u05d0\u05d9\u05e8 \u05d0\u05d1\u05d0 28 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.803765,32.12449]}},{"type":"Feature","properties":{"parkingid":"65","name":"\u05e8\u05de\u05ea \u05d0\u05d1\u05d9\u05d1 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.797091,32.107188]}},{"type":"Feature","properties":{"parkingid":"67","name":"\u05e6\u05d1\u05d9 \u05e0\u05e9\u05e8\u05d9 2 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.800825,32.054317]}},{"type":"Feature","properties":{"parkingid":"68","name":"\u05e8\u05e4\u05d9\u05d3\u05d9\u05dd 7 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.813721,32.109024]}},{"type":"Feature","properties":{"parkingid":"69","name":"\u05e9\u05dc\u05d5\u05e0\u05e1\u05e7\u05d9 16 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.818903,32.117961]}},{"type":"Feature","properties":{"parkingid":"70","name":"\u05de\u05d1\u05e6\u05e2 \u05e7\u05d3\u05e9 \u05e4\u05d9\u05e0\u05ea \u05d1\u05e0\u05d9 \u05d0\u05e4\u05e8\u05d9\u05dd 220 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.817187,32.114658]}},{"type":"Feature","properties":{"parkingid":"72","name":"\u05e2\u05e7\u05d9\u05d1\u05d4 \u05d0\u05e8\u05d9\u05d4 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.791813,32.090601]}},{"type":"Feature","properties":{"parkingid":"73","name":"\u05d0\u05dc\u05e4\u05e1\u05d9 \u05d9\u05e6\u05d7\u05e7 12 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.766514,32.053281]}},{"type":"Feature","properties":{"parkingid":"74","name":"\u05d0\u05dc\u05d9\u05d4\u05d5 \u05e1\u05e4\u05d9\u05e8 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.777243,32.07552]}},{"type":"Feature","properties":{"parkingid":"75","name":"\u05e4\u05dc\u05d9\u05d8\u05d9 \u05d4\u05e1\u05e4\u05e8 \u05e4\u05d9\u05e0\u05ea \u05d3\u05dd \u05d4\u05de\u05db\u05d1\u05d9\u05dd \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.80042,32.069502]}},{"type":"Feature","properties":{"parkingid":"76","name":"\u05d9\u05d2\u05d0\u05dc \u05d0\u05dc\u05d5\u05df \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.797102,32.07752]}},{"type":"Feature","properties":{"parkingid":"77","name":"\u05d4\u05de\u05e2\u05e8\u05db\u05d4 10 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.793326,32.061592]}},{"type":"Feature","properties":{"parkingid":"78","name":"\u05d4\u05e9\u05dc\u05d5\u05dd 120 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.807863,32.059382]}},{"type":"Feature","properties":{"parkingid":"79","name":"\u05e1\u05de\u05d8\u05ea \u05d8\u05d0\u05d2\u05d5\u05e8 38 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.796426,32.116439]}},{"type":"Feature","properties":{"parkingid":"80","name":"\u05e8\u05d1\u05d9\u05e0\u05d5 \u05d9\u05e8\u05d5\u05d7\u05dd 12 \u05e4\u05d9\u05e0\u05ea \u05d7\u05d1\u05e8 \u05d4\u05dc\u05d0\u05d5\u05de\u05d9\u05dd 5 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.762786,32.048157]}},{"type":"Feature","properties":{"parkingid":"81","name":"\u05e2\u05d9\u05e8 \u05e9\u05de\u05e9 40 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.827411,32.124526]}},{"type":"Feature","properties":{"parkingid":"84","name":"\u05d1\u05e7\u05e8 \u05d0\u05d4\u05e8\u05d5\u05df 18 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.817895,32.122209]}},{"type":"Feature","properties":{"parkingid":"85","name":"\u05d1\u05d9\u05ea \u05e6\u05d5\u05e8\u05d9 20 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.801104,32.122809]}},{"type":"Feature","properties":{"parkingid":"86","name":"\u05d1\u05df \u05d9\u05d5\u05e1\u05e3 22 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.798132,32.125775]}},{"type":"Feature","properties":{"parkingid":"87","name":"\u05d1\u05e8\u05d6\u05e0\u05d9 \u05de\u05e9\u05d4 15 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.798304,32.12797]}},{"type":"Feature","properties":{"parkingid":"88","name":"\u05d1\u05df \u05d9\u05d5\u05e1\u05e3 15 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.798014,32.125426]}},{"type":"Feature","properties":{"parkingid":"89","name":"\u05d4\u05d8\u05d9\u05d9\u05e1\u05d9\u05dd 39 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.806249,32.056804]}},{"type":"Feature","properties":{"parkingid":"90","name":"\u05e9\u05d5\u05e9\u05e0\u05d4 \u05e4\u05e8\u05e1\u05d9\u05e5 9 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.797231,32.136328]}},{"type":"Feature","properties":{"parkingid":"91","name":"\u05e9\u05d5\u05e9\u05e0\u05d4 \u05e4\u05e8\u05e1\u05d9\u05e5 9 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.796298,32.133848]}},{"type":"Feature","properties":{"parkingid":"92","name":"\u05d4\u05e8\u05db\u05d1\u05ea 20 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.777804,32.063402]}},{"type":"Feature","properties":{"parkingid":"93","name":"\u05d4\u05e8\u05db\u05d1\u05ea 3 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.777047,32.063837]}},{"type":"Feature","properties":{"parkingid":"94","name":"\u05d4\u05d5\u05d1\u05e8\u05de\u05df 1 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.779958,32.071956]}},{"type":"Feature","properties":{"parkingid":"95","name":"\u05d2`\u05d5\u05e8\u05d2` \u05d5\u05d9\u05d9\u05d6 16 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.803615,32.109583]}},{"type":"Feature","properties":{"parkingid":"96","name":"\u05d2`\u05d5\u05e8\u05d2` \u05d5\u05d9\u05d9\u05d6 16 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.803548,32.109555]}},{"type":"Feature","properties":{"parkingid":"98","name":"\u05e8\u05d5\u05e7\u05d7 80 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.795278,32.100099]}},{"type":"Feature","properties":{"parkingid":"99","name":"\u05e8\u05d5\u05e7\u05d7 94 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.813818,32.105543]}},{"type":"Feature","properties":{"parkingid":"108","name":"\u05e9\u05d1\u05d8 \u05d1\u05e0\u05d9\u05de\u05d9\u05df 1 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.80326,32.108769]}},{"type":"Feature","properties":{"parkingid":"114","name":"\u05e1\u05de\u05d8\u05ea \u05d4\u05db\u05e8\u05de\u05dc 12 \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 "},"geometry":{"type":"Point","coordinates":[34.765559,32.068059]}},{"type":"Feature","properties":{"parkingid":"116","name":"\u05d4\u05d7\u05e8\u05e9 4 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5 "},"geometry":{"type":"Point","coordinates":[34.7836258,32.0555125]}},{"type":"Feature","properties":{"parkingid":"119","name":"\u05dc\u05e1\u05e7\u05d5\u05d1 28 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.783739,32.073074]}},{"type":"Feature","properties":{"parkingid":"120","name":"\u05e4\u05d9\u05e0\u05e1 41 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.767972,32.060298]}},{"type":"Feature","properties":{"parkingid":"121","name":"\u05e7\u05dc\u05d5\u05d6\u05e0\u05e8 12 \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 - \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.807553,32.114439]}},{"type":"Feature","properties":{"parkingid":"122","name":"\u05d6`\u05d1\u05d5\u05d8\u05d9\u05e0\u05e1\u05e7\u05d9 62 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.779996,32.088487]}},{"type":"Feature","properties":{"parkingid":"123","name":"\u05d0\u05e8\u05dc\u05d5\u05d6\u05d5\u05e8\u05d5\u05d1 17 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.7737,32.0873]}},{"type":"Feature","properties":{"parkingid":"124","name":"\u05d2\u05d5\u05dc\u05d3\u05de\u05df \u05e0\u05d7\u05d5\u05dd 2\u05d1 \u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5"},"geometry":{"type":"Point","coordinates":[34.758105,32.057918]}},{"type":"Feature","properties":{"parkingid":"125","name":"\u05d0\u05d9\u05d9\u05d6\u05d9\u05e7 \u05e8\u05de\u05d1\u05d4 2"},"geometry":{"type":"Point","coordinates":[34.805648,32.103663]}}]}')},56:function(e,t,r){e.exports=r(101)},61:function(e,t,r){},62:function(e,t,r){},64:function(e,t,r){},96:function(e,t,r){},97:function(e,t,r){}},[[56,1,2]]]);
//# sourceMappingURL=main.85d23059.chunk.js.map
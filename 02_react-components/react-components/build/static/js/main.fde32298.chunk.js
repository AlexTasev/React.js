(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,s){e.exports=s(19)},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(7),c=s.n(r),u=(s(14),s(1)),o=s(2),i=s(4),l=s(3),h=s(5),m=(s(15),s(16),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"streets",onMouseEnter:function(){return e.props.selectStreet(e.props)}},a.a.createElement("p",{className:"street-info"},this.props.location))}}]),t}(n.Component)),d=(s(17),function(e){return a.a.createElement("div",{className:"hosue",onMouseEnter:function(){return e.selectHouse(e.id)}},a.a.createElement("img",{src:e.imageUrl,alt:"house"}))}),f=(s(18),function(e){return a.a.createElement("div",{className:"houseDetails"},a.a.createElement("div",{className:"image"},a.a.createElement("img",{src:e.house.imageUrl,alt:"house"})),a.a.createElement("p",null,"Description: ",e.house.description),a.a.createElement("p",null,"Price: ",e.house.price))}),p=function(e){function t(e){var s;return Object(u.a)(this,t),(s=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={streets:[],selectedStreetIdx:0,selectedHouseIdx:0,hasFetched:!1},s}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:9999/feed/street/all").then(function(e){return e.json()}).then(function(t){return e.setState({streets:t.streets,hasFetched:!0})})}},{key:"getStreets",value:function(){return this.state.streets}},{key:"getSelectedHouses",value:function(){return this.state.hasFetched?this.state.streets[this.state.selectedStreetIdx].homes:[]}},{key:"setCurrentStreet",value:function(e){this.setState({selectedStreetIdx:e})}},{key:"setCurrentHouse",value:function(e){this.setState({selectedHouseIdx:e})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"streets"},a.a.createElement("h2",null,"Streets"),this.getStreets().map(function(t,s){return a.a.createElement(m,{selectStreet:function(){return e.setCurrentStreet(s)},location:t.location,key:s,id:s})})),a.a.createElement("div",{className:"houses"},a.a.createElement("h2",null,"Houses"),this.getSelectedHouses()?this.getSelectedHouses().map(function(t,s){return a.a.createElement(d,{selectHouse:function(t){return e.setCurrentHouse(s,t)},imageUrl:t.imageUrl,key:s,id:s})}):""),a.a.createElement("div",{className:"houses"},a.a.createElement("h2",null,"Details"),this.state.hasFetched?a.a.createElement(f,{house:this.getSelectedHouses()[this.state.selectedHouseIdx]}):""))}}]),t}(n.Component);c.a.render(a.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.fde32298.chunk.js.map
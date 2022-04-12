/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello World");
};

let pronom = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dominio = [".com", ".net", ".us", ".io", ".uk", ".es"];

function domain(pronom, adj, noun, dominio) {
  for (let a = 0; a < pronom.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < dominio.length; d++) {
          console.log("www." + pronom[a] + adj[b] + noun[c] + dominio[d]);
        }
      }
    }
  }
}
domain(pronom, adj, noun, dominio);

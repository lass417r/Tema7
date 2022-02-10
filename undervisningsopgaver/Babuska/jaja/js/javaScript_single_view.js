"use strict";

const url = "https://babushka-dd8a.restdb.io/rest/menu/";
const key = "600ec2fb1346a1524ff12de4";
const options = {
  headers: {
    "x-apikey": key,
  },
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let retter;
let ret;
let number = 0;

document.addEventListener("DOMContentLoaded", loadJSON);

async function loadJSON() {
  const JSONData = await fetch(url + id, options);
  ret = await JSONData.json();
  // console.log(ret);
  visMad(ret);
  loadJSONRetter();
}

function visMad(ret) {
  document.querySelector(".navn").textContent = ret.navn;
  document.querySelector(".billede").src =
    "medium/" + ret.billednavn + "-md.jpg";
  document.querySelector(".kategori").textContent = ret.kategori;
  document.querySelector(".langbeskrivelse").textContent = ret.langbeskrivelse;
  document.querySelector(".oprindelsesregion").textContent =
    ret.oprindelsesregion;
  document.querySelector(".pris").textContent = ret.pris + " kr.-";
  document.querySelector("button").addEventListener("click", () => {
    window.history.back();
  });
}

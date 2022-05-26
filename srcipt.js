var i = 1;
function fun() {
  if (document.getElementById("start").innerHTML == "Start") {
    document.getElementById("start").innerHTML == "Stop";
    start();
  } else if (document.getElementById("start").innerHTML == "Stop") {
    forceStop();
  }

  async function start() {
    document.getElementById("start").innerHTML = "Stop";
    var data1 = await colorMatch("yellow");
    var data2 = await colorMatch("lightgreen");
    var data3 = await colorMatch("red");

    if (data1 == true && data2 == true && data3 == true) {
      await stop();
    }
  }

  async function colorMatch(color) {
    let string = color;
    let result = await colorBox(color);
    if (result == string) {
      return true;
    }
  }

  async function colorBox(id) {
    let promise = new Promise(function (resolve, reject) {
      interval = setInterval(() => {
        document.getElementById(id).innerHTML = i;
        i++;
      }, 1000);

      timeout = setTimeout(() => {
        clearInterval(interval);
        resolve(id);
      }, 5000);
    });
    return promise;
  }

  function stop(data) {
    let promise = new Promise(function (resolve, reject) {
      document.getElementById("start").innerHTML = "Start";
      document.getElementById("yellow").innerHTML = "0";
      document.getElementById("lightgreen").innerHTML = "0";
      document.getElementById("red").innerHTML = "0";

      i = 1;
      resolve("stop");
    });

    return promise;
  }

  function forceStop() {
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("yellow").innerHTML = "0";
    document.getElementById("lightgreen").innerHTML = "0";
    document.getElementById("red").innerHTML = "0";

    clearInterval(interval);
    clearTimeout(timeout);
    i = 1;
  }
}

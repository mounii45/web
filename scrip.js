let p1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Initialising Hack program...");
      }, 1700)
    })
  }
  let p2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hacking hemanth username...");
      }, 3000)
    })
  }
  let p3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Username found hemanth_rasamsetty...");
      }, 4500)
    })
  }
  let p4 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("connecting to instagram...");
      }, 6000)
    })
  }
  let p5 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("connecting to server 1...");
      }, 7500)
    })
  }
  
  const main = async () => {
    let x = document.getElementById("hack");
    let a1 = await p1();
    x.innerHTML = a1+"<br>";
    let a2 = await p2();
    x.innerHTML = a2+"<br>";
    let a3 = await p3();
    x.innerHTML = a3+"<br>";
    let a4 = await p4();
    x.innerHTML = a4+"<br>";
    let a5 = await p5();
    x.innerHTML = a5;
    
  }
  main();
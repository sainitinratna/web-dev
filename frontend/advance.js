function fetchdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello yall");
    }, 3000);
  });
}

function fetchnotes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello all");
    }, 3000);
  });
}

async function getglobal() {
  try {
    console.log("fetching data");
    const [data, notes] = await Promise.all([fetchdata(), fetchnotes()]);
    console.log(data);  // hello yall
    console.log(notes); // hello all
  } catch (error) {
    console.log("error fetching the data");
  }
}

getglobal();

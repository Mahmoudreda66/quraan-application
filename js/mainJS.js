fetch('https://api.quran.com/api/v4/chapters')
  .then(response => response.json())
  .then(data => {
    const chapters = data.chapters;
    for (let i = 0; i < chapters.length; i++) {
      let list = document.querySelector(".main_list ul"); // Select the parent <ul> element
      list.innerHTML +=  "<li><a href="+ chapters[i].id +" >" +chapters[i].name_arabic+ "</a></li>";
  
  
     
  }
    
  })
  .catch(error => console.error(error));

  fetch("https://api.quran.com/api/v4/quran/verses/uthmani")
  .then((response) => response.json())
  .then((data) => {
    // Get verses
    const verses = data.verses;

   
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


 
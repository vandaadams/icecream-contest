// const getWinner = () => {
//   const users = ['Anita Kocsis', 'Bernadett Bujdosó', 'Anita Takácsné Kiss', 'Lilla Pál-Katona', 'Kriszta Jelenné Gyulai', 'Drimbáné Kecskeméti Adrienn', 'Kis Jozsefné', 'Zoltánné Farkas', 'Józsefné Székely', 'Angéla Törökné', 'Katalin Kissné Nagy', 'Kiss Niki', 'Havrilla Zsuzsanna', 'Erzsébet Lázár', 'Katalin Murvai', 'Szálkainé Szilágyi Zsanett', 'Zoltánné Guth', 'Dienes Ivett', 'Tóth Erika Péterné', 'Bogi Novotni', 'Margit Som', 'Viktória Faragó', 'Mányi Hajnalka', 'Éles-Gáll Marianna', 'Gabriella Birkner', 'Kitti Szabó', 'Kokas-Vincze Zsuzsa', 'Sándor Kokas', 'Bea Lencses', 'Erika Konczné', 'Kovács Jánosné', 'Erika Vizi', 'Deim Attiláné', 'Diána Nagy', 'Attila Takács', 'Alexandra Ambrus', 'Józsefné Székely', 'Klepács Kitti', 'Horváth Sándorné', 'Kabályné Kovács Csilla', 'Kabályné Kovács Csilla', 'Erika Boldisné', 'Emese Koncz', 'Angéla Török', 'Ajtai Ádám', 'Szabó Annamária', 'Éva Egriné', 'Zara Ildikó', 'Sarádiné Eti', 'Havrilla Ildikó', 'Babi Szabó Aranka', 'Andrea Nagy', 'Anikó Pappné Major', 'Mária Szabó', 'Marcsi Vesszos', 'Cintia Sós', 'Anita Szücsi', 'Zsólyominé Szilágyi Renáta', 'Noemi Rezmuves', 'Szilágyi Szimonetta Petronella', 'Erdeiné Sarkadi Ágnes', 'Tünde Osán Novotniné', 'Zsolt Rigó', 'Havrilláné Sarádi Enikő', 'Tímea Tapoti', 'Istvánné Harsányi', 'Nóra Rigóné Varga', 'Melinda Szabó', 'Józsefné Patka', 'Hajnalka Besenyei', 'Aranka Havrilla', 'Mònika Orosz', 'Osvald Károly', 'Imréné Szabó', 'Kerek Hajnalka', 'Kertész Katalin', 'Istvánné Szabó', 'Sándorné Széles', 'Tímea Tapoti', 'Barna Kovacs', 'Erdei Tiborné Gyöngyike', 'Henrietta Engler', 'Lajos Kovács', 'Lajos Kovács', 'Anikó Baginé Ilyés'];
//   const randomElement = users[Math.floor(Math.random() * users.length)];
//   // console.log(randomElement);
//   const winner = document.querySelector('h3');
//   winner.innerHTML = `${randomElement}`;
// }

//setTimeout(() => {  getWinner(); }, 1000);

const randomizer = () => {
  let counter = 0;
  const winner = document.querySelector('h3');
  const users = ['Anita Kocsis', 'Bernadett Bujdosó', 'Anita Takácsné Kiss', 'Lilla Pál-Katona', 'Kriszta Jelenné Gyulai', 'Drimbáné Kecskeméti Adrienn', 'Kis Jozsefné', 'Zoltánné Farkas', 'Józsefné Székely', 'Angéla Törökné', 'Katalin Kissné Nagy', 'Kiss Niki', 'Havrilla Zsuzsanna', 'Erzsébet Lázár', 'Katalin Murvai', 'Szálkainé Szilágyi Zsanett', 'Zoltánné Guth', 'Dienes Ivett', 'Tóth Erika Péterné', 'Bogi Novotni', 'Margit Som', 'Viktória Faragó', 'Mányi Hajnalka', 'Éles-Gáll Marianna', 'Gabriella Birkner', 'Kitti Szabó', 'Kokas-Vincze Zsuzsa', 'Sándor Kokas', 'Bea Lencses', 'Erika Konczné', 'Kovács Jánosné', 'Erika Vizi', 'Deim Attiláné', 'Diána Nagy', 'Attila Takács', 'Alexandra Ambrus', 'Józsefné Székely', 'Klepács Kitti', 'Horváth Sándorné', 'Kabályné Kovács Csilla', 'Kabályné Kovács Csilla', 'Erika Boldisné', 'Emese Koncz', 'Angéla Török', 'Ajtai Ádám', 'Szabó Annamária', 'Éva Egriné', 'Zara Ildikó', 'Sarádiné Eti', 'Havrilla Ildikó', 'Babi Szabó Aranka', 'Andrea Nagy', 'Anikó Pappné Major', 'Mária Szabó', 'Marcsi Vesszos', 'Cintia Sós', 'Anita Szücsi', 'Zsólyominé Szilágyi Renáta', 'Noemi Rezmuves', 'Szilágyi Szimonetta Petronella', 'Erdeiné Sarkadi Ágnes', 'Tünde Osán Novotniné', 'Zsolt Rigó', 'Havrilláné Sarádi Enikő', 'Tímea Tapoti', 'Istvánné Harsányi', 'Nóra Rigóné Varga', 'Melinda Szabó', 'Józsefné Patka', 'Hajnalka Besenyei', 'Aranka Havrilla', 'Mònika Orosz', 'Osvald Károly', 'Imréné Szabó', 'Kerek Hajnalka', 'Kertész Katalin', 'Istvánné Szabó', 'Sándorné Széles', 'Tímea Tapoti', 'Barna Kovacs', 'Erdei Tiborné Gyöngyike', 'Henrietta Engler', 'Lajos Kovács', 'Lajos Kovács', 'Anikó Baginé Ilyés', 'Beatrix Pántyáné Balogh', 'Kincso Balaton', 'Kovács Katalin', 'Barna Kovacs', 'Boglárka Bagi'];
  console.log(users.length);
  const rand = Math.floor(Math.random() * users.length);
  console.log(rand);
  const change = () => {
    if (counter < rand) {
      winner.innerHTML = users[counter];
      counter++;
    }
  }
  setInterval(change, 100);
}

randomizer();

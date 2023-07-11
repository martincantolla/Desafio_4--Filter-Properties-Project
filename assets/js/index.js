const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

//-----------------------------------------------------------------

let rooms, minMetros, maxMetros
const boton = document.getElementById("boton")
const btnTodas = document.getElementById("todas")
let count = document.getElementById("count")
let listaPropiedades = document.getElementById("propiedades")
let filteredPropiedades = [];

//-----------------------------------------------------------------

boton.addEventListener("click", () => {

  listaPropiedades.innerHTML = "";

  console.log(propiedadesJSON);
  rooms = document.getElementById("rooms").value
  minMetros = document.getElementById("minMetros").value
  maxMetros = document.getElementById("maxMetros").value

  if (rooms === "" || minMetros === "" || maxMetros === "") {
    alert("faltan campos por llenar!");
  }
  else {
    mostrarPropiedades(propiedadesJSON);
  }
  console.log(rooms, minMetros, maxMetros);
}
)

function mostrarPropiedades(propiedadesJSON) {


  filteredPropiedades = propiedadesJSON.filter((propiedad) => {
    return (
      propiedad.rooms == rooms &&
      propiedad.m >= minMetros &&
      propiedad.m <= maxMetros
    );
  });
  console.log(filteredPropiedades);
  count.innerHTML = `${filteredPropiedades.length}`;

    for(let propiedad of filteredPropiedades){
      const newCard = document.createElement("div") //esto crea un nuevo elemento en el DOM
      newCard.classList.add("item") //crea una clase pa poder llamarla en CSS 
      newCard.innerHTML = `
                <div class="propiedad">
                <div class="img" style="background-image: url(${propiedad.src})"></div>
                <section>
                    <h5>${propiedad.name}</h5>
                    <div class="d-flex justify-content-between">
                    <p>Cuartos: ${propiedad.rooms}</p>
                    <p>Metros: ${propiedad.m}</p>
                    </div>
                    <p class="my-3">${propiedad.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
                </div>
        `;
      listaPropiedades.appendChild(newCard) // agrega un elemento a la lista de propiedades 
    }
}

btnTodas.addEventListener("click", () => {
    listaPropiedades.innerHTML = "";
    mostrarTodasPropiedades(propiedadesJSON);
    console.log(propiedadesJSON)
}
)

function mostrarTodasPropiedades(propiedadesJSON){
  console.log(propiedadesJSON);

  for (let propiedad of propiedadesJSON){
    const newCard = document.createElement("div") //esto crea un nuevo elemento en el DOM
      newCard.classList.add("item") //crea una clase pa poder llamarla en CSS 
      newCard.innerHTML = `
                <div class="propiedad">
                <div class="img" style="background-image: url(${propiedad.src})"></div>
                <section>
                    <h5>${propiedad.name}</h5>
                    <div class="d-flex justify-content-between">
                    <p>Cuartos: ${propiedad.rooms}</p>
                    <p>Metros: ${propiedad.m}</p>
                    </div>
                    <p class="my-3">${propiedad.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
                </div>
        `;
      listaPropiedades.appendChild(newCard) // agrega un elemento a la lista de propiedades 
      count.innerHTML = `${propiedadesJSON.length}`;
  }
}
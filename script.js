function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute('src', './assets/assets/avatar.png')
    img.setAttribute('alt', 'luã com camisa social e gravata')
  } else {
    html.classList.add("light")
    img.setAttribute('src', './assets/assets/avatar-light.png')
    img.setAttribute("alt", "luã sorrindo de bone")
  }

  //pegar a tag img//
   
  /* Esses condicionais poderiam ser substituídos por 
  html.classList.toogle('light') */

  //se tiver ligth mode, adicionar a imagem light//
  //se tiver sem ligth mode, manter a imagem normal//
  //substituir a imagem//
}
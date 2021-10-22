const LinksSocialMedia = { //Quando precisar alterar as informações do crachá, só precisa fazer isso aqui
    github: 'Juulds',
    youtube: 'jakelinygracielly',
    facebook: 'xJLDSx',
    instagram: 'julianalds25',
    twitter: 'Julianalds25'
}

    function changeSocialMediaLinks() {
        for (let li of socialLinks.children) { //vai percorrer o li em busca dos filhos
            const social = li.getAttribute('class') //social vai receber a iteração, vai guardar o conteúdo da classe

            li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
      //vai pegar o primeiro filho do li, que no caso será o conteúde de "a href"
      //alert(li.children[0].href)
    }
  }
  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
      const url = `https://api.github.com/users/${LinksSocialMedia.github}`

      fetch(url)
      .then(response => response.json())
      .then(data => {
          userName.textContent = data.name
          userBio.textContent = data.bio
          userLink.href = data.html_url
          userImage.src = data.avatar_url
          userLogin.textContent = data.login
         
    })
  }
  getGitHubProfileInfos()
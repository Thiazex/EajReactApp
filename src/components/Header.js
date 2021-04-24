function Header(){
    return(
        <header>
             <nav class="navbar navbar-expand-lg navbar-dark cor">
            <div class="container">
              <a class="navbar-brand" href="#">TADS - UFRN</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto ">
    
                 
                  <li class="nav-item active ">
                    <a class="navbar-brand" href="apresentacao.html">Apresentação </a>
                  </li>
                  <li class="nav-item active">
                    <a class="navbar-brand " href="calendario.html">Calendário</a>
                  </li>
                  <li class="nav-item active">
                    <a class="navbar-brand" href="noticias.html">Notícias</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
         </header>
    )
}

export default Header;
<template>
      <nav
    class="navbar navbar-dark navbar-expand-lg sticky-top"
    style="background-color: #8409DE;"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">QA</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Anasayfa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/categories">Kategoriler</a>
          </li>
        </ul>

        <div class="d-flex me-auto">
          <input
            class="form-control searchBox"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>


        <div>
          <a v-if="isAuthenticated" href="login" class="btn btn-outline-warning me-0 mb-2">Giriş Yap</a>
          <a v-else href="register" class="btn btn-outline-warning me-0 mb-2">Kayıt Ol</a>
        </div>

        <ul class="navbar-nav me-0 mb-2 mb-lg-0">
          <li class="nav-item dropdown show">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-expanded="false">Defne Kandemir</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="my-questions">Sorularım</a>
                <a class="dropdown-item" href="favorites">Favorilerim</a>
              </li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="my-account">Hesabım</a></li>
              <li>
                <a class="dropdown-item" href="/">Çıkış Yap</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from "vuex";

  export default {
    data(){
      return{
      }
    },
    computed: {
      ...mapGetters({
        isAuthenticated: "_authenticationStatus",
      }),
    }
  }
</script>
<template>
  <div>
    <div class="container loginPage">
      <div class="row">
        <div class="col-4 offset-4">
          <div class="card">
            <div class="card-header text-center">Giriş Yap</div>
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">E-posta adresi</label>
                <input type="email" class="form-control" placeholder="info@kablosuzkedi.com" />
              </div>
              <div class="mb-3">
                <label class="form-label">Şifre</label>
                <input type="password" class="form-control" />
              </div>
              <div class="mb-3 d-flex justify-content-end align-items-center">
                <button class="btn btn-sm btn-primary">Giriş Yap</button>
              </div>
            </div>
            <div class="card-footer text-center">
              <a href="register" class="p-0 m-0 btn btn-link text-primary">Üye değilim</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {

  }
}
</script>
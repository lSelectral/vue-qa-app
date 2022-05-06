<template>
  <div class="container loginPage">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="card">
          <div class="card-header text-center">Kayıt Ol</div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Ad Soyad</label>
              <input type="text" class="form-control" placeholder="Defne Kandemir" required/>
            </div>
            <div class="mb-3">
              <label class="form-label">E-posta adresi</label>
              <input type="email" class="form-control" placeholder="info@kablosuzkedi.com" required/>
            </div>
            <div class="mb-3">
              <label class="form-label">Şifre</label>
              <input type="password" class="form-control" required/>
            </div>
            <div class="mb-3">
              <label class="form-label">İlgi Duyduğunuz Kategori</label>
              <select class="form-select" required>
                <option disabled selected>Lütfen bir kategori seçiniz</option>
                <option>
                  Kategori Adı
                </option>
              </select>
            </div>
            <div class="mb-3 d-flex justify-content-end align-items-center">
              <button class="btn btn-sm btn-primary">Kayıt Ol</button>
            </div>
          </div>
          <div class="card-footer text-center">
            <a href="login" class="p-0 m-0 btn btn-link text-primary">Zaten üyeyim</a>
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
    }
  }
</script>
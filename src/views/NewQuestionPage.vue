<template>
  <NavBar/>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8 offset-2">
        <div class="card">
          <div class="card-header">
            Yeni Soru
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="question-title" class="form-label"
              >Kısa bir başlık</label
              >
              <input type="text" class="form-control" id="question-title" placeholder="Bu soru çokomelli" />
            </div>
            <div class="mb-3">
              <label class="form-label">Detaylar</label>
              Editör Alanı
            </div>
            <div class="mb-3">
              <label for="question-category" class="form-label">Kategori</label>
              <select id="question-category" class="form-select">
                <option>
                  Kategori Adı
                </option>
              </select>
            </div>
          </div>

          <div class="card-footer text-muted d-flex justify-content-end align-items-center">
            <button class="btn btn-sm btn-primary">Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  export default {
    components: {NavBar},
    data(){
      return{

      }
    },
    methods: {

    }
  }
</script>
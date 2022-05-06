<template>
  <NavBar/>
  <div class="container question-detail-page">
    <div class="row mt-3">
      <div class="col-10 offset-1">
        <div class="card text-left mb-3">
          <div class="card-body">
            <div
                class="d-flex justify-content-between align-items-center w-100"
            >
              <h3 class="card-title">Soru Başlığı</h3>
              <span>
                  <a href="#" class="btn btn-link text-primary pe-0">
                    <i class="fa fa-edit"></i> Düzenle
                  </a>
                </span>
            </div>
            <div class="mt-3">
              <div class="form-group mb-3">
                Editör Burada olacak..
                <div class="button-action-container mt-2 d-flex justify-content-end align-items-center">
                  <button class="btn btn-sm btn-secondary me-1">İptal</button>
                  <button class="btn btn-sm btn-primary">Düzenle</button>
                </div>
              </div>

              <p class="text-muted">Soru Detayları...</p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="custom-text-light">
                  <i class="fa fa-user-circle me-1"></i>
                  Gökhan 1 ay önce cevapladı.
                </div>
                <div class="custom-text-light">
                  Kategori Adı
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer text-muted py-3 question-footer flex-column d-flex justify-content-between align-items-center w-100">
            <!-- CEVAPLAR-->
            <!-- Cevap Yaz Bölümü -->
            <div class="answerArea w-100 mb-3">
              <div class="form-group w-100 mb-1">
                Editör Alanı
              </div>
              <div class="d-flex justify-content-end align-items-center">
                <button class="btn btn-primary btn-sm">Gönder</button>
              </div>
            </div>
            <!-- /Cevap Yaz Bölümü -->

            <div class="card text-left mb-3 ms-1 w-100">
              <div class="card-body">
                <div class="mt-3">
                  <p class="text-muted"> Comment Detayları</p>
                </div>
              </div>
              <div
                  class="card-footer text-muted py-2 question-footer d-flex justify-content-between align-items-center"
              >
                <div class="custom-text-light">
                  <i class="fa fa-user-circle me-1"></i>
                  1 ay önce cevapladı
                </div>
                <div class="question-action-container">
                  <a href="#" class="like-btn text-muted me-2"><i class="fa fa-thumbs-up text-success"></i>(4)</a>
                  <a href="#" class="dislike-btn text-muted">
                    <i class="fa fa-thumbs-down"></i> (4)
                  </a>
                </div>
              </div>
            </div>

            <div class="alert alert-primary w-100" role="alert">
              Bu Soruya ait bir cevap bulunamadı.
            </div>
            <!-- !CEVAPLAR-->
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
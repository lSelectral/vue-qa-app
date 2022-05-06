<template>
    <div>
        <div class="card text-left mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title">{{ question.title }}</h5>
              <span>
                <i class="fa fa-heart" :class="question.isFavorited ? 'text-primary' : ''" ></i>
              </span>
            </div>
            <div class="mt-3">
              <p class="text-muted">{{ question.description }}</p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="custom-text-light">
                  <i class="fa fa-user-circle me-1"></i>
                  {{ question.user }} {{ question.askDate }}'de sordu
                </div>
                <div class="custom-text-light">
                  {{ question.category }}
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer text-muted py-3 question-footer d-flex justify-content-between align-items-center">
            <div>
              <span class="comment-container">
                <i class="custom-text-light fa fa-user-circle me-1"></i>
                <small class="text-dark">{{ question.answers.length }} </small>
              </span>
              <span class="custom-seperator"> | </span>
              <small class="custom-text-light">
                1 ay önce cevaplandı
              </small>
            </div>
            <button class="btn-sm btn btn-primary">Soruyu görüntüle</button>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    props: {
      question: Object
    },
    data(){
      return{

      }
    },
    methods: {

    }
  }
</script>
<template>
  <div class="col-2">
    <div class="d-grid gap-2 mb-3">
      <router-link class="d-grid gap-2" to="new-question">
        <button class="btn btn-primary d-flex justify-content-between align-items-center">
          <span>Soru Sor</span>
          <i class="fa fa-edit"></i>
        </button>
      </router-link>
    </div>
    <div class="d-grid gap-2 mb-3">
      <router-link class="d-grid gap-2" to="/question?userID=1">
        <button class="btn btn-primary d-flex justify-content-between align-items-center">
          <span>Benim Sorularım</span>
          <i class="fa fa-question-circle"></i>
        </button>
      </router-link>
    </div>
    <div class="list-group">
      <a href="/categories"
         class="active list-group-item list-group-item-action d-flex justify-content-between align-items-center category-item"
         aria-current="true">
        <div>
          <i class="fa fa-hashtag custom-text-light me-2"></i>
          <span> Kategori </span>
        </div>
        <i class="check-icon fa fa-check-circle"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
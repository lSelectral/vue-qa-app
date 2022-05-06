<template>
  <div class="col-5 offset-2 mt-5">
    <div class="alert alert-primary" role="alert">
      <slot name="data"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WarningCard"
}
</script>
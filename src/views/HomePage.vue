<template>
  <NavBar/>
  <div class="container-fluid">
    <div class="row mt-3">
      <!-- Sidebar -->
      <SideBar/>
      <!-- !Sidebar -->

      <!-- SORULAR -->
      <div class="col-10">
        <QuestionCard v-for="(question, ind) in questionList" :key="ind" :question="question"/>
      </div>
      <!-- !SORULAR -->


      <WarningCard v-if="questionList.length === 0">
        <template #data>
          Bu Kategori(lere) ait bir soru bulunamadı. Soru sormak için <a href="#">tıklayınız</a>
        </template>
      </WarningCard>

    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import QuestionCard from "@/components/QuestionCard";
import WarningCard from "@/components/WarningCard";
import SideBar from "@/components/SideBar";
import appAxios from "@/adapters/appAxios";

export default {
  components: {SideBar, WarningCard, QuestionCard, NavBar},
  data() {
    return{
      questionList: [],
      loadingState: false
    }
  },
  mounted() {
    appAxios.get("questions", {
      headers: {
        restReq: true
      }
    })
        .then((data) => {
          this.questionList = data.data;
          console.log(data.data);
        })
        .catch((e) => console.error(e))
        .finally(() => this.loadingState = false)
  },
  methods: {

  },
  watch: {
    questionList:{}
  }
}
</script>
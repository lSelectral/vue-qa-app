<template>
  <NavBar/>
  <div class="container-fluid">
    <div class="row mt-3">
      <!-- Sidebar -->
      <SideBar/>
      <!-- !Sidebar -->

      <!-- SORULAR -->
      <QuestionCard/>
      <!-- !SORULAR -->

      <!-- IF ELSE will be added for WarningCard component -->
      <WarningCard>
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

export default {
  components: {SideBar, WarningCard, QuestionCard, NavBar},
  data(){
        return{

        }
    },
    methods: {

    }
}
</script>
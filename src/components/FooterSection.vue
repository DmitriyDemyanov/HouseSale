<template>
  <div class="wrapper-footer">
    <BContainer>
      <div class="d-flex justify-content-between">
        <FooterHeader
          :info="item"
          v-for="(item, index) in getFooterLink"
          :key="index"
        />
      </div>
      <div class="footer-bar"></div>
    </BContainer>
  </div>
</template>

<script>
import FooterHeader from "@/components/FooterHeader";
import { mapGetters } from "vuex";
export default {
  name: "FooterSection",
  components: {
    FooterHeader,
  },
  computed: {
    ...mapGetters("footer", ["getFooterLink"]),
  },
};
</script>

<style scoped>
.wrapper-footer {
  width: 100%;
  min-height: 758px;
  background-color: #093a7a;
  padding: 45px 0 0 100px;
}
.footer-bar {
  margin-top: 20px;
  margin-bottom: 28px;
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.16);
}
</style>

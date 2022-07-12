<template>
  <div class="userList">
    <Header></Header>
    <section>
      <mavon-editor
            :value="mdData"
            :subfield="false"
            :defaultOpen="'preview'"
            :toolbarsFlag="false"
            :editable="false"
            :scrollStyle="true"
            :ishljs="true"
          ></mavon-editor>
    </section>
    
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "articleList",
  data() {
    return {
      mdData:''
    };
  },
  props: {},
  components: {
    Header,
  },
  async created() {
    if (this.$route.params.content != null) {
      this.mdData = this.$route.params.content;
    }
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
/**
* Created by dustar on 2017/10/3.
*/

<template>
  <el-tag v-if="getTitle(title)" size="mini" :type="trans[title]?trans[title]:''">{{ getTitle(title).content }}</el-tag>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getTitle'
      ])
    },
    data () {
      return {
        trans: [
          'primary', 'danger', 'warning', 'success'
        ]
      }
    },
    props: ['title']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-tag {
    user-select: none;
    cursor: default;
  }

</style>

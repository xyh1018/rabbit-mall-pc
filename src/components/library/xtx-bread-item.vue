<template>
  <div class="bread-item">
    <RouterLink v-if="path" :to="path">{{ name }}</RouterLink>
    <span v-else>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: [String, Object]
    },
    name: {
      type: String
    }
  }
}
</script>

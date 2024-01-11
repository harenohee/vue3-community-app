<template>
  <q-page>
    <div class="text-h4">Home</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-card v-for="id in 100" :key="id">
        <q-card-section>{{ id }}번 게시글</q-card-section>
      </q-card>
    </section>
  </q-page>
</template>
<script setup></script>

<!-- yaml이 정상적으로 동작하지 않음(들여쓰기?) -->
<!-- <route lang="yaml">
name: 'home-page'
</route> -->
<route lang="json">
{
  "meta": { "width": "600px" }
}
</route>

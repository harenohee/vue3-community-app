<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-2">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/logo.png" />
            </q-avatar>
            인프런 클론코딩
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn stretch flat label="Home" to="/home" />
        <q-btn
          stretch
          flat
          label="수강하기"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="온라인 강의"
          href="https://www.inflearn.com/"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="유튜브"
          href="https://youtube.com"
          target="_blank"
        />
        <q-separator class="q-my-md q-mr-md" vertical />
        <q-btn label="로그인 / 회원가입" unelevated color="primary" rounded />
      </q-toolbar>
    </q-header>

    <q-page-container :style="PageContainerStyles">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

// home.vue에서 지정한 meta 속성을 체크하고 없으면 1080px 적용
const PageContainerStyles = computed(() => ({
  maxWidth: route.meta.width || '1080px',
  margin: '0 auto',
}));
</script>

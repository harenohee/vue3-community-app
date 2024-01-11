<template>
  <div>
    <text class="h2">Mypage</text>
    <ul>
      <li><RouterLink to="/mypage/profile">Profile</RouterLink></li>
      <li><RouterLink to="/mypage/password">Password</RouterLink></li>
      <li><RouterLink to="/mypage/bookmark">Bookmark</RouterLink></li>
    </ul>
    <RouterView />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

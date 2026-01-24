<template>
  <div class="logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="logo__world"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      data-lov-name="Globe"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
      ></circle>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
      <path d="M2 12h20"></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="logo__users"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      data-lov-name="Users"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle
        cx="9"
        cy="7"
        r="4"
      ></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  </div>
</template>

<style scoped>
.logo {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  .logo__world {
    color: var(--secondary-color);
    width: var(--logo-size);
  }

  .logo__users {
    bottom: 0;
    color: var(--white);
    position: absolute;
    right: 0;
    width: 20px;
  }
}
</style>
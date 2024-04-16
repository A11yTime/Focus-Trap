<template>
<div>

 <div
  >
  <h2 id="dialog1Title">Sloan Dresser & Topper Set</h2>
  <p id="dialog1Desc">Description goes here</p>
  <form @submit.prevent="">
    <p>
      <label for="firstName">First Name: </label>
      <input id="firstName" type="text" />
    </p>
    <p>
      <label for="lastName">Last Name: </label>
      <input id="lastName" type="text" />
    </p>
    <p>
      <label for="interests">Interests: </label>
      <textarea id="interests"></textarea>
    </p>
    <p>
      <label for="autoLogin">Auto-login?</label>
      <input type="checkbox" id="autoLogin" name="autoLogin" />
    </p>
    <p>
      <input type="submit" value="Save Information" />
    </p>
  </form>
</div>
</div>
</template>
<script>

export default {
  name: 'ModalChild',

  

}
</script>
<style scoped>

</style>

<template>
    <div class="backdrop" @click="closeDialog"></div>
    <div  open
    role="dialog"
    aria-labelledby="dialog1Title"
    aria-describedby="dialog1Desc"
    ref="modal"
    @keydown="trapFocus"
    class="modaldesk" 
   
    >
    <div class="menu">
      <button
      class="close-button"
      @click="closeDialog"
      ref="closeBtn">
        Close
      </button> 
      <ModalChild />
    </div>
    </div>
    
</template>
<script>
//import focusTrap from '@/mixins/focustrap'
import ModalChild from './ModalChild.vue'
import trapfocus from '@/mixins/trapfocus'
export default {
name: 'DialogComp',
mixins: [trapfocus],

components: {
    ModalChild
},
props: ['title'],
emits: ['close'],
mounted() {
   this.$refs.closeBtn.focus()
    },
methods: {
   closeDialog(){
    this.$emit('close')
   }
    }

}
</script>
<style scoped>
 .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
  
  .modaldesk {
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    position: fixed;
    top: 30vh;
    left: calc(50% - 15rem);
    width: 30rem;
    background-color: white;
    z-index: 100;
    overflow: hidden;
  }
  
  header {
    width: 100%;
    padding: 1rem;
    background-color: #310131;
    color: white;
  }
  
  dialog div {
    padding: 1rem;
  }
  
  .menu {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0;
  }
  .close-button {
    position: absolute;
    right: 5px;
    top: 5px;
   
}
</style>

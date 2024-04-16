<template>
    <div>
    <dialog-comp
    v-if="dialogVisible"
    title="Add a User?"
    @close="hideDialog">
    </dialog-comp>
    <section>
        <h1>Modal dialog Accessibility considerations</h1>
        <p>Modal dialogs are a common UI element in web and application design, but they can present accessibility challenges for users, particularly those who rely on screen readers or keyboard navigation. Here are some key accessibility considerations for modal dialogs:</p>
       <ul>
        <li>Keyboard Accessibility: Ensure that users can navigate to the modal and interact with its contents using only the keyboard. This means making sure that keyboard focus is trapped within the modal while it's open and that users can close the modal easily with the keyboard.</li>
       <li>Focus Management: When a modal opens, ensure that focus is shifted to the first interactive element within the modal, such as a close button or the first input field. When the modal is closed, return focus to the element that triggered its opening.</li>   
    </ul>
        <button
        @click="showDialog"
        ref="showButton">
        View Details
        </button>
    </section>
    </div>
</template>
<script>
import DialogComp from './DialogComp.vue';

export default {
    name: 'AddUser',

    components: {
        DialogComp,
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        showDialog() {
        this.dialogVisible = true
    },
    hideDialog(){
        this.dialogVisible = false;
        this.$refs.showButton.focus()
    }
  }  
}
</script>

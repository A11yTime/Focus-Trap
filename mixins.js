export default {
    data() {
        return {

        }
    },
    methods: {
      
        trapFocus(event) {
            const focusableElements = this.$refs.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
      
            const isShiftPressed = event.shiftKey;
            const isTab = (event.key === 'Tab')
      
            if (!isShiftPressed && document.activeElement === lastElement && isTab) {
              event.preventDefault();
              firstElement.focus();
            } else if (isShiftPressed && document.activeElement === firstElement && isTab) {
              event.preventDefault();
              lastElement.focus();
            }
          }
    }
}

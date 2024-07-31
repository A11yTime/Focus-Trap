# Focus-Trap
* Vue.js Focus Constrain with mixins update 
## Accessibility Consideration for modal dialog:
* when modal open send focus to the dialog
* where to send focus depends on the availability of the compoenent when modal comprised with multiple file send focus to the component available but it is recommended to send focus to the first focusable element
* Foucs must constrained within the dialog
* Fcous must returned to the original trigger/logical locaton after closing dialog
  
### Terminologies
* role=”dialog”: Identifies the container as dialog
* aria-labelledby=”id”: Provides accessible name for dialog referenced by id with title of modal
* aria-describedby=”id”: Provides accessible description of modal
* aria-modal=”true” Hide inert from screen reader.
* aria-hidden=”true” Hide the inert from screen reader.

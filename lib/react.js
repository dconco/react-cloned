class React {
   static currentState = null
   static elementOnRender = null
   static functionOnRender = null

   static useState = (initialState) => {
      if (this.currentState === null)
         this.currentState = initialState

      return [
         this.currentState,
         (updateState) => {
            if ('function' === typeof updateState) {
               this.currentState = updateState(this.currentState)
            } else {
               this.currentState = updateState
            }

            this.functionOnRender((content) => {
               this.elementOnRender.innerHTML = content
            })
         }
      ]
   }

   static render = (func, element) => {
      this.functionOnRender = func
      this.elementOnRender = element
      
      func((content) => {
         element.innerHTML = content
      })
   }
}
const useState = React.useState

export { useState }
export default React
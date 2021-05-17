({
    handleClick: function(component, event, helper) {
        /* 
a controller is a resource in a component bundle that holds
the action handlers for that component

handleClick: function(component, event, helper) {
component—the component. In this case, it’s helloMessageInteractive.
event—the event that caused the action handler to be called.
helper—the component’s helper, another JavaScript resource of reusable functions.

*/
        let btnClicked = event.getSource();         // the button
        /*handleClick is connected to our <lightning:button> tag and its onclick attribute. 
         * The event, then, is someone clicking the button. Inside that event it has the notion of a source, 
         * the thing that generated the event, which is the button itself.
         *  So, calling event.getSource() gets us a reference to the specific <lightning:button> that was clicked.*/
        let btnMessage = btnClicked.get("v.label"); // the button's label
        component.set("v.message", btnMessage);     // update our message
    }
})


/* 
a controller is a resource in a component bundle that holds
the action handlers for that component

handleClick: function(component, event, helper) {
component—the component. In this case, it’s helloMessageInteractive.
event—the event that caused the action handler to be called.
helper—the component’s helper, another JavaScript resource of reusable functions.

*/


/*   
 * 
 *  handleClick2: function(component, event, helper) {
        let newMessage = event.getSource().get("v.label");
        component.set("v.message", newMessage);
    },
    handleClick3: function(component, event, helper) {
        component.set("v.message", event.getSource().get("v.label"));
    }
    
    
    
    
    
    ADDED LOGGING
    
    
        handleClick2: function(component, event, helper) {
        let newMessage = event.getSource().get("v.label");
        console.log("handleClick2: Message: " + newMessage);
        component.set("v.message", newMessage);
    },
*/

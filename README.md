## Testing links
"https://www.kisaankart.in/wp-json/wc/store/products"

# Redux saga flow
# 1. _**Types**_
we have 4 types of action mostly used in every functionality
apiTypeCreator is a function which return object pattern
like fetch,success prefix or postfix as your wish you can append data  
Create types in types folder using apiTypeCreator from utils folder where apitypeCreator file located

# 2.  **Actions**
import respective types in respective action
export function for return the object with type and val

# 3. **Reducer**
### **Reducer is a function which return the new state based on the state and action (arguments), They must not do any asynchronous logic or other "side effects"**

 import respective types(object) and destructure them
create initial state object/array whatever type you want of initial state

1. create reducer function which take state with default value is initialstate and action as parameter which return object with data and handling other stuff like loading, error,
2. Destructure action object from which has type and payload
   type is the action that we are doing
   payload is optional for passing the value to new states
3. then create switch satatement which take type from action
   on the basis of type, reducer function return object what data you want
4. then come to root file of reducer where all reduceres is passed as object to combineReducers function 
   1. combineReducer function is imported from redux
   2. import all other reducers that you want to make object passed that object to combineReducers function parameter
   3. export default this combineReducers function including object in function paramter. 
   4. and import this root reducer function(combineReducer) in your root app file like index.js, pass this function to createStore. this will help you to make new state from reducer to you app.
   5. and then provider help you to provide state as global.

   this object (argument of combineReducer) key will become value of your state using mapStateToProps function with state object
<!-- 4. create root object with postfix with Actions containing function(actions) name  -->

#Mapping
1. mapping of state -
      mapStateToprops is function which take two parameters second parameter is optional. first it state(which contain entire redux store which you provide this state with provider) and 
      second is own props which is optional,if wrapper comonents need the data from own props to retrieve data from store.
      this function return a plain object that your component needs.

   each field in the object will become a props of your components

2. mapping of actions

Create function with name of e.g. mapDispatchToProps which take parameter is dispatch for dispatching actions,
 mapDistpatchToProps function will return object to props with the help of connect function which is imported from redux. connect is currying function which takes first two parameter first is for state and second for dispatching actions and then second component name 



Now let’s create the actual UserProvider component. We need to add a piece of state in the UserProvider component called user. This piece of state will later be passed down to the other components as the value of the UserContext context.

We also need to perform some operations as soon as the UserProvider component mounts. Firebase gives us an observer called onAuthStateChanged, which we can set on the auth object to listen for changes in the state of the current user (when the user logs in and logs out).

We can also get the current user and some information about that user, such as uid, email, display name, and so on, with onAuthStateChanged. What we want to do is get the current user and set it as the value of the user state. In this case, our current user is userAuth.

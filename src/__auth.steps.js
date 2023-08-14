/* 
Auth Setup
-------------------
1. create firebase project
2. enable web
3. enable sign in method
4. install firebase
5. get firebase config in your firebase.config.js file
6. export app from firebase.config.js
-------------------
*/

/* 
1. Create UserContext (Auth Context): User Context --> component name userContext provides authContext
2. create AuthContext
3. setAuthContext.provider
4. Make sure you set the children
5. export AuthContext to be used inside useContext hook
6. get form data
7. getAuth in the UserContext
*/

/* 
Firebase hosting
--------------------
// one time for each computer
1. npm install -g firebase-tools
2. firebase login

// for each project one time
3. firebase init
Make sure: for public directory: you select: build
single page application: y
// for every deploy
4. npm run build
5. firebase deploy
*/
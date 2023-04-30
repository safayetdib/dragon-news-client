// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBVYVCUXvtHCmObV1rhdMQczpSy_gUvGuU',
	authDomain: 'the-dragon-news-7b33c.firebaseapp.com',
	projectId: 'the-dragon-news-7b33c',
	storageBucket: 'the-dragon-news-7b33c.appspot.com',
	messagingSenderId: '490710915419',
	appId: '1:490710915419:web:53df515c5b743865ad227e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

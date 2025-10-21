    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
    import { getDatabase, ref, push, onValue, transaction } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

    // Configuração Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyBmFmMMneaGNSN4lQ4il93ApGchNQKJPZ8",
      authDomain: "ty-zune.firebaseapp.com",
      databaseURL: "https://ty-zune-default-rtdb.firebaseio.com",
      projectId: "ty-zune",
      storageBucket: "ty-zune.appspot.com",
      messagingSenderId: "592509098951",
      appId: "1:592509098951:web:e7e33a55bd816b92f8d7e2"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getDatabase(app);

    // Elementos
    const authUI = document.getElementById('authUI');
    const appUI = document.getElementById('appUI');
    const userName = document.getElementById('userName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const btnSignup = document.getElementById('btnSignup');
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');
    const btnLike = document.getElementById('btnLike');
    const likeCount = document.getElementById('likeCount');
    const textComment = document.getElementById('textComment');
    const btnComment = document.getElementById('btnComment');
    const commentsList = document.getElementById('commentsList');

    const postId = 'testePost';

    // Criar conta
    btnSignup.onclick = async () => {
      try { await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value); }
      catch(e){ alert(e.message); }
    };

    // Login
    btnLogin.onclick = async () => {
      try { await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value); }
      catch(e){ alert(e.message); }
    };

    // Logout
    btnLogout.onclick = () => signOut(auth);

    // Detecta usuário logado
    onAuthStateChanged(auth, user => {
      if(user){
        authUI.style.display = 'none';
        appUI.style.display = 'block';
        userName.textContent = user.email;
      } else {
        authUI.style.display = 'block';
        appUI.style.display = 'none';
      }
    });

    // Likes
    const likesRef = ref(db, `likes/${postId}/count`);
    btnLike.onclick = () => {
      transaction(ref(db, `likes/${postId}/count`), current => (current||0)+1);
    };
    onValue(likesRef, snap => { likeCount.textContent = snap.val() || 0; });

    // Comentários
    const commentsRef = ref(db, `comments/${postId}`);
    btnComment.onclick = () => {
      const user = auth.currentUser;
      if(!user) return alert("Faça login para comentar");
      if(!textComment.value) return;
      push(commentsRef, { uid: user.uid, text: textComment.value, createdAt: new Date().toISOString() });
      textComment.value = '';
    };
    onValue(commentsRef, snap => {
      commentsList.innerHTML = '';
      snap.forEach(child => {
        const c = child.val();
        const div = document.createElement('div');
        div.textContent = c.text;
        commentsList.appendChild(div);
      });
    });
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../infra/firebase';

export function login(nomeUsuario, senha) {
    signInWithEmailAndPassword(auth, nomeUsuario, senha)
        .then((userCredential) => {
            const usuario = userCredential.user;
            console.log(auth.currentUser);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
        });
}

export function deslogarUsuario(usuario, setUsuario){
    signOut(auth).then(() => {
        setUsuario({id: "", email: "", senha:""});
    }
    )
}

export function logarUsuario(usuario, setUsuario){
    if(usuario){
        signInWithEmailAndPassword(auth, usuario.email, usuario.senha)
        .then((credenciais) => {
            setUsuario((objetoAtual) => {
                const retorno = {
                    ...objetoAtual,
                    ["id"]: credenciais.user.uid,
                };
                return retorno;
            });
        })
        .catch((error) => {
            console.log(`${error.code} = ${error.message}`);
            alert("Login inválido");
        });
    } else {
        alert("Login Inválido");
    }
}
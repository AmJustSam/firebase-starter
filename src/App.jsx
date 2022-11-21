import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./utils/firebase";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getDocuments();
  }, [])

  const getDocuments = async () => {
    const customersRef = collection(db, "users");
    const docRef = doc(customersRef, "pLd4zfVRvJO44XJFF5vE");       // const docRef = doc(db, "users", "pLd4zfVRvJO44XJFF5vE");
        
    const docRes = await getDoc(docRef);

    setUser(
      {id: docRes.id, ...docRes.data()}
    );
  }

  return (
    <div>
      <div>
         <h1>{user.name}</h1>
         <p>{user.age}</p>
       </div>
    </div>
  )
}

export default App;

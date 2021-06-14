import 'firebase/firestore';
import { FirebaseAppProvider, useFirestoreDocData, useFirestore, SuspenseWithPerf } from 'reactfire';


function Adddata(){
  console.log("Done Thank you ")
  const nameref = useFirestore()
  .collection('test')
  .doc('user')
  .set({abc:"Sumerwer"});
  return <p>Done</p>
}

export default Adddata;

// import React, { useState } from "react";
// import {
//   IonModal,
//   IonContent,
//   IonButton,
//   IonItem,
//   IonInput,
//   IonHeader,
//   IonList,
//   IonSegment,
//   IonSegmentButton,
//   IonLabel,
// } from "@ionic/react";
// import { checkmarkCircle, checkmarkCircleOutline } from "ionicons/icons";
// import "./Modal.css";

// const IncomeModal = ({ isOpen, onClose, incomeRecords, setIncomeRecords }) => {
//   // const [incomeDate, setIncomeDate] = useState("");
//   const [incomeName, setIncomeName] = useState("");
//   const [incomeAmount, setIncomeAmount] = useState(0);

//   const handleAddIncome = () => {
//     setIncomeRecords((prev) => [
//       ...prev,
//       { label: incomeName, amount: parseInt(incomeAmount) },
//     ]);
//   };

//   return (
//     <IonModal isOpen={isOpen} className="income-modal">
//       <IonHeader className="modal-header">
//         <IonSegment>
//           <IonSegmentButton value="income" className="modal-segment">
//             <IonLabel>INCOME</IonLabel>
//           </IonSegmentButton>
//         </IonSegment>
//       </IonHeader>
//       <IonContent className="modal-content">
//         <IonButton className="category-btn" expand="block" fill="outline">
//           Category
//         </IonButton>
//         <IonList className="modal-inputs">
//           <IonItem>
//             <IonInput
//               label="Amount:"
//               labelPlacement="stacked"
//               type="text"
//               value={incomeAmount}
//               onIonChange={(e) => {
//                 setIncomeAmount(e.target.value);
//               }}
//             ></IonInput>
//           </IonItem>
//           <IonItem>
//             <IonInput
//               label="Name:"
//               labelPlacement="stacked"
//               type="text"
//               onIonChange={(e) => {
//                 setIncomeName(e.target.value);
//               }}
//             ></IonInput>
//           </IonItem>
//           {/* <IonItem>
//               <IonInput
//                 label="Date:"
//                 labelPlacement="stacked"
//                 type="date"
//                 onIonChange={(e) => {
//                   setIncomeDate(e.target.value);
//                 }}
//               ></IonInput>
//             </IonItem> */}
//         </IonList>
//         <div className="modal-footer">
//           <IonButton onClick={onClose}>CANCEL<a/IonButton>
//           <IonButton onClick={onclose} onSubmit={handleAddIncome}>
//             DONE
//           </IonButton>
//         </div>
//       </IonContent>
//       {console.log(incomeRecords)}
//     </IonModal>
//   );
// };

// export default IncomeModal;

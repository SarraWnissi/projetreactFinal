import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Annulation.css";

const Annulation = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is French (fr)

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

 
  const policyTexts = {
    fr: {
      title: "Politique d'annulation et de remboursement",
      cancellation: "Annulation : Les annulations doivent être effectuées au moins 48 heures avant la date d'arrivée pour bénéficier d'un remboursement complet. Les annulations effectuées après cette période ne seront pas remboursées.",
      refund: "Remboursement : Les remboursements seront effectués dans les 5 jours ouvrables suivant l'annulation, selon le mode de paiement initial utilisé pour la réservation.",
      contact: "Pour toute question ou demande d'annulation, veuillez nous contacter à l'adresse e-mail contact@agency.com ou par téléphone au +216 23 900 344."
    },
    en: {
      title: "Cancellation and Refund Policy",
      cancellation: "Cancellation: Cancellations must be made at least 48 hours before the arrival date to receive a full refund. Cancellations made after this period will not be refunded.",
      refund: "Refund: Refunds will be processed within 5 business days of the cancellation, using the original payment method used for the reservation.",
      contact: "For any questions or cancellation requests, please contact us via email at contact@agency.com or by phone at +216 23 900 344."
    },
    de: {
      title: "Stornierungs- und Rückerstattungsrichtlinie",
      cancellation: "Stornierung: Stornierungen müssen mindestens 48 Stunden vor dem Ankunftsdatum erfolgen, um eine vollständige Rückerstattung zu erhalten. Stornierungen, die nach diesem Zeitraum erfolgen, werden nicht erstattet.",
      refund: "Rückerstattung: Rückerstattungen werden innerhalb von 5 Werktagen nach der Stornierung vorgenommen, unter Verwendung der ursprünglichen Zahlungsmethode, die für die Reservierung verwendet wurde.",
      contact: "Für Fragen oder Stornierungsanfragen kontaktieren Sie uns bitte per E-Mail unter contact@agency.com oder telefonisch unter +216 23 900 344."
    },
    ar: {
      title: "سياسة الإلغاء والاسترداد",
      cancellation: "الإلغاء: يجب إجراء الإلغاء قبل مرور 48 ساعة على تاريخ الوصول لاسترداد كامل. الإلغاءات التي تتم بعد هذه الفترة لن يتم استردادها.",
      refund: "الاسترداد: سيتم معالجة الاسترداد خلال 5 أيام عمل من تاريخ الإلغاء، باستخدام طريقة الدفع الأصلية المستخدمة للحجز.",
      contact: "لأية أسئلة أو طلبات الإلغاء، يرجى الاتصال بنا عبر البريد الإلكتروني على contact@agency.com أو عبر الهاتف على +216 23 900 344."
    },
  };
  
  const selectedPolicy = policyTexts[selectedLanguage];

  return (
    <div className="annulationContainer">
      <div>
        <h1>{selectedPolicy.title}</h1>
        <p className="strong">{selectedPolicy.cancellation}</p>
        <p className="strong">{selectedPolicy.refund}</p>
        <p className="annulationContact">{selectedPolicy.contact}</p>
      </div>
      
      <button className="backButton" onClick={handleGoBack}>
        Retour
      </button>

      {/* dropdown */}
      <div className="languageSelector">
        <label htmlFor="languageSelect">Select Language:</label>
        <select
          id="languageSelect"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="ar">العربية</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <div className="imageContainer">
        
      </div>
    </div>
  );
};

export default Annulation;

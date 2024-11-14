// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// // the translations
// // (tip move them in a JSON file and import them,
// // or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const resources = {
//   en: {
//     translation: {
//       welcomeMessage: "Welcome to InvestKoree",
//       easyFastInvest: "The easiest and fastest way to invest",
//       getStarted: "Get Started",
//       currentlyRunningInvestments: "Currently Running Investments",
//       whyWeAreHere: "Why We Are Here",
//       ourMission: "Our mission is to bring easy and fast investment opportunities",
//       ourServices: "Our Services",
//       easyToInvest: "Easy to Invest",
//       fastestTransaction: "Fastest Transaction",
//       highROI: "High ROI",
//       testimonial: "Customer Review",
//       whatPeopleSay: "What People Say About Us",
//       testimonialName1: "John Doe",
//       testimonialName2: "Jane Smith",
//       testimonialMessage1: "This platform made investing simple and profitable for me.",
//       testimonialMessage2: "I have experienced fast transactions and great returns!",
//       founder: "Founder",
//     }
//   },
//   bn: {
//     translation: {
//       welcomeMessage: "ইনভেস্টকোরে স্বাগতম",
//       easyFastInvest: "বিনিয়োগের সবচেয়ে সহজ এবং দ্রুততম উপায়",
//       getStarted: "শুরু করুন",
//       currentlyRunningInvestments: "এখনকার চলমান বিনিয়োগগুলি",
//       whyWeAreHere: "আমরা কেন এখানে আছি",
//       ourMission: "আমাদের মিশন হল সহজ এবং দ্রুত বিনিয়োগের সুযোগ নিয়ে আসা",
//       ourServices: "আমাদের সেবা",
//       easyToInvest: "বিনিয়োগে সহজ",
//       fastestTransaction: "সবচেয়ে দ্রুত লেনদেন",
//       highROI: "উচ্চ ROI",
//       testimonial: "গ্রাহক পর্যালোচনা",
//       whatPeopleSay: "আমাদের সম্পর্কে কী বলছেন",
//       testimonialName1: "জন ডো",
//       testimonialName2: "জেন স্মিথ",
//       testimonialMessage1: "এই প্ল্যাটফর্মটি আমার জন্য বিনিয়োগকে সহজ এবং লাভজনক করেছে।",
//       testimonialMessage2: "আমি দ্রুত লেনদেন এবং দুর্দান্ত রিটার্ন অনুভব করেছি!",
//       founder: "প্রতিষ্ঠাতা",
//     }
//   }
// };

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     fallbackLng:'en',
//     lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
//     // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
//     // if you're using a language detector, do not define the lng option

//     interpolation: {
//       escapeValue: false // react already safes from xss
//     }
//   });

//   export default i18n;
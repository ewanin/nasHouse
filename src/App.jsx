import About from "./Components/About";
import Banner from "./Components/Banner";
import Carousel from "./Components/Carousel";
import Cat from "./Components/Cat";
import Corporate from "./Components/Corporate";
import Enquire from "./Components/Enquire";
import Events from "./Components/Events";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";
import Green from "./Components/Green";
import Header from "./Components/Header";
import Membership from "./Components/Membership";
import Pools from "./Components/Pools";
import Spaces from "./Components/Spaces";
import SubMembership from "./Components/SubMembership";
import Test from "./Components/Test";
import Villas from "./Components/Villas";

export default function App() {
  return (
    <>
      {/* <Carousel /> */}

      {/* <Test /> */}
      <Header />
       <Banner />
      <Villas />
      <Pools />
      <Spaces />
      <Cat />
      <Green />
      <About />
      <Corporate />
      <Membership />
      <SubMembership />
      <Events />
      <Explore />
      <Enquire />
      <Footer />
      {/* <About /> */}
    </>
  )
}





// App.js
// import React from 'react';

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Section 1 */}
//       <section className="bg-gray-200 h-screen flex items-center justify-center">
//         <h1 className="text-3xl font-bold">Section 1</h1>
//       </section>

//       {/* Horizontal Scroll Section */}
//       <section className="overflow-x-auto flex-grow flex">
//         {/* Horizontal Scroll Container */}
//         <div className="flex">
//           {/* Section 2 */}
//           <div className="bg-blue-200 flex-shrink-0 w-screen h-screen flex items-center justify-center px-4 py-8">
//             <h2 className="text-3xl font-bold">Section 2</h2>
//           </div>

//           {/* Section 3 */}
//           <div className="bg-green-200 flex-shrink-0 w-screen h-screen flex items-center justify-center px-4 py-8">
//             <h2 className="text-3xl font-bold">Section 3</h2>
//           </div>
//         </div>
//       </section>

//       {/* Section 4 (Vertical Scroll) */}
//       <section className="bg-yellow-200 h-screen flex items-center justify-center">
//         <h2 className="text-3xl font-bold">Section 4</h2>
//       </section>
//     </div>
//   );
// }

// export default App;

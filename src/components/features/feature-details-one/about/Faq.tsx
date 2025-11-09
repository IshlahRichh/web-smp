import { useEffect, useState } from "react";

interface FaqData {
   id: number;
   title: string;
   desc: string;
   showAnswer: boolean;
};

const faq_data: FaqData[] = [
   {
      id: 1,
      title: "Future orientation",
      desc: "Trade Center is the seventh tallest building in the world and the tallest building in the w hemisph ere. This skyscraper standst view of New York City. From here, you have awesome Manhattan the Statue of Liberty, Brooklyn, Staten Island, ",
      showAnswer: false,
   },
   {
      id: 2,
      title: "Islamic culture and environment",
      desc: "Trade Center is the seventh tallest building in the world and the tallest building in the w hemisph ere. This skyscraper standst view of New York City. From here, you have awesome Manhattan the Statue of Liberty, Brooklyn, Staten Island, ",
      showAnswer: false,
   },
   {
      id: 3,
      title: "Integrated Curriculum",
      desc: "Trade Center is the seventh tallest building in the world and the tallest building in the w hemisph ere. This skyscraper standst view of New York City. From here, you have awesome Manhattan the Statue of Liberty, Brooklyn, Staten Island, ",
      showAnswer: false,
   },
   {
      id: 4,
      title: "Persistent Guidance",
      desc: "Trade Center is the seventh tallest building in the world and the tallest building in the w hemisph ere. This skyscraper standst view of New York City. From here, you have awesome Manhattan the Statue of Liberty, Brooklyn, Staten Island, ",
      showAnswer: false,
   },
   {
      id: 5,
      title: "Professional teacher",
      desc: "Trade Center is the seventh tallest building in the world and the tallest building in the w hemisph ere. This skyscraper standst view of New York City. From here, you have awesome Manhattan the Statue of Liberty, Brooklyn, Staten Island, ",
      showAnswer: false,
   },
   {
      id: 6,
      title: "Modern facilities",
      desc: "Trade Center is the seventh tallest building in the world and the tallest building in the w hemisph ere. This skyscraper standst view of New York City. From here, you have awesome Manhattan the Statue of Liberty, Brooklyn, Staten Island, ",
      showAnswer: false,
   },
];

const Faq = () => {
  const [faqData, setFaqData] = useState<FaqData[]>([]);

  useEffect(() => {
    setFaqData(faq_data);
  }, []);

  const toggleAnswer = (faqId: number) => {
    setFaqData((prevFaqData) =>
      prevFaqData.map((faq) =>
        faq.id === faqId
          ? { ...faq, showAnswer: !faq.showAnswer }
          : { ...faq, showAnswer: false }
      )
    );
  };

   return (
      <div className="tg-tour-faq-wrap mb-70">
         <h4 className="tg-tour-about-title mb-15">Why SPEMDUTA</h4>
         <p className="text-capitalize lh-28 mb-20">SPEMDUTA is Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, asperiores quasi repellendus reprehenderit ullam suscipit facere numquam atque alias non impedit, voluptatum quo nulla veritatis modi veniam harum sed vitae.</p>
         <div className="tg-tour-about-faq-inner">
            <div className="tg-tour-about-faq" id="accordionExample">
               {faqData.map((item) => (
                  <div key={item.id} className="accordion-item">
                     <h2 className="accordion-header">
                        <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} onClick={() => toggleAnswer(item.id)} type="button">
                           <span className="icon mr-10"><i className="fa-sharp fa-solid fa-check fa-fw"></i></span>{item.title}
                        </button>
                     </h2>
                     <div id="collapseOne" className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`}>
                        <div className="accordion-body">
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Faq

import React, { useState } from "react";
import AccordionUI from "./accor";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "มันคืออะไร KUB เนี่ย !?",
      answer:
        'Chicken DAO คือโปรเจค NFT Generative profile picture แบบ On The Fly Random Generate รูปไก่กุ๊กๆ ที่มีแต่ พระเจ้าเท่านั้นที่รู้ว่า ตัวต่อไปจะเป็นอะไร Chicken DAO เป็นโปรเจค profile picture ที่อยากจะรู้ว่า On Chain DAO สามารถที่จะทำให้ คอมมูนิตี้มีส่วนร่วมในการสร้างมูลค่า ให้กับโปรเจคได้อย่างแท้จริงหรือเปล่า ? , Roadmap เราไม่มีเพราะทุกอย่างไม่ได้อยู่ในมือเราเท่านั้น แต่อยู่ในมือ "พวกเราเหล่า Chicker" ',
    },
    {
      id: 2,
      question: "On The Fly NFT Generation ?",
      answer:
        '"มีแต่พระเจ้าเท่านั้นที่จะรู้ได้ล่วงหน้าว่า ตัวต่อไปจะเป็นอะไร" NFT รูป Chicker จะถูก random generate ขึ้นมาทันทีหลังจากที่ NFT ถูก mint ขึ้น ดังนั้นเราจะเห็นน้อง Chicker พร้อมกัน ตอนที่น้องขึ้นแทนประมูล !',
    },
    {
      id: 3,
      question: "ระบบประมูล",
      answer:
        'NFT ที่ mint มาจะถูกเอาไปประมูลที่ด้านบน ! คุณมีเวลา 1 ชั่วโมงในการ bid เมื่อจบการประมูลคนที่ bid สูงสุดก็จะสามารถมากด claim NFT ไปได้, โดยที่การประมูลจะเป็นการ lock token คนที่ bid สูงสุดเอาไว้ และ refund คนที่บิดต่ำกว่าทันที "NFT ที่ไม่มีใคร mint จะถูกเอาไป burn เพื่อ mint ตัวใหม่ขึ้นมาประมูลใสรอบต่อไป เป้นแบบนี้เรื่อยๆ',
    },
    {
      id: 4,
      question: "DAOs ที่ค่อยๆ เป็นค่อยๆ ไป",
      answer:
        "ระบบ DAO จะเป็นระบบที่จะค่อยๆ ตามมา ขึ้นอยู่กับความเป็นไปของโปรเจค และคอมมูนิตี้ โดยเราจะเก็บ Treasury ไปเรื่อยๆ พร้อมๆ กับ พัฒนาระบบ DAO ให้สามารถใช้งานได้ ทั้งนี้เพื่อสะสมจำนวน holder และ treasury ให้มีปริมาณเหมาะสมกับการโหวตเพื่อ พัฒนาคอมมูต่อไปได้อย่าง สุขภาพดี และ ยั่งยืน",
    },
    {
      id: 5,
      question: "50 Dev : 50 Treasury",
      answer:
        "เพื่อให้โปรเจคดำเนินต่อไปได้ ในแต่ละช่วงเวลา จึงมีการแบ่งรายได้จากการประมูล 50 % ไปเข้า core team สำหรับประทังชีวิต ให้สามารถพัฒนาโปรเจคส่วนต่างๆ ต่อไปได้ หากไม่มีการ Vote และระหว่างที่ DAO กำลังพัฒนาไป และอีก 50 % เข้าไปที่ treasury เพื่อให้คอมมูนิตี้บริหารจัดการต่อไป",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-50">
      {data.map((data, index) => {
        return (
          <AccordionUI
            key={index}
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;

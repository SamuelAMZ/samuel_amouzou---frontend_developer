import React, { useContext } from "react";

// context
import IsPopupOpenContext from "../contexts/IsPopupOpenContext";

// icons
import { MdClose } from "react-icons/md";

const Popup = () => {
  const { setActive } = useContext(IsPopupOpenContext);

  return (
    <>
      <div className="backpop" onClick={() => setActive(false)}></div>
      <div className="popup-container">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
        explicabo temporibus velit illo eos sed minus praesentium, voluptates
        sapiente rem. Pariatur vel nemo molestias esse, vero voluptates officiis
        molestiae ipsum deleniti quisquam, quia officia, sequi error. Officiis,
        veritatis vitae rem expedita obcaecati eveniet. Beatae, impedit animi
        sunt natus accusamus obcaecati incidunt culpa rem suscipit similique vel
        eius temporibus velit odio aliquam ipsam quisquam reiciendis ad amet?
        Veritatis pariatur atque, ea et perferendis molestias odit? Rerum nemo
        quas voluptatem tenetur et nihil voluptates doloribus consectetur natus,
        aliquam eaque quibusdam ratione est qui, quis perferendis nisi quo,
        aperiam enim harum doloremque at.
      </div>
      <div className="closepop" onClick={() => setActive(false)}>
        <MdClose />
      </div>
    </>
  );
};

export default Popup;

import Image from "next/image";
import React from "react";

const Card = () => {
    return (
        <div className="card bg-base-100  shadow-sm">
                           <div className="card-body">
                               <h2 className="card-title">Card Title</h2>
                               <p>
                                   A card component has a figure, a body part, and
                                   inside body there are title and actions parts
                               </p>
                           </div>
                           <figure>
                               <Image
                                  height={500}
                                  width={500}
                                   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                   alt="Shoes"
                               />
                           </figure>
                       </div>
    );
};

export default Card;

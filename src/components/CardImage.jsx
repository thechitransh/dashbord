import React from "react";

function CardImage(props) {
  return (
    <section className="bg-white">
      <div className="flex gap-5 p-3">
        <img src={props.image} alt="image" className=" w-20" />
        <div>
          <p>{props.name}</p>
          <p className="text-slate-400">Posted on {props.time}</p>
        </div>
      </div>
    </section>
  );
}

export default CardImage;

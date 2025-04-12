import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="redText" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        src="https://fastly.picsum.photos/id/429/4128/2322.jpg?hmac=_mAS4ToWrJBx29qI2YNbOQ9IyOevQr01DEuCbArqthc"
        alt="berries"
        className="food-img"
      />
      <img
        src="https://fastly.picsum.photos/id/425/959/635.jpg?hmac=4dke7AkdcKiiNgfteekpFs_MvDLE1xAdAmbxRZ52z4A"
        alt="beans"
        className="food-img"
      />
      <img
        src="https://fastly.picsum.photos/id/431/5000/3334.jpg?hmac=T2rL_gBDyJYpcr1Xm8Kv7L6bhwvmZS8nKT5w3ok58kA"
        alt="coffee"
        className="food-img"
      />
    </div>
  </div>,
  document.getElementById("root")
);

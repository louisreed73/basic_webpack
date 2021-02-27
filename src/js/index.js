console.log("Browser motherFucker");

import("../css/estilo.scss");

let tr = (st) => {
  return st[0].toUpperCase() + st.substring(1);
};

let transf = "lolita" |> tr;
let transf2 = "pepito" |> tr;
console.log(transf);
console.log(transf2);

console.log("Adios!!!!");

class luisElem extends HTMLElement {
  constructor() {
    super();
    this._dataLuis="Madrid";
   
    console.log("Contruido luis-elem");
    this.shadowR=this.attachShadow({ mode: "open" });
    this.div = null;
    this.p = null;
  }

  ///#region connectedCallBack
  connectedCallback() {
    console.log("Attached luis Element");
    this.shadowRoot.innerHTML = `
      <style>
            p {
                background:gold;
                padding:1em;
            }
      </style>
      <div>
        <p>${this.dataLuis}</p>
      </div>
      `;
    this.div = this.shadowR.querySelector("div");
    this.p = this.shadowR.querySelector("p");
    console.log(this.div);
    console.log(this.p);
    this.addEventListener("luis", (e) => {
    //   console.log("Listening to CustomEvent luis!!!",e.detail.text);
    //   console.log("Listening to CustomEvent luis!!!",e.luis);
        // this.dataLuis=e.luis;
    });
  }
  ///#endregion connectedCallBack

  static get observedAttributes() {
      return ["luis"]
  }

  attributeChangedCallback(
      name, 
      oldValue,
      newValue,
  ) {
        console.log(name,oldValue,newValue);
        if(this.p) {
            console.log(this.p.textContent=newValue);

        }
        this.dataLuis=newValue;
        // this.p.textContent=this.dataLuis;
        // console.log(this.dataLuis);
        this.dispatchEvent(
          new CustomEvent("luis", {
            bubbles: true,
            detail: { text: newValue },
            luis:newValue
          })
        );
  }

  get dataLuis() {
      return this._dataLuis
  }

  set dataLuis(v) {
      this._dataLuis=v;
      console.log("Alguien ha cambiado dataLuis!!!",this.dataLuis);
  }
}

customElements.define("luis-elem", luisElem);

const par = document.createElement("luis-elem");
par.setAttribute("luis",23)
const par2 = document.createElement("luis-elem");
par2.setAttribute("luis",56)

document.body.appendChild(par);
document.body.appendChild(par2);

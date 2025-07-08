let add=document.getElementById('btn');
let task=document.getElementById('space');
let input =document.getElementById('input');
add.addEventListener("click",()=>{
       let work=input.value.trim();
       if(work!=""){
         let container = document.createElement("div");

       let p=document.createElement("h4")
       p.textContent=work;
       container.appendChild(p);

       
      
       let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.addEventListener("click", () => {
      container.remove();
    });
     container.appendChild(btn);

    task.appendChild(container);
    input.value = "";
}
if(work==""){
       alert("please,first add work")
}

})
 

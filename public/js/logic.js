const ct = document.getElementById("content")
ct.addEventListener("wheel", (e)=>ct.scrollBy(e.deltaY*0.5, e.deltaY*0.5))
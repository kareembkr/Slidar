let testimonials = [
  {
    name: "Karriim",
    photoUr1: "uploads/1.jpg.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit Officia cumque blanditiis aliquid molestias labore laborum quidem magni culpa possimus alias ut Mollitia a molestias doloribus",
  },
  {
    name: "Karriim",
    photoUr1: "uploads/2.jpg.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit Officia cumque blanditiis aliquid molestias labore laborum quidem magni culpa possimus alias ut Mollitia a molestias doloribus",
  },
  {
    name: "Cherise G",
    photoUr1: "uploads/3.jpg.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit Officia cumque blanditiis aliquid molestias labore laborum quidem magni culpa possimus alias ut Mollitia a molestias doloribus",
  },
  {
    name: "Cherise G",
    photoUr1: "uploads/4.jpg.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit Officia cumque blanditiis aliquid molestias labore laborum quidem magni culpa possimus alias ut Mollitia a molestias doloribus",
  },
];

let img =document.querySelector("img");
let text =document.querySelector(".text");
let username=document.querySelector(".username");
let idx =0;

updateTestimonial()
function updateTestimonial() {
  let { name, photoUr1, text } = testimonials[idx];
  img.src=photoUr1;
  text.innerText=text; 
   username.innerText=name;
  idx++
  if (idx===testimonials.length) 
    {
    idx=0;
  }
  setTimeout(()=> {
    updateTestimonial();


  }, 1000)
}

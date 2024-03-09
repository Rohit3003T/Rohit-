AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
  },
  
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
 
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
  
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
  
  },

  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
  },
  
  
  
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
  },
  {
    langImage: "assets/images/techstack-page/express.png",
    langName: "Express.js",
  },
  {
    langImage: "assets/images/techstack-page/postman.png",
    langName: "Postman",
  },
  {
    langImage: "assets/images/techstack-page/mongodb.png",
    langName: "Mongo DB",
  },
  {
    langImage: "assets/images/techstack-page/mysql.png",
    langName: "MySql",
  },
  {
    langImage: "assets/images/techstack-page/postgresql.png",
    langName: "PostgreSQL",
  },


  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
  },
  {
    langImage: "assets/images/techstack-page/java.png",
    langName: "java",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
  },
  
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
  },
  {
    langImage: "assets/images/techstack-page/canva.png",
    langName: "Cnava",
  },
  {
    langImage: "assets/images/techstack-page/figma.png",
    langName: "Figma",
  },
];
  
 

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);

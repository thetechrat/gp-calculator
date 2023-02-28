let grade = []
let unit = []
let courseInfo = []
let displayC = document.querySelector(".display_T")
let courseName = document.querySelector(".cn");
let courseNameDisplay = document.querySelector(".cnd");
let courseGrade = document.querySelector(".cg");
let courseGradeDisplay = document.querySelector(".cgd");
let courseUnit = document.querySelector(".cu");
let courseUnitDisplay = document.querySelector(".cud");
let addBtn = document.querySelector(".add_btn");
let totalScore = document.querySelector(".gp");

totalScore.innerText = "GP :"

function calcTotalUnit() {
  let courseGG = 0;
  for (let i = 0; i < unit.length; i++) {
    let courseG = unit[i];
    courseGG += courseG.cGrade * courseG.cUnit;
    totalScore.innerText = "GP : " + courseGG / unit.length
  }
}

function display() {
  let courseDD = ""
  for (let i = 0; i < courseInfo.length; i++) {
  let courseD = courseInfo[i]
  courseDD += `
      <div class="display_t">
        <div class="cnd">
          <div>${courseD.cName}</div>
        </div>
        <div class="cgd">
          <div>${courseD.cGrade}</div>
        </div>
        <div class="cud">
          <div>${courseD.cUnit}</div>
        </div>
      </div>`;
  }
  displayC.innerHTML = courseDD
}

addBtn.addEventListener("click", () => {
  let cName = courseName.value
  let cGrade = courseGrade.value
  let cUnit = courseUnit.value 

  let courseDetails = {
    cName,
    cGrade,
    cUnit,
  }

  if (cGrade === "A") {
    cGrade = 5;
      courseScore = {
        cGrade,
        cUnit,
      };
  } else if (cGrade === "B") {
    cGrade = 4;
    courseScore = {
      cGrade,
      cUnit,
    };
  } else if (cGrade === "C") {
    cGrade = 3;
    courseScore = {
      cGrade,
      cUnit,
    };        
  } else if (cGrade === "D") {
    cGrade = 2;
    courseScore = {
      cGrade,
      cUnit,
    };        
  } else if (cGrade === "E") {
    cGrade = 1
    courseScore = {
      cGrade,
      cUnit,
    };
  } else if (cGrade === "F") {
    cGrade = 0
    courseScore = {
      cGrade,
      cUnit,
    };
  }


  if (cName !== "" && cGrade !== "" && cUnit !== "") {
  console.log(unit)
  courseInfo.push(courseDetails)
  courseName.value = "";
  courseGrade.value = "";
  courseUnit.value = "";
  }
  display()
  unit.push(courseScore)
  calcTotalUnit()
});

//display.innerHTML = ''
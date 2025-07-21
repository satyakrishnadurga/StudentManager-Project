const students = [];
function addstudent() {
    const name = document.getElementById("nameInput").value;
    const age = parseInt(document.getElementById("ageInput").value);
    const course = document.getElementById("courseInput").value;
    if(!name || !age || !course) {
        alert("please enter all fields");
        return;
    }
    const student = {
        name: name,
        age: age,
        course: course
    };
    students.push(student);
    displayStudent();
}
function displayStudent(){
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = " ";
    students.forEach((stu,index) =>  {
        const div = document.createElement("div");
        div.classname ="student";
        div.innerHTML =`<strong>${index+1}.${stu.name}</strong>(Age:${stu.age},course:${stu.course})`;
        studentList.appendChild(div);
    });
}
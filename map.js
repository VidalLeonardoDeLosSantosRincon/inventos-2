
let students = [

    {
        name:"Peter Thomas",
        grade: 85
    },
    
    {
        name:"John Scott",
        grade:65
    },
    
    {
        name:"June Howarts",
        grade: 90
    },
    
    {
        name:"Carla Rodriguez",
        grade: 94
    }

];

/*students.map((student)=>{
    console.log(student.name);
});*/

let pasados = students.filter((student)=> student.grade>70);
let pasaron = pasados.map((ps)=>ps.name);

//console.log(pasados);
console.log(pasaron);
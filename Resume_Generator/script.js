function addNewWEField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter here...');

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAQField(){
    let new1Node=document.createElement('textarea');
    new1Node.classList.add('form-control');
    new1Node.classList.add('aqfield');
    new1Node.classList.add('mt-2');
    new1Node.setAttribute("rows",3);
    new1Node.setAttribute("placeholder",'Enter here...');

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(new1Node,aqAddButtonOb);
}
function addNewskillField(){
    let new1Node=document.createElement('textarea');
    new1Node.classList.add('form-control');
    new1Node.classList.add('skillsfield');
    new1Node.classList.add('mt-2');
    new1Node.setAttribute("rows",3);
    new1Node.setAttribute("placeholder",'Enter here...');

    let skillsOb = document.getElementById("skills");
    let skillsAddButtonOb = document.getElementById("skillsAddButton");

    skillsOb.insertBefore(new1Node,skillsAddButtonOb);
}
function addNewinterestsField(){
    let new1Node=document.createElement('textarea');
    new1Node.classList.add('form-control');
    new1Node.classList.add('interestsfield');
    new1Node.classList.add('mt-2');
    new1Node.setAttribute("rows",3);
    new1Node.setAttribute("placeholder",'Enter here...');

    let interestsOb = document.getElementById("interests");
    let interestsAddButtonOb = document.getElementById("interestsAddButton");

    interestsOb.insertBefore(new1Node,interestsAddButtonOb);
}

//generating CV

function generateCV(){
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

    let file=document.getElementById('imgfield').files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    };

    let nameField=document.getElementById('namefield').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById('contactT').innerHTML=document.getElementById('phonefield').value;
    document.getElementById('addressT').innerHTML= document.getElementById('addressfield').value;
    document.getElementById('emailT').innerHTML=document.getElementById('emailfield').value;
    document.getElementById('linkedinT').innerHTML=document.getElementById('ldnfield').value;
    document.getElementById('githubT').innerHTML=document.getElementById('githubfield').value;
  
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectivefield').value;

    let ss=document.getElementsByClassName('skillsfield');
    let str2=' ';
     for(let i of ss){
         str2=str2+`<li> ${i.value} </li>`;
         document.getElementById('skillsT').innerHTML=str2;
     }


    let wes=document.getElementsByClassName('wefield');
    let str=' ';
     for(let i of wes){
         str=str+`<li> ${i.value} </li>`;
         document.getElementById('weT').innerHTML=str;
     }

     let aqs=document.getElementsByClassName('aqfield');
     let str1=' ';
      for(let i of aqs){
          str1=str1 + `<li> ${i.value} </li>`;
          document.getElementById('aqT').innerHTML=str1;
      } 
      let is=document.getElementsByClassName('interestsfield');
      let str3=' ';
      for(let i of is){
          str3=str3 + `<li> ${i.value} </li>`;
          document.getElementById('interestT').innerHTML=str3;
      } 
}
function printCV(){
    document.getElementById('bg').style.display='none';
    window.print();
    
}
const taskList = []; 

document.getElementById('addtacheButton').addEventListener('click', function() {  
    const tacheInput = document.getElementById('tacheInput');  
    const tacheValue = tacheInput.value.trim();  

    if (tacheValue === "") {  
        alert("Veuillez entrer une tâche.");  
        return;  
    }  
    const li = document.createElement('li');  
    li.textContent = tacheValue;  

     
    const buttonContainer = document.createElement('div');  
    buttonContainer.classList.add('button-container');  

     
    const ModifierButton = document.createElement('button');  
    ModifierButton.textContent = "Modifier";  
    ModifierButton.addEventListener('click', function() {  
        const nouveauTacheValue = prompt("Modifier la tâche :", li.childNodes[0].textContent);  
        if (nouveauTacheValue !== null && nouveauTacheValue.trim() !== "") {  
            li.childNodes[0].textContent = nouveauTacheValue; 
        }  
    });  

    
    const SupprimerButton = document.createElement('button');  
    SupprimerButton.textContent = "Supprimer";  
    SupprimerButton.addEventListener('click', function() {  
        li.remove();  
    });  

    
    buttonContainer.appendChild(ModifierButton);  
    buttonContainer.appendChild(SupprimerButton); 
    
    li.appendChild(buttonContainer);  
    document.getElementById('tacheList').appendChild(li);  
    tacheInput.value = "";  
});
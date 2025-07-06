document.getElementById('storyForm').addEventListener('submit',function(e){
    e.preventDefault();
    var nameInput=document.getElementById('storyName');
    var storyInput=document.getElementById('storyText');
    var name =nameInput.value;
    var story =storyInput.value;

    if(name.trim()===''){
        name= 'Anonymous';
    }
    if(story.trim()===''){
        return;
    }

    var storyBlock=document.createElement('div');
    storyBlock.className ='card-my-3 fade-in';

    var cardBody=document.createElement('div');
    cardBody.className='card-body';

    var cardTitle =document.createElement('h5');
    cardTitle.className='card-title';
    cardTitle.textContent=name;

    var cardText=document.createElement('p');
    cardText.className='card-text';
    cardText.textContent='story';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    storyBlock.appendChild(cardBody);

    var storyList =document.getElementById('storiesContainer');
    storyList.prepend(storyBlock);

    nameInput.value='';
    storyInput.value='';

    var alertBox =document.getElementById('storyAlert');
    alertBox.style.display='block';
    setTimeout(function(){
        alertBox.style.display='none';
    },4000);

    //Save to localStorage
    var savedStories=localStorage.getItem(sgbvStories);
    if(!savedStories){
    }else{
        savedStories=JSON.parse(savedStories);
    }

    savedStories.unshift({name:name,story:story});
    localStorage.setItem('sgbvStories',JSON.stringify(savedStories));
})

//Load from localStorage
window.addEventListener('DOMContentLoaded',function(){
    var savedStories=this.localStorage.getItem('sgbvStories');
    if(!savedStories){
        return;
    }
    savedStories=JSON.parse(savedStories);

    var Container=document.getElementById('storiesContainer');
    for(var i =0;i<savedStories.length;i++) {
        var entry=savedStories[i];

        var card=document.createElement('div');
        card.className='card my-3';

        var cardBody=document.createElement('div')
        cardBody.className='card-body';

        var cardTitle= document.createElement('h5');
        cardTitle.className='card-title';
        cardTitle.textContent=entry.name;

        var cardText=document.createElement('p');
        cardText.className='card-text';
        cardText.textContent=entry.story;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);

        Container.appendChild(card);
    }
});

 var messages = document.getElementsByTagName('messages');
 var sendButton = document.getElementsByTagName('send-btn');

 sendButton.addEventListener('click',sendUserMessage);

 getMessagesFromServer();

 async function getMessagesFromServer(){
 	var reponse = await fetch('https://fchatiavi.herokuapp.com/get/arick/?offset=0&limit=200')
 	reponse = await reponse.json();

 	var allMesangesHTML = '';
 	for (var i = reponse.length - 1; i >= 0; i--) {
 		var mesengeData = reponse[i];
 		var mesenge = '<div class="message"><div class="massege-nickname"> ${mesengeData.Name} </div><div class="massage-text"> ${mesengeData.Mesenge} </div></div>';
        allMesangesHTML = allMesangesHTML + mesenge;
 	}
 	mesenges.innerHTML = allMesangesHTML
 }
 async function sendUserMessage(){
 	var Nickname = document.getElementsById('nickname-input').value;
 	var userMessage= document.getElementsById('mesenge-input').value;
 	if (userNickname.length === 0) {
 		alert("Ты должен вывести имя");
 		return;
 	}
 	if (userMessage.length === 0) {
 		alert("Ты должен вывести сообщение");
 		return;
 }
 await fetch('https://fchatiavi.herokuapp.com/send/arick/', {
 	method: 'POST'
 	body:JSON.stringify({
 		Name:userNickname,
 		Mesenge:userMessage
 	})
   });
 }

	var s = 0;
	var startPoint = 0;
	function ye(){

		time = 6;
		s +=1;
		document.getElementById("Score").innerHTML=s
		if (s == 1)
		{
			Timer();
		}
	}

	function Timer()
	{
		console.log(time);
		time -= 1/60;
		document.getElementById("Timer").innerHTML=(time - time%1)
		requestAnimationFrame(Timer);
		if(time < 0)
		{
			 SendScore();
			alert("Game Over");
		}
	}

	function SendScore()
	{

		var TelegramBot = require('node-telegram-bot-api');

		var token = '683744067:AAF-WqUbOXB5wd0-Gnva0wQYMc27BYv4f6c';
		var botOptions = {
			polling: true
		};
		var bot = new TelegramBot(token, botOptions);
		var messageChatId = msg.chat.id;
		bot.setGameScore(messageChatId, "s");

	}
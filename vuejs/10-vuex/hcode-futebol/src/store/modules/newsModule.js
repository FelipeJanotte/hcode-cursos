export default{
    state:{
        news:[
			{
				id: 1,
				title: 'Começam os treinos para a nova temporada',
				content:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis, similique assumenda accusamus nisi nemo laudantium tempora facere repudiandae nam, voluptates neque, quos doloribus eum laborum cumque unde commodi ab?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero atque dignissimos earum ipsa! Saepe, ullam! Libero facilis, sint blanditiis ab quasi nihil vel atque corporis amet quidem delectus mollitia numquam?',
				date: '2021-01-01',
				img: 'news1.jpg',
				imgInfo: 'Notícia 1',
			},
			{
				id: 2,
				title: 'Jogo de quarta-feira termina empatado',
				content:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis, similique assumenda accusamus nisi nemo laudantium tempora facere repudiandae nam, voluptates neque, quos doloribus eum laborum cumque unde commodi ab?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero atque dignissimos earum ipsa! Saepe, ullam! Libero facilis, sint blanditiis ab quasi nihil vel atque corporis amet quidem delectus mollitia numquam?',
				date: '2021-01-07',
				img: 'news2.jpg',
				imgInfo: 'Notícia 2',
			},
			{
				id: 3,
				title: 'A inauguração do novo estádio será na semana que vem',
				content:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis, similique assumenda accusamus nisi nemo laudantium tempora facere repudiandae nam, voluptates neque, quos doloribus eum laborum cumque unde commodi ab?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero atque dignissimos earum ipsa! Saepe, ullam! Libero facilis, sint blanditiis ab quasi nihil vel atque corporis amet quidem delectus mollitia numquam?',
				date: '2021-01-20',
				img: 'news3.jpg',
				imgInfo: 'Notícia 3',
			},
		] 
    },
    getters:{
        getNews(state){
            return state.news
        }
    },
}
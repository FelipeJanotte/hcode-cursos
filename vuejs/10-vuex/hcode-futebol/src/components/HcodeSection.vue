<template>
	<div>
		<div class="container">
			<div class="row mt-5">
				<h3>Você está vendo notícias do: {{ championship }}</h3>
			</div>
		</div>

		<component :is="currentComponent">

		</component>


		<div class="container">
			<div class="row my-club mt-5">
				<div class="col-6">
					<h2>Seu clube é: {{ myClub }}</h2>
				</div>
				<div class="col-6">
					<HcodeSectionInput/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HcodeSectionBanner from './HcodeSectionBanner';
import HcodeSectionInput from './HcodeSectionInput';
import { mapGetters } from 'vuex'
export default {
	components: {
		HcodeSectionBanner,
		HcodeSectionNews: () => import('./HcodeSectionNews'),
		HcodeSectionInput,
	},
	props: {
		currentComponent: String
	},
	data() {
		return {
		};
	},
	computed:{ 
		...mapGetters({
			championship: 'getChampionship',
			myClub: 'getClubName'
		})
		// championship(){
		// 	return this.$store.getters.getChampionship
		// },
		// ...mapState(['championship']),
		// ...mapState({
		// 	myClub:'clubName'
		// })
	}
	
};
</script>

<style scoped>
</style>
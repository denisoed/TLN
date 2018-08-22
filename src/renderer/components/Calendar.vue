<template>
	<div id="calen">
		<h1>My Calendar</h1>
		<calendar-view
			:show-date="showDate"
			@show-date-change="setShowDate"
			class="theme-default holiday-us-traditional holiday-us-official"
		/>
	</div>
</template>

<script>
	import CalendarView from "vue-simple-calendar"
	require("vue-simple-calendar/dist/static/css/default.css")
	require("vue-simple-calendar/dist/static/css/holidays-us.css")

	export default {
		name: 'app',
		data: function() {
			return { showDate: new Date() }
		},
		components: {
			CalendarView
		},
		methods: {
			setShowDate(d) {
				this.showDate = d;
			},
		}
	}
</script>
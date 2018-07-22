<template>
    <div class="action-item">
        <div class="action-item_info">
            <h4>{{ this.actionInfoData.title }}</h4>
            <p>{{ this.actionInfoData.minutes }}</p>
            <div class="timer">{{ this.prettyTime | prettify }}</div>
        </div>
        <button class="start-action" @click="runAction" v-if="!isRunning && !ifFinish"><icon name="stopwatch"/></button>
        <button class="start-action" @click="pauseAction" v-if="isRunning && !ifFinish"><icon name="pause"/></button>
        <button class="start-action" @click="finishAction" v-if="ifFinish"><icon name="times"/></button>
    </div>
</template>

<script>
  import sound from '../../assets/sound.mp3'

  export default {
    name: 'action-item',
    props: ['actionInfoData'],
    data: function () {
      return {
        isRunning: false,
        ifFinish: false,
        time: (this.actionInfoData.minutes * 60),
        timer:null,
        sound:new Audio(sound)
      }
    },
    filters: {
        prettify : function(value) {
            let data = value.split(':')
            let minutes = data[0]
            let secondes = data[1]
            if (minutes < 10) {
                minutes = "0"+minutes
            }
            if (secondes < 10) {
                secondes = "0"+secondes
            }
            return minutes+":"+secondes
        }
    },
    computed: {
		prettyTime () {
            let time = this.time / 60
            let minutes = parseInt(time)
            let secondes = Math.round((time - minutes) * 60)
            return minutes+":"+secondes
		}
	},
    methods: {
        runAction() {
            this.isRunning = true
            if (!this.timer) {
                this.timer = setInterval( () => {
                    if (this.time > 0) {
                        this.time--
                    } else {
                        clearInterval(this.timer)
                        this.ifFinish = true
                        this.sound.loop = true
                        this.sound.play()
                    }
                }, 1000 )
            }
        },
        pauseAction() {
            this.isRunning = false
            clearInterval(this.timer)
            this.timer = null
        },
        finishAction() {
            this.ifFinish = false
            this.isRunning = false
            this.sound.pause()
        },
    }
  }
</script>

<style>

</style>

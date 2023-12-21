'use strict'
const User = use('App/Models/User')
const Stopwatch = require('timer-stopwatch');

class TimerController {
    constructor({socket, request, auth }) {
        this.socket = socket
        this.request = request
        this.auth  = auth
        this.timer = null
    }

    async onUserConnected () {
        this.auth.user.connected = 1
        await this.auth.user.save()
    }

    async onStartTimer () {
        console.log('onStartTimer')
        this.timer = new Stopwatch(this.auth.user.timeremaining * 1000, {
            refreshRateMS: 1000,		// How often the clock should be updated
            almostDoneMS: 1000, 	// When counting down - this event will fire with this many milliseconds remaining on the clock
        });
        this.timer.start();

        this.timer.onTime(async function(time) {
            let seconds_remaining = time.ms / 1000
            console.log(seconds_remaining);
            if (seconds_remaining === 0) {
                this.timer.stop();
                try {
                    this.socket.emit('no-time');
                } catch (e) {
                }
                this.auth.user.timeremaining = 0
                await this.auth.user.save()
            }
            else {
                console.log(seconds_remaining);
                try {
                    this.socket.emit(this.auth.user.id.toString(), seconds_remaining);
                } catch (e) {
                }

                if (Math.round(seconds_remaining) % 10 === 0) {
                    this.auth.user.timeremaining = seconds_remaining
                    await this.auth.user.save()
                }
            }
        }.bind(this));
    }

    async onStopTimer () {
        console.log('onStopTimer')

        this.auth.user.timeremaining = this.timer.ms / 1000
        await this.auth.user.save()
        this.timer.stop();
    }

    async onClose () {
        console.log('onClose')
        this.auth.user.connected = 0
        this.auth.user.timeremaining = this.timer.ms / 1000
        await this.auth.user.save()
        this.timer.stop()
    }
}

module.exports = TimerController

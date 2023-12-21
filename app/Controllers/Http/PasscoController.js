'use strict'
const Ws = use('Ws')
const sleep = require('system-sleep');

class PasscoController {

     passco({view, auth, response, session}) {
        /*console.log('start sleep')
        await sleep(1000)
        console.log('end sleep')*/
        if (auth.user.connected === 1) {
            Ws
                .getChannel('timer')
                .topic('timer')
            console.log('connected')
            if (session.get('is reload')) {
                console.log('is reload', 'setting is reload to false')
                session.put('is reload', false)

                console.log('start sleep')
                sleep(3000)
                console.log('end sleep')

                console.log('rendering passco')
                return view.render('past_questions/passco')
            }
            else {
                console.log('is not reload')
                session.put('is reload', true)

                return response.route('passco')
            }
        }
        else {
            console.log('disconnected')
            return view.render('past_questions/passco')
        }




    }
}

module.exports = PasscoController

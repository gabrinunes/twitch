import axios from 'axios'

const api= axios.create({
    headers:{
        "Client-ID": '05hfp1og9a55075y89l848owe9dzgu',
         "Accept": 'application/vnd.twitchtv.v5+json'

    }
})

export default api
    var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString();
    var formattedTime = currentDate.toLocaleTimeString();
    var webhook = 'https://discord.com/api/webhooks/1255297515696164884/c_zPpW-0AmYwU2JOU_yYic_KVArTP128nkCBHAiNuxUkerhaNv48NX_Ih94HUZu8g5zlx';
    var message = {
        content: '> **Nouvelle connexion au site: https://nvie2024.github.io/N-Vie/** \n> **IP:** '+ip+'\n> **Le: **'+formattedDate+' **à:**'+formattedTime+'\n> © Myzer | Myzer.dev'
    };

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});
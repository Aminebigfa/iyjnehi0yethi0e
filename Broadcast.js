const Discord = require("discord.js");
  const kboosh = new Discord.Client();
    const kbooshtoken = "MzI3NzM2NTMyOTMwOTIwNDUw.DGmnLA.QFbtYXPzTAvZsoFW70wNLyVm3lE"
      kboosh.on('ready', () => {
        kboosh.user.setGame(`胺发𝒜ℳℐ𝒩ℰツ Broadcast`,'https://www.twitch.tv/TEST-Broadcast');
          console.log('Im Ready!');
  
        });

  kboosh.on('message', message => {
    if (message.content.split(' ')[0] == '*br')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   kboosh.on("message", message => {
       var prefix = "%";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "b")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
kboosh.login('NjUzMTM1NDI0NjY3MTIzNzEy.XeymEw.-ZGbtgHXvz41WO9gc8QBDAva_z4');
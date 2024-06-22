//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/0f8c2b3a0a56eba1f9173.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `©Turbo for test`.trim() },  
            header: {
                title: `ازيك يا @${mentionId.split('@')[0]}`,
                subtitle: `test`,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: 'دوس هنا👀',
  						  		sections: [
  						  			{
  						  				title: 'القائمة',
  							  	    highlight_label: 'مميز',
  						  		    rows: [
  						  		    	{
  						  		    		header: 'لجميع الاوامر',
  										      title: '.اوامر',
  									    	  description: '',
  								    		  id: '.اوامر'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: 'مميز',
  						  				rows: [
  						  					{
  						  		    		header: 'رقم المطور',
  										      title: '.المطور',
  									    	  description: '',
  								    		  id: '.المطور'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'للتسجيل في البوت',
  										      title: '.تسجيل',
  									    	  description: '',
  								    		  id: '.تسجيل'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'quick_reply',
                                      id: `message`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'url',
                                      url: 'https://www.google.com',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'call',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'نسخ',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'copy',
                                      id: 'تربو عمي🤭',
                                      copy_code: 'message'
                                  })
                              },
                              {
                                  name: 'cta_reminder',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'cta_reminder',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'cta_cancel_reminder',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'cta_cancel_reminder',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'address_message',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'address_message',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'send_location',
                                  buttonParamsJson: JSON.stringify({
                                  })
                              }
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(القائمه)$/i;
export default handler;

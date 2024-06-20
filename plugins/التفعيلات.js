let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '   ─『 التفعيلات 』─ '
            },
            body: {
              text: 'حدد التفعيل المطلوب\n*مرحبا اليك قأىمه التفعيلات*\n'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'التفعيلات',
                    sections: [
                      {
                        title: 'التفعيلات',
                        highlight_label: 'التفعيلات',
                        rows: [
   {
                            header: 'التفعيلات',
                            title: 'الامر',
                            description: '',
                            id: '.المهام'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                },
{
                     name: "cta_url",
           buttonParamsJson: '{"display_text":"💕قناه البوت💐","url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01"}'
           },
    {
              name: "quick_reply",
              buttonParamsJson: '{"display_text":".on مضاداللينكات2","id":"message"}'
            },
     {
         name: "quick_reply",
              buttonParamsJson: '{"display_text":".off مضاداللينكات2","id":"message"}'
            },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".on مضادالشتائم","id":"message"}'
            },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".off مضادالشتائم","id":"message"}'
            },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".on تقيد","id":"message"}'
            },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".off تقيد","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".on الصحين","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".off الصحين","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".on الادمن-فقط","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".off الادمن-فقط","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".on مضادالخاص","id":"message"}'
          },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".off مضادالخاص","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".on الترحيب","id":"message"}'
          },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".off الترحيب","id":"message"}'
            }
              ]
            }
          }
        }
      }
    }, {})

}
          

handler.help = ['info']
handler.tags = ['main']
handler.command = ['تفعيل','اوقف','on','off','التفعيلات']

export default handler

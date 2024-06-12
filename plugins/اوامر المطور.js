let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*⌘──〘 👑اوامـر الـمـطـور👑 〙── ⌘*'
            },
            body: {
              text: '*♥☺️مرحبا بك يا مطوري زيريف اتمنى ان تكون بخير☺️♥*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '🔥قـائـمــه اوامـر الـمـطـور🔥',
                    sections: [
                      {
                        title:'الـاوامـر',
                        highlight_label: '👑اوامر المطور👑',
                        rows: [
                              {
                           header: 'عشان تضيف لحد اكس بي',
                            title: '.ضيف_اكس_بي',
                            description: '',
                            id: '.ضيف_اكس_بي'
                          },
                          {
                            header: 'عشان تنشر رسالتك للكل',
                            title: '.نشر',
                            description: '',
                            id: '.نشر'
                          },
                          {
                            header: 'عشان تدي نفسك مشرف',
                            title: '.ارفعني',
                            description: '',
                            id: '.ارفعني'
                          },
                          {
                            header: 'عشان تضيفني في جروب',
                            title: '.انضم',
                            description: '',
                            id: '.انضم'
                          },
                          {
                            header: 'عشان احظرلك شات',
                            title: '.حظر',
                            description: '',
                            id: 'حظر'
                          },
                          {
                            header: 'عشان ابندلك شخص من البوت',
                            title: '.بان',
                            description: '',
                            id: '.بان'
                          },
                          {
                            header: 'عشان افك البان عن شخص',
                            title: '.الغاء_البان',
                            description: '',
                            id: '.الغاء_البان'
                          },
                          {
                            header: 'عشان احظر رقم شخص',
                            title: '.بلوك',
                            description: '',
                            id: '.بلوك'
                          },
                          {
                            header: 'عشان اضيف حد بريم',
                            title: '.بريم',
                            description: '',
                            id: '.بريم'
                          },
                          {
                            header: 'عشان الغيلك حظر الشات',
                            title: 'الغاء',
                            description: '',
                            id: '.الغاء'
                          },
                          {
                            header: 'عشان اجيبلك ملف من البلاجينز',
                            title: '.ملف',
                            description: '',
                            id: '.ملف'
                          },
                          {
                            header: 'عشان اشيلك البلوك عن حد',
                            title: '.رفع_البلوك',
                            description: '',
                            id: '.رفع_البلوك'
                          },
                          {
                            header: 'لتنظيف الجلسه',
                            title: '.تنظيف',
                            description: '',
                            id: '.تنظيف'
                          },
                          {
                            header: 'لقتل شخص',
                            title: '.موت',
                            description: '',
                            id: '.موت'
                          },
                          {
                            header: 'عشان تضيف لحد جواهر',
                            title: '.ضيف_جواهر',
                            description: '',
                            id: '.ضيف_جواهر'
                          },
                          {
                            header: '☠️لتصفيه جروب☠️',
                            title: '☠️بحذر☠️',
                            description: 'خطر',
                            id: '.هاك'
                                 }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
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
handler.command = ['اوامري']

handler.rowner = true

export default handler


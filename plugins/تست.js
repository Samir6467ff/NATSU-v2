let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*⌘──〘 *♥📃القوائم📃♥* 〙── ⌘*'
            },
            body: {
              text: '*⌘──〘 *♥يرجى عدم الاسبام♥* 〙── ⌘*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '🦶دوس عليا🦶',
                    sections: [
                      {
                        title: 'اوامر البوت',
                        highlight_label: 'اختار',
                        rows: [
                          {
                            header: 'للتسجيل في البوت',
                            title: '.تسجيل',
                            description: '',
                            id: '.تسجيل'
                          },
                          {
                            header: 'لي الغاء التسجيل في البوت',
                            title: '.الغاء-التسجيل',
                            description: '',
                            id: '.الغاء-تسجيل'
                          },
                          {
                            header: 'للتعدين',
                            title: '.تعدين',
                            description: '',
                            id: '.تعدين'
                          },
                          {
                            header: 'لمعرفه لفلك',
                            title: '.لفل',
                            description: '',
                            id: '.لفل'
                          },
                          {
                            header: 'لتجميع الراتب الشهري',
                            title: '.الشهري',
                            description: '',
                            id: '.الشهري'
                          },
                          {
                            header: 'لتجميع الراتب اليومي',
                            title: '.يومي',
                            description: '',
                            id: '.يومي'
                          },
                          {
                            header: 'لمعرفه صحتك',
                            title: '.صحتي',
                            description: '',
                            id: '.صحتي'
                          },
                          {
                            header: 'لمعرفه المصنفين المصنفين في البوت',
                            title: '.تصنيف',
                            description: '',
                            id: '.تصنيف'
                          },
                          {
                            header: 'لطرد احد الاعضاء',
                            title: '.طرد',
                            description: '',
                            id: '.طرد'
                          },
                          {
                            header: 'لفتح الجروب',
                            title: '.فتح الجروب',
                            description: '',
                            id: '.فتح الجروب'
                          },
                          {
                            header: 'لقفل الجروب',
                            title: '.قفل الجروب',
                            description: '',
                            id: '.قفل الجروب'
                          },
                          {
                            header: 'لمعرفه المشرفين الموجودين',
                            title: '.المشرفين',
                            description: '',
                            id: '.المشرفين'
                          },
                          {
                            header: 'لتحذير شخص',
                            title: '.تحذير',
                            description: '',
                            id: '.تحذير'
                          },
                          {
                            header: 'لمنشن الجروب',
                            title: '.منشن',
                            description: '',
                            id: '.منشن'
                          },
                          {
                            header: 'لحذف تحذير شخص',
                            title: '.حذف_تحذير',
                            description: '',
                            id: '.حذف_تحذير'
                          },
                          {
                            header: 'لارسال لينك الجروب',
                            title: '.لينك',
                            description: '',
                            id: '.لينك'
                          },
                          {
                            header: 'للعبه تاج',
                            title: '.تاج',
                            description: '',
                            id:'.تاج'
                          },
                          {
                            header: 'لمعرفه الطقس',
                            title: '.الطقس',
                            description: '',
                            id: '.الطقس'
                          },
                          {
                            header: 'لمعلومات الجروب',
                            title: '.الجروب',
                            description: '',
                            id: '.الجروب'
                          },
                          {
                            header: 'لجلب حلفيه عشواءيه',
                            title: '.خلفيه',
                            description: '',
                            id: '.خلفيه'
                          },
                          {
                            header: 'لفيديو ايدت عشواءي',
                            title: '.ايدت',
                            description: '',
                            id: '.ايدت'
                          },
                          {
                            header: 'للتحميل من جوجل كروم',
                            title: '.تحميل',
                            description: '',
                            id: '.تحميل'
                          },
                          {
                            header: 'لجلب صوره من جوجل',
                            title: '.صورة',
                            description: '',
                            id: '.صورة'
                          },
                          {
                            header: 'للبحث في يوتيوب',
                            title: '.بحث',
                            description: '',
                            id: '.بحث'
                          },
                          {
                            header: 'لتشغيل اغنيه او فيديو mp3',
                            title: '.شغل',
                            description: '',
                            id: '.شغل'
                          },
                          {
                            header: 'لرسم بالذكاء الاصطناعي',
                            title: '.ارسم',
                            description: '',
                            id: '.ارسم'
                          },
                          {
                            header: 'للتحميل من فيسبوك',
                            title: '.فيسبوك',
                            description: '',
                            id: '.فيسبوك'
                          },
                          {
                            header: 'للتحميل من يوتيوب',
                            title: '.يوتيوب',
                            description: '',
                            id: '.يوتيوب'
                          },
                          {
                            header: 'للتنزيل من انتسجرام',
                            title: '.انستا',
                            description: '',
                            id: '.انستا'
                          },
                          {
                            header: 'للعبه عين',
                            title: '.عين',
                            description: '',
                            id: '.عين'
                          },
                          {
                            header: 'للعبه احزر',
                            title: '.احزر',
                            description: '',
                            id: '.احزر'
                          },
                          {
                            header: 'للعبه فعاليه',
                            title: '.فعاليه',
                            description: '',
                            id: '.فعاليه'
                          },
                          {
                            header: 'لوضع تعليق في تويتر',
                            title: '.تويت',
                            description: '',
                            id: '.تويت'
                          },
                          {
                            header: 'لتحويل صوره بروفايل شخص لشاذ',
                            title: '.شاذ',
                            description: '',
                            id: '.شاذ'
                          },
                          {
                            header: 'لوضع تعليق في اليوتيوب',
                            title: '.تعليق',
                            description: '',
                            id: '.تعليق'
                          },
                          {
                            header: 'للعبه لو خيروك',
                            title: '.لو',
                            description: '',
                            id: '.لو'
                          },
                          {
                            header: 'للعبه علم',
                            title: '.علم',
                            description: '',
                            id: '.علم'
                          },
                          {
                            header: 'للعبه فكك',
                            title: '.فكك',
                            description: '',
                            id: '.فكك'
                          },
                          {
                            header: 'للعبه X/O',
                            title: '.اكس',
                            description: '',
                            id: '.اكس'
                          },
                          {
                            header: 'لعبه حجر ورق مقص',
                            title: '.تحدي',
                            description: '',
                            id: '.تحدي'
                          },
                          {
                            header: 'للعبه كت',
                            title: '.كت',
                            description: '',
                            id: '.كت'
                          },
                          {
                            header: 'للعبه اموجي',
                            title: '.اموجي',
                            description: '',
                            id: '.اموجي'
                          },
                          {
                            header: 'للاسئله الدينيه',
                            title: '.دين',
                            description: '',
                            id: '.دين'
                          },
                          {
                            header: 'للاسئله الحسابيه',
                            title: '.حساب',
                            description: '',
                            id: '.حساب'
                          },
                          {
                            header: 'للعبه هل',
                            title: '.هل',
                            description: '',
                            id: '.هل'
                          },
                          {
                            header: 'لجلب نرد عشواءي',
                            title: '.نرد',
                            description: '',
                            id: '.نرد'
                          },
                          {
                            header: 'للعبه طلاق',
                            title: '.طلاق',
                            description: '',
                            id: '.طلاق'
                          },
                          {
                            header: 'لمنشن اثنين عشواءي صداقه',
                            title: '.صداقه',
                            description: '',
                            id: '.صداقه'
                          },
                          {
                            header: 'توب 10 عشواءي',
                            title: '.توب',
                            description: '',
                            id: '.توب'                        
                 },
                          {
                            header: 'للزواج منشن 2 عشواءي',
                            title: '.زواج',
                            description: '',
                            id: '.زواج'

                          },
                          {
                            header: 'للعبه حظ',
                            title: '.حظ',
                            description: '',
                            id: '.حظ'
                          },
                          {
                            header: 'لتحويل الملصق او الصوره لجيف',
                            title: '.لجيف',
                            description: '',
                            id: '.لجيف'
                          },
                          {
                            header: 'لتحويل ملصق متحرك لفيديو',
                            title: '.لفيديو',
                            description: '',
                            id: '.لفيديو'
                          },
                          {
                            header: 'لتحويل ملصق ثابت لصوره',
                            title: '.لصوره',
                            description: '',
                            id:'.لصوره'
                          },
                          {
                            header: 'لتحويل صوره (شخص) لكرتون',
                            title: '.لكرتون',
                            description: '',
                            id: '.لكرتون'
                          },
                          {
                            header: 'لتحويل اي فيديو او صوره لملصق طويل',
                            title: '.كامل',
                            description: '',
                            id: '.كامل'
                          },
                          {
                            header: 'لزغرفه النصوص الانجليزيه',
                            title: '.زغرفه',
                            description: '',
                            id: '.زغرفه'
                          },
                          {
                            header: 'لتحويل فيديو او صوره لملصق قصير',
                            title: '.ملصق',
                            description: '',
                            id: '.ملصق'
                          },
                          {
                            header: 'لوضع حقوقق على ملصق',
                            title: '.سرقه',
                            description: '',
                            id: '.سرقه'
                          },
                          {
                            header: 'لتحويل فيديو او صوره لرابط',
                            title: '.تليجراف',
                            description: '',
                            id: '.تليجراف'
                          },
                          {
                            header: 'لجلب الكود الخاص بك في البوت',
                            title: '.رقمي',
                            description: '',
                            id: '.رقمي'
                          },
                          {
                            header: 'لجلب معلوماتك',
                            title: '.بروفايل',
                            description: '',
                            id: '.بروفايل'
                          },
                          {
                            header: 'لجلب ميمز انمي مضحك',
                            title: '.ميمز',
                            description: '',
                            id: '.ميمز'
                          },
                          {
                            header: 'للتطقيم اولاد',
                            title: '.تطقيم_اولاد',
                            description: '',
                            id: '.تطقيم_اولاد'
                          },
                          {
                            header: 'للتطقيم للبنات',
                            title: '.تطقيم_بنات',
                            description: '',
                            id: '.تطقيم_بنات'
                          },
                          {
                            header: 'للتطقيم ولد وبنت',
                            title: '.تطقيم',
                            description: '',
                            id: '.تطقيم'
                          },
                          {
                            header: 'لمعرفه المميزين في البوت',
                            title: '.المميزين',
                            description: '',
                            id: '.المميزين'
                          },
                          {
                            header: 'لجلب صور قطه عشواءي',
                            title: '.قطه',
                            description: '',
                            id: '.قطه'
                          },
                          {
                            header: 'لتحويل اي نص لباركود',
                            title: '.باركود',
                            description: '',
                            id: '.باركود'
                          },
                          {
                            header: 'لمعرفه عدد مستخدمين البوت في الوقت الحالي',
                            title: '.المستخدمين',
                            description: '',
                            id: '.المستخدمين'
                          },
                          {
                            header: 'لتصميم لوجو بسيط',
                            title: '.تصميم',
                            description: '',
                            id: '.تصميم'
                          },
                          {
                            header: 'لابلاغ المطور بمشكله',
                            title: '.بلاغ',
                            description: '',
                            id: '.بلاغ'
                          },
                          {
                            header: 'للعبه بنك',
                            title: '.بنك',
                            description: '',
                            id: '.البنك'
                          },
                          {
                            header: 'لمعرفه عدد الماسك',
                            title: '.الماس',
                            description: '',
                            id: '.الماس'
                          },
                          {
                            header: 'لمعرفه عدد الماسك',
                            title: '.الماس',
                            description: '',
                            id: '.الماس'
                          },
                          {
                            header: 'لوضع شخص مشرف',
                            title: '.ترقيه',
                            description: '',
                            id: '.ترقيه'
                          },
                          {
                            header: 'للذكاء الاصطناعي',
                            title: '.بوت',
                            description: '',
                            id: '.بوت'
                          },
                         {
                            header: 'لازاله شخص من المشرف',
                            title: '.اععفاء',
                            description: '',
                            id: '.اعفاء'
                         },
                        {
       header: 'لوضع شخص مشرف',
                            title: '.ترقيه',
                            description: '',
                            id: '.ترقيه'
                          },
                          {
                            header: 'للذكاء الاصطناعي',
                            title: '.بوت',
                            description: '',
                            id: '.بوت'
                          },
                         {
                            header: 'لاضافه لقبك في البوت',
                            title: '.لقبني',
                            description: '',
                            id: '.لقبني'
                         },
                          {
                            header: '👑بدايه اوامر المطور👑',
                            title: '👑معلومات المطور👑',
                            description: '',
                            id: '.المطور'
                         },
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
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''

                },
{
              name: "quick_reply",
              buttonParamsJson: '{"display_text":".المطور","id":"message"}'
            },
     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"🔥قـنـاتـي💕","url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01","merchant_url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01"}'
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
handler.command = ['تست']

export default handler

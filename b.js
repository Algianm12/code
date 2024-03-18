const { executablePath } = require('puppeteer');
const ptr = require('puppeteer');
const delay = require('delay');
const moment = require('moment');
const randomstring = require("randomstring");
const { ELOOP } = require('constants');

(async() => 
    {
        
        const width = 1200
         const height = 700

        const browser = await ptr.launch({
            headless: false,
            timeout : 99999999,
            defaultViewport: {
                width,
                height
            }
        });
        
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);
        await page.goto('https://discord.com/channels/873856189207822376/1060781142535585792',{waitUntil: 'load'});
        var readlineSync = require('readline-sync');
        var cekip = readlineSync.question(`[${(moment().format('HH:mm:ss'))}] ENTER KALO SUDAH LOGIN `);
        
         
       for (i = 1;i < 100000; i++)
        {
            const comment ="#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div.content-1SgpWY > div.chat-2ZfjoI > div > main > form > div.channelTextArea-1FufC0.channelTextArea-1VQBuV > div.scrollableContainer-15eg7h.webkit-QgSAqd > div > div.textArea-2CLwUE.textAreaSlate-9-y-k2.slateContainer-3x9zil > div > div.markup-eYLPri.editor-H2NA06.slateTextArea-27tjG0.fontSize16Padding-XoMpjI"
            //COPY DARI SINI DAN GANTI LINK CHANNELNYA
            try
            {
                await page.goto('https://discord.com/channels/1064747713272500244/1064751730249695242',{waitUntil : 'load'})
                const msg5 = `div[class="markup-eYLPri messageContent-2t3eCI"]`;
                
                await page.waitForSelector(msg5)
                const msg3 = await page.$eval(msg5,(el) => el.innerText);
                console.log(msg3)
                await page.waitForSelector(comment,{timeout : 99999999})
                await page.type(comment,msg3)
                await delay(4000)

                for(hapus = 0;hapus <randomstring.generate({length: 1,charset: '3214'});hapus++)
                {
                    await page.keyboard.press('ArrowLeft')
                    await delay(500)
                   
                };
                await page.keyboard.press('Space')
                await delay(1000)

                await page.keyboard.press('Enter');
                await delay(5000)
                console.log(`[${(moment().format('HH:mm:ss'))}] Berhasil Komentar => "${msg3}"`)
                const delayrandom = randomstring.generate({length: 4,charset: '987654'}); 
                const delayrandom1 = '6' + delayrandom
                console.log(`Memulai Chat lagi setelah ${delayrandom1} Ms`)
                console.log('================================================================================')
                await delay(delayrandom1)
               
            }
            catch(e)
            {
                console.log(e)
                console.log("GAGAL CHAT BANG")
            }
           //STOP SAMPAI SINI
           try
           {
               await page.goto('https://discord.com/channels/1064747713272500244/1064759452575727657',{waitUntil : 'load'})
               const msg5 = `div[class="markup-eYLPri messageContent-2t3eCI"]`;
               
               await page.waitForSelector(msg5)
               const msg3 = await page.$eval(msg5,(el) => el.innerText);
               console.log(msg3)
               await page.waitForSelector(comment,{timeout : 99999999})
               await page.type(comment,msg3)
               await delay(4000)

               for(hapus = 0;hapus <randomstring.generate({length: 1,charset: '3214'});hapus++)
               {
                   await page.keyboard.press('ArrowLeft')
                   await delay(500)
                  
               };
               await page.keyboard.press('Space')
               await delay(1000)

               await page.keyboard.press('Enter');
               await delay(5000)
               console.log(`[${(moment().format('HH:mm:ss'))}] Berhasil Komentar => "${msg3}"`) 
               const delayrandom = randomstring.generate({length: 4,charset: '987654'}); 
               const delayrandom1 = '6' + delayrandom
               console.log(`Memulai Chat lagi setelah ${delayrandom1} Ms`)
               console.log('================================================================================')
               await delay(delayrandom1)
              
           }
           catch(e)
           {
               console.log(e)
               console.log("GAGAL CHAT BANG")
           }

           try
           {
               await page.goto('https://discord.com/channels/1064747713272500244/1064751730249695242',{waitUntil : 'load'})
               const msg5 = `div[class="markup-eYLPri messageContent-2t3eCI"]`;
               
               await page.waitForSelector(msg5)
               const msg3 = await page.$eval(msg5,(el) => el.innerText);
               console.log(msg3)
               await page.waitForSelector(comment,{timeout : 99999999})
               await page.type(comment,msg3)
               await delay(4000)

               for(hapus = 0;hapus <randomstring.generate({length: 1,charset: '3214'});hapus++)
               {
                   await page.keyboard.press('ArrowLeft')
                   await delay(500)
                  
               };
               await page.keyboard.press('Space')
               await delay(1000)

               await page.keyboard.press('Enter');
               await delay(5000)
               console.log(`[${(moment().format('HH:mm:ss'))}] Berhasil Komentar => "${msg3}"`)
               const delayrandom = randomstring.generate({length: 4,charset: '987654'}); 
               const delayrandom1 = '6' + delayrandom
               console.log(`Memulai Chat lagi setelah ${delayrandom1} Ms`)
               console.log('================================================================================')
               await delay(delayrandom1)
              
           }
           catch(e)
           {
               console.log(e)
               console.log("GAGAL CHAT BANG")
           }
            
           try
           {
               await page.goto('https://discord.com/channels/1064747713272500244/1064759452575727657',{waitUntil : 'load'})
               const msg5 = `div[class="markup-eYLPri messageContent-2t3eCI"]`;
               
               await page.waitForSelector(msg5)
               const msg3 = await page.$eval(msg5,(el) => el.innerText);
               console.log(msg3)
               await page.waitForSelector(comment,{timeout : 99999999})
               await page.type(comment,msg3)
               await delay(4000)

               for(hapus = 0;hapus <randomstring.generate({length: 1,charset: '3214'});hapus++)
               {
                   await page.keyboard.press('ArrowLeft')
                   await delay(500)
                  
               };
               await page.keyboard.press('Space')
               await delay(1000)

               await page.keyboard.press('Enter');
               await delay(5000)
               console.log(`[${(moment().format('HH:mm:ss'))}] Berhasil Komentar => "${msg3}"`)
               const delayrandom = randomstring.generate({length: 4,charset: '987654'}); 
               const delayrandom1 = '6' + delayrandom
               console.log(`Memulai Chat lagi setelah ${delayrandom1} Ms`)
               console.log('================================================================================')
               await delay(delayrandom1)
              
           }
           catch(e)
           {
               console.log(e)
               console.log("GAGAL CHAT BANG")
           }


             
           try
           {
               await page.goto('https://discord.com/channels/1064747713272500244/1064751730249695242',{waitUntil : 'load'})
               const msg5 = `div[class="markup-eYLPri messageContent-2t3eCI"]`;
               
               await page.waitForSelector(msg5)
               const msg3 = await page.$eval(msg5,(el) => el.innerText);
               console.log(msg3)
               await page.waitForSelector(comment,{timeout : 99999999})
               await page.type(comment,msg3)
               await delay(4000)

               for(hapus = 0;hapus <randomstring.generate({length: 1,charset: '3214'});hapus++)
               {
                   await page.keyboard.press('ArrowLeft')
                   await delay(500)
                  
               };
               await page.keyboard.press('Space')
               await delay(1000)

               await page.keyboard.press('Enter');
               await delay(5000)
               console.log(`[${(moment().format('HH:mm:ss'))}] Berhasil Komentar => "${msg3}"`)
               const delayrandom = randomstring.generate({length: 4,charset: '987654'}); 
               const delayrandom1 = '6' + delayrandom
               console.log(`Memulai Chat lagi setelah ${delayrandom1} Ms`)
               console.log('================================================================================')
               await delay(delayrandom1)
              
           }
           catch(e)
           {
               console.log("GAGAL CHAT BANG")
           }


           try
           {
               await page.goto('https://discord.com/channels/1064747713272500244/1064759452575727657',{waitUntil : 'load'})
               const msg5 = `div[class="markup-eYLPri messageContent-2t3eCI"]`;
               
               await page.waitForSelector(msg5)
               const msg3 = await page.$eval(msg5,(el) => el.innerText);
               await page.waitForSelector(comment,{timeout : 99999999})
               await page.type(comment,msg3)
               await delay(4000)

               for(hapus = 0;hapus <randomstring.generate({length: 1,charset: '3214'});hapus++)
               {
                   await page.keyboard.press('ArrowLeft')
                   await delay(500)
                  
               };
               await page.keyboard.press('Space')
               await delay(1000)

               await page.keyboard.press('Enter');
               await delay(5000)
               console.log(`[${(moment().format('HH:mm:ss'))}] Berhasil Komentar => "${msg3}"`)
               const delayrandom = randomstring.generate({length: 4,charset: '987654'}); 
               const delayrandom1 = '6' + delayrandom
               console.log(`Memulai Chat lagi setelah ${delayrandom1} Ms`)
               console.log('================================================================================')
               await delay(delayrandom1)
              
           }
           catch(e)
           {
               console.log(e)
               console.log("GAGAL CHAT BANG")
           }
           
        };
        
        
    }
    
)();
 

        
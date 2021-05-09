const puppeteer=require("puppeteer")

const email="solosit724@ffuqzt.com"//edit your email
const userId="nimasah455"//edit your userId
const password="Password455"//edit your password
const source="SBC"//edit with your source railway station code
const destination="MYS"//edit your destination railway station code
const date="10/05/2021"//edit your reservation date dd/mm/yyyy
const trainBook="06531"//edit your train number
const classBook="SL"//edit your class 2S/SL/CC/3A/2A/1A
const tatkal=true//true or false
const mobile="8910748855"//edit your mobile number
const address="#345, 6th main road, 7th cross"//edit your address
const PIN="560072"//edit your PIN
const postOffice="Nagarbhavi S.O"//edit your post office from irctc
let namesInput=["Chet M", "Name Name Name Name"]//edit names from masterlist of your irctc account

async function main(){

    //launches puppeteer
    const browser=puppeteer.launch({
        headless:false,
        defaultViewport:false,
    })
    const page=await (await browser).newPage()

    //goes to irctc.co.in
    await page.goto("https://www.irctc.co.in",{delay:200})

    //clicks ok
    await page.waitForSelector(".btn.btn-primary",{visible:true},{delay:200})
    await page.click(".btn.btn-primary",{delay:200})

    //maximize manually
    //await page.keyboard.down("Alt",{delay:200})
    //await page.keyboard.press("Space",{delay:200})
    //await page.keyboard.up("Alt",{delay:200})
    //await page.keyboard.press("x",{delay:200})

    //if not maximized
    //await page.keyboard.press("Tab",{delay:200})
    //await page.keyboard.press("Tab",{delay:200})
    //await page.keyboard.press("Enter",{delay:200})
    //await page.keyboard.press("Tab",{delay:200})
    //await page.keyboard.press("Enter",{delay:200})
    //or
    //await page.waitForSelector(".h_menu_drop_button.hidden-xs .fa.fa-align-justify",{visible:true},{delay:200})
    //await page.click(".h_menu_drop_button.hidden-xs .fa.fa-align-justify",{delay:200})
    //await page.waitForSelector(".nav-bar.ng-tns-c47-5 .search_btn",{visible:true},{delay:200})
    //await page.click(".nav-bar.ng-tns-c47-5 .search_btn",{delay:200})

    //await page.waitForNavigation({waitUntil: "networkidle2"});

    //enters userId & password
    await page.waitForSelector('[aria-label="Click here to Login in application"]',{visible:true},{delay:200})
    await page.click('[aria-label="Click here to Login in application"]',{delay:200})
    await page.waitForSelector("#userId",{visible:true},{delay:200})
    await page.type("#userId",userId,{delay:100})
    await page.waitForSelector("#pwd",{visible:true},{delay:200})
    await page.type("#pwd",password,{delay:100})
   
    //manually type captcha and wait
    await setTimeout(function(){
        page.keyboard.press('Enter')
    },12000)

    //enters source, destination
    await page.waitForTimeout(20000)
    await page.waitForSelector('[aria-controls="pr_id_1_list"]',{visible:true},{delay:200})
    await page.type('[aria-controls="pr_id_1_list"]',source,{delay:200})
    await page.keyboard.press("Enter",{delay:200})
    await page.waitForSelector('[aria-controls="pr_id_2_list"]',{visible:true},{delay:200})
    await page.keyboard.press("Tab",{delay:200})
    await page.keyboard.press("Tab",{delay:200})
    await page.type('[aria-controls="pr_id_2_list"]',destination,{delay:200})
    
    //clicks the destionation amongst the options
    //await page.waitForSelector('li[id="p-highlighted-option"]',{delay:200})
    //await page.click('li[id="p-highlighted-option"]',{delay:200})
    //await page.waitForSelector(".ng-tns-c58-9.ui-autocomplete-list-item.ui-corner-all.ui-state-highlight.ng-star-inserted",{delay:200})
    //await page.click(".ng-tns-c58-9.ui-autocomplete-list-item.ui-corner-all.ui-state-highlight.ng-star-inserted",{delay:200})
    //await page.waitForSelector('[class="ng-tns-c58-9 ui-autocomplete-list-item ui-corner-all ui-state-highlight ng-star-inserted"]',{delay:200})
    //await page.click('[class="ng-tns-c58-9 ui-autocomplete-list-item ui-corner-all ui-state-highlight ng-star-inserted"]',{delay:200})

    await page.keyboard.press("Enter",{delay:200})
    
    //click on the destination mannually if it doesn't
    await page.waitForTimeout(2000)

    //await page.keyboard.press("Enter",{delay:200})

    //ng-tns-c59-10.ui-inputtext.ui-widget.ui-state-default.ui-corner-all.ng-star-inserted

    //enters date
    await page.waitForSelector('[class="ng-tns-c59-10 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted"]',{delay:200})
    await page.keyboard.press("Tab",{delay:200})
    //triple click not needed
    //await page.click('[class="ng-tns-c59-10 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted"]',{delay:200})
    //await page.click('[class="ng-tns-c59-10 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted"]',{delay:200})
    //await page.click('[class="ng-tns-c59-10 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted"]',{delay:200})
    await page.type('[class="ng-tns-c59-10 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted"]',date,{delay:100})
    
    //chooses tatkal
    if(tatkal){
        await page.waitForSelector('[class="ng-tns-c66-12 ui-dropdown ui-widget ui-state-default ui-corner-all"]',{delay:200})
        await page.click('[class="ng-tns-c66-12 ui-dropdown ui-widget ui-state-default ui-corner-all"]',{delay:200})
    
        await page.waitForSelector('[aria-label="TATKAL"]',{delay:200})
        await page.click('[aria-label="TATKAL"]',{delay:200})
    }

    //clicks on search trains
    await page.waitForSelector('[class="search_btn train_Search"]',{delay:200})
    await page.click('[class="search_btn train_Search"]',{delay:200})

    //gets trains list and matches with trainBook
    await page.waitForTimeout(15000)
    //gets array of information on trains
    await page.waitForSelector(".col-sm-5.col-xs-11.train-heading > strong",{delay:200})
    let trains=await page.$$(".col-sm-5.col-xs-11.train-heading > strong")

    //if we want list of train numbers
    //let trainNos=await []

    //if we want number of trains
    //await console.log(trains.length)

    //for all trains
    for(let i=0; i<trains.length; i++){
        //gets train no
        let train=await page.evaluate(function(ele){
            //gets train info
            let trainInfo=ele.innerText
            //gets train no
            return trainInfo.substring(ele.innerText.length-6,ele.innerText.length-1)
        },trains[i])
        //gets the index of the train to be booked in the array of trains
        if(train==trainBook)
        var trainIndex= await i
        //await trainNos.push(train)
    }
    //await console.log(trainNos)
    //await console.log(trainIndex)
    //await console.log(trainNos[trainIndex])

    // let rootTrains=await page.$$(".form-group.no-pad.col-xs-12.bull-back.border-all")
    // let rootTrain=await rootTrains[trainIndex]

    //gets list of classes in the train to be booked and matches with class to be booked
    //gets array of information of classes in the train to be booked using xpath
    let classes=await page.$x(`/html/body/app-root/app-home/div[3]/div/app-train-list/div[4]/div/div[5]/div[${trainIndex+1}]/div[1]/app-train-avl-enq/div[1]/div[5]/div/table/tr/td/div/div[1]/strong`)
    //for each class in the train to be booked
    for(let j=0; j<classes.length; j++){
        //gets the class name
        let clas=await page.evaluate(function(ele){
            return ele.innerText
        },classes[j])
        //gets the index of class to be booked in the array of classes in the train to be booked
        if(clas.substring(clas.length-3,clas.length-1)==classBook){
            var classIndex=j
            break
        }
    }
    //clicks on the class to be booked in the train to be booked
    await classes[classIndex].click({delay:200})

    //if it shows refresh
    //await page.click('td[class="link ng-star-inserted"] div',{delay:200})
    //or wait to manually select class and presses on enter or clicks on book
    await page.waitForTimeout(2000)
    // await page.keyboard.press("Enter",{delay:200})

    //clicks on book
    await page.waitForSelector('[class="btnDefault train_Search ng-star-inserted"]',{delay:200})
    await page.click('[class="btnDefault train_Search ng-star-inserted"]',{delay:200})

    //clicks on agree
    // await page.waitForSelector('class="ui-button-text ui-clickable"]',{delay:200})
    // await page.click('class="ui-button-text ui-clickable"]',{delay:200})
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    
    //clicks on add passenger based on number of passengers
    for(let k=0; k<namesInput.length-1; k++){
        await page.waitForSelector('div[class="pull-left ng-star-inserted"] span[class="prenext"]',{delay:500})
        await page.click('div[class="pull-left ng-star-inserted"] span[class="prenext"]',{delay:500})
    }

    //gets array of name boxes
    let nameBoxes=await page.$$('[aria-autocomplete="list"]')
    //chooses names in each of the boxes by comparing and matching with each name of the input
    for(let l=0; l<nameBoxes.length; l++){
        await page.waitForTimeout(500)
        //gets name from the input
        let name=await namesInput[l]
        await page.waitForTimeout(500)
        //clicks on name box
        await nameBoxes[l].click({delay:500})
        await page.waitForTimeout(500)
        //gets array of names options from the box
        let namesOptions=await page.$$('li[role="option"] strong')
        await page.waitForTimeout(200)
        //if we want number of options of each box
        //await console.log(namesOptions.length)
        //gets the name from each option for the box
        for(let y=0;y<namesOptions.length;y++){
            await page.waitForTimeout(200)
            let nameGot=await page.evaluate(function(ele){
                return ele.innerText
            },namesOptions[y])
            //matches the name from the options for the box with the name from the input
            if(name==nameGot){
                await page.waitForTimeout(500)
                //clicks on the name from the options based on the name from the input
                await namesOptions[y].click({delay:500})
                await page.waitForTimeout(500)
                break
            }
        }
    }
    //click on last name mannually if not selected
    await page.waitForTimeout(2000)
    //enters mobile, address and PIN
    await page.waitForSelector("#mobileNumber",{delay:200})
    await page.type("#mobileNumber",mobile,{delay:100})
    await page.waitForSelector("#aaa1",{delay:200})
    await page.type("#aaa1",address,{delay:100})
    await page.waitForSelector("#aaa4",{delay:200})
    await page.type("#aaa4",PIN,{delay:100})

    //if multiple post offices are with the same PIN selects post office or select manually
    //clicks on post office
    //await page.click("#address-postOffice",{delay:1000})
    //await page.waitForTimeout(5000)
    //gets the array of names of post offices with the entered PIN
    //let postOffices=await page.$$("#address-postOffice option")
    //await page.waitForTimeout(500)
    //if we want the number of post offices
    //await console.log(postOffices.length)
    //gets the name of each post office
    //for(let i=0; i<postOffices.length; i++){
    //    await page.waitForTimeout(500)
    //gets the name of post office
    //    let office=await page.evaluate(function(ele){
    //        return ele.innerText
    //    },postOffices[i])
    //compares and matchesm the name of post office from the options with the name of post office entered
    //    if(office==postOffice){
    //        await page.waitForTimeout(500)
    //        await postOffices[i].click({delay:200})
    //        await page.waitForTimeout(500)
    //        break
    //    }
    //}

    //selects to book only if confirmed
    await page.waitForSelector("#confirmberths + label",{delay:200})
    await page.click("#confirmberths + label",{delay:200})
    //selects yes for travel insurance
    await page.waitForSelector('p-radiobutton[id="travelInsuranceOptedYes-0"] div[class="ui-radiobutton-box ui-widget ui-state-default"]',{delay:200})
    await page.click('p-radiobutton[id="travelInsuranceOptedYes-0"] div[class="ui-radiobutton-box ui-widget ui-state-default"]',{delay:200})
    //selects on pay by BHIM/UPI
    await page.waitForSelector('p-radiobutton[id="2"] div[class="ui-radiobutton-box ui-widget ui-state-default"]',{delay:200})
    await page.click('p-radiobutton[id="2"] div[class="ui-radiobutton-box ui-widget ui-state-default"]',{delay:200})
    //clicks on continue
    await page.waitForSelector(".train_Search.btnDefault",{delay:200})
    await page.click(".train_Search.btnDefault",{delay:200})
    //enter the captcha it will wait
    await page.waitForTimeout(12000)
    //clicks on continue
    await page.waitForSelector(".train_Search.btnDefault",{delay:200})
    await page.click(".train_Search.btnDefault",{delay:200})
    await page.waitForTimeout(5000)
    //gets array of payment options
    let paymentOptions=await page.$$(".bank-type.col-xs-12.ng-star-inserted")
    //clicks on BHIM/UPI/USSD
    await paymentOptions[1].click({delay:200})
    //clicks on pay using BHIM(powered by PAYTM) also accepts UPI
    await page.waitForSelector('div[id="bank-type"] div[class="col-pad col-xs-12 bank-text"]',{delay:200})
    await page.click('div[id="bank-type"] div[class="col-pad col-xs-12 bank-text"]',{delay:200})
    //clicks on pay and book
    await page.waitForSelector(".btn.btn-primary.hidden-xs.ng-star-inserted",{delay:200})
    await page.click(".btn.btn-primary.hidden-xs.ng-star-inserted",{delay:200})
    //enters mobile number for paytm
    await page.waitForSelector("#inp",{delay:200})
    await page.type("#inp",mobile,{delay:100})
    //clicks on proceed
    await page.waitForSelector('button[class="btn btn-primary w100 pos-r   "]',{delay:200})
    await page.click('button[class="btn btn-primary w100 pos-r   "]',{delay:200})
    //enter OTP to pay and finalize booking
}
main()




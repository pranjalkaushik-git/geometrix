//JS File
console.log('JS Loaded');

// Internal Campaign Impression
let internalCampaigns = document.querySelectorAll('#intcmp');
let internalCampaignNames = []
if(internalCampaigns.length !== 0){
    internalCampaigns.forEach((campaign)=>{
        let campaignName = campaign.href.split("intcmp=")[1]
        internalCampaignNames.push(campaignName);
    })
    console.log(internalCampaignNames);
}


window.addEventListener('load',()=>{
  setTimeout(()=>{
      adobeDataLayer.push(
        {
          event : "internal_campaign_impression",
          data : {
            internalCampaignName : internalCampaignNames.join("|"),
          }
        }
      )
  },1000);

})


setTimeout(window.addEventListener('load',()=>{
  let customEvent  = new CustomEvent('internalCampaign-Impression',{
    detail : {
        internalCampaignNames : internalCampaignNames
    }
  })

  window.dispatchEvent(customEvent);
}),10000)


//Product Listing Page Impression





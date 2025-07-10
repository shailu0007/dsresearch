const pricingDetails = [
    {  path: "Stock-cash-regular",
       stockCashServices :
       {
        table : {
           
           Segment: 500,
           Monthly: 28500,
           Quarterly: 50500,
           HalfYearly: 2002,
           Yearly: "2002",

        },
        
       }
    },
    {
        path: "Stock Future Services",
        stockCashServices: {
             table : {
           name: "Stock Future Services",
           Segment: 2000,
           Monthly: 2800,
           Quarterly: 500,
           HalfYearly: 202,
           Yearly: "2002"
        }
        }
    },
    {
        path: "Nifty Services",
        niftyServices: {
            table: {
                Segment: 1150,
                Monthly: 2850,
                Quarterly: 505,
                HalfYearly: 202,
                Yearly: "2002"
            }
        }
    },
    {
        path:"Stock Option Services",
        stockOptionServices: {
            table: {
                Segment: 11500,
                Monthly: 2850,
                Quarterly: 5050,
                HalfYearly: 2002,
                Yearly: "2002"
            }
        }
    },
    {
        path: "Commodity Services"
        ,
        commodityServices: {
            table: {
                Segment: 1150,
                Monthly: 2850,
                Quarterly: 5000,
                HalfYearly: 202,
                Yearly: "2002"
            }
        }
    },
    {
        path: "Journal Services",
        journalServices: {
            table: {
            Segment: 1100,
            Monthly: 2800,
            Quarterly: 5000,
            HalfYearly: 2202,
            Yearly: "2002"
        }
    }
}
]



export default pricingDetails;

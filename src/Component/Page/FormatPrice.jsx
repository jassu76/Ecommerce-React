

const FormatPrice = ({price}) => {
         
      return Intl.NumberFormat("EN-IN", {
        style : "currency",
        currency: "INR",
        minimumFractionDigits:2,

     
       
      }).format(price/100)
        
}

export default FormatPrice
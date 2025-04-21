export const API_KEY='AIzaSyCQT8wV4wYH2iYnwfapPnJ4Ek3HP77-7tE';

 export const value_converter = (value) => {
   if(value>=1000000){
    return `${(value/1000000).toFixed(1)}M`
   }
   else if(value>=1000){
    return `${(value/1000).toFixed(1)}K`
   }
   else{
    return value
   }
}
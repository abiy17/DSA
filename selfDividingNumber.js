const isSelfDividing =(i)=>{
    let charArray = i.toString().split(``)
    for ( const items of charArray ){
        if( items === 0 || i % parseInt(items) !== 0 ){
            return false
        }
    }
    return(true)
}

var selfDividingNumbers = function(left, right) {
    let result = [  ]
    for(i = left;i <= right;i++){
        if( isSelfDividing(i) ){
            result.push(i)
        }
    }
    console.log(result)
    
};

selfDividingNumbers(47,85)
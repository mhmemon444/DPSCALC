var calc = {
    roll: {
        Roller: function(probability,roll,special){
            var _this = {
                'Prob':probability, //Percentage chance of this roll occurring
                'Roll':roll, //Value of the roll (e.g. attack roll or max hit)
                'Spec':special, //Special parameter:
                //  1 = 100% accurate
                //  2 = Dinh's
                //  4 = invalid parameters (e.g. Invalid Magic Dart)
                //  8 = Karil proc (2nd hitsplat with 50% damage)
                //  16 = Scythe hit 2
                //  32 = Scythe hit 3
                //  
            };
            return _this;
        },
        ApplyFunc: function(arr,args,func){
            console.log(args)
            for(var i=0; i<arr.length; i++){
    
                arr[i] = func(arr[i],args);
            }
            return arr;
        },
        ApplyMult: function(arr,mult){
            if(mult === 1){
                return arr;
            }
            for(var i=0; i<arr.length; i++){
                arr[i].Roll = Math.floor(arr[i].Roll*mult);
            }
            return arr;
        },
        ApplyAdd: function(arr,add){
            if(add === 0){
                return arr;
            }
            for(var i=0; i<arr.length; i++){
                arr[i].Roll = Math.floor(arr[i].Roll+add);
            }
            return arr;
        },
        ApplySplitMult: function(arr,splitarr){
            var newarr = [];
            splitarr.forEach(function(splitar){
                arr.forEach(function(ar){
                    newarr.push(calc.roll.Roller(ar.Prob*splitar.Prob,Math.floor(ar.Roll*splitar.Roll),ar.Spec|splitar.Spec));
                }); 
            });
            return newarr;
        },
        ApplySplitAdd: function(arr,splitarr){
            var newarr = [];
            splitarr.forEach(function(splitar){
                arr.forEach(function(ar){
                    newarr.push(calc.roll.Roller(ar.Prob*splitar.Prob,Math.floor(ar.Roll+splitar.Roll),ar.Spec|splitar.Spec));
                }); 
            });
            return newarr;
        }
    },
    //end roll
    
    check: {
        //Returns elite if wearing elite void, normal if wearing normal void, and 1 if not wearing void.
        //loadout = equipment object
        MVoid: function(loadout, helmet, normal, elite){ 
            if(loadout.head === helmet && loadout.gloves === 'Void knight gloves' && (loadout.torso === 'Elite void top' || loadout.torso === 'Void knight top') && (loadout.legs === 'Elite void robe' || loadout.legs === 'Void knight robe')){
                if(loadout.torso === 'Elite void top' && loadout.legs === 'Elite void robe'){
                    return elite;
                }
                return normal;
            }
            return 1;
        },
    }
    //end check
    
} //end of calc object

export default calc;
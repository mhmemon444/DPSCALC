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
            if(loadout.equipment.head === helmet && loadout.equipment.gloves === 'Void knight gloves' && (loadout.equipment.torso === 'Elite void top' || loadout.equipment.torso === 'Void knight top') && (loadout.equipment.legs === 'Elite void robe' || loadout.equipment.legs === 'Void knight robe')){
                if(loadout.equipment.torso === 'Elite void top' && loadout.equipment.legs === 'Elite void robe'){
                    return elite;
                }
                return normal;
            }
            return 1;
        },
        MMaskSalve: function(loadout, imbuedonly, mask, salve, salve_e){
            var helmets;
            var amulets;
            var amulets_e;
            if(imbuedonly){
                helmets = ['Black mask (i)','Slayer helmet (i)','Black slayer helmet (i)','Green slayer helmet (i)','Red slayer helmet (i)','Purple slayer helmet (i)','Turquoise slayer helmet (i)','Hydra slayer helmet (i)','Twisted slayer helmet (i)'];
                amulets = ['Salve amulet(i)'];
                amulets_e = ['Salve amulet(ei)'];
            } else {
                helmets = ['Black mask','Black mask (i)','Slayer helmet','Slayer helmet (i)','Black slayer helmet','Black slayer helmet (i)','Green slayer helmet','Green slayer helmet (i)','Red slayer helmet','Red slayer helmet (i)','Purple slayer helmet','Purple slayer helmet (i)','Turquoise slayer helmet','Turquoise slayer helmet (i)','Hydra slayer helmet','Hydra slayer helmet (i)','Twisted slayer helmet','Twisted slayer helmet (i)'];
                amulets = ['Salve amulet','Salve amulet(i)'];
                amulets_e = ['Salve amulet (e)','Salve amulet(ei)'];
            }
            if(amulets_e.includes(loadout.equipment.neck)){
                return salve_e;
            }
            if(amulets.includes(loadout.equipment.neck)){
                return salve;
            }
            if(helmets.includes(loadout.equipment.head) && loadout.monster.cT.includes('slayer')){
                return mask;
            }
            return 1;
        },
    }
    //end check
    
} //end of calc object

export default calc;